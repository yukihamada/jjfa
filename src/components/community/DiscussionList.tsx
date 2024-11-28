import { MessageSquare, ThumbsUp, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export const DiscussionList = () => {
  const queryClient = useQueryClient();
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUserId(user?.id || null);
    };
    getCurrentUser();
  }, []);

  const { data: discussions, isLoading } = useQuery({
    queryKey: ['discussions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profiles:profiles(username),
          likes:likes(user_id),
          comments:comments(*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const toggleLike = useMutation({
    mutationFn: async (discussionId: string) => {
      const { data: existingLike, error: fetchError } = await supabase
        .from('likes')
        .select('*')
        .eq('discussion_id', discussionId)
        .eq('user_id', currentUserId)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (existingLike) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('discussion_id', discussionId)
          .eq('user_id', currentUserId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('likes')
          .insert([{ discussion_id: discussionId, user_id: currentUserId }]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
    },
    onError: (error) => {
      toast.error(`いいねの処理に失敗しました: ${error.message}`);
    },
  });

  const deleteDiscussion = useMutation({
    mutationFn: async (discussionId: string) => {
      const { error } = await supabase
        .from('discussions')
        .delete()
        .eq('id', discussionId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      toast.success('投稿を削除しました');
    },
    onError: (error) => {
      toast.error(`削除に失敗しました: ${error.message}`);
    },
  });

  if (isLoading) {
    return <div className="text-center">読み込み中...</div>;
  }

  return (
    <div className="space-y-4">
      {discussions?.map((discussion: any) => (
        <Card key={discussion.id} className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{discussion.title}</h3>
              <p className="text-sm text-slate-500">
                投稿者: {discussion.profiles?.username || '匿名'}
              </p>
            </div>
            {discussion.user_id === currentUserId && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteDiscussion.mutate(discussion.id)}
                disabled={deleteDiscussion.isPending}
              >
                <Trash className="h-4 w-4 text-red-500" />
              </Button>
            )}
          </div>
          <p className="mb-4">{discussion.content}</p>
          <div className="flex items-center space-x-4 text-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleLike.mutate(discussion.id)}
              disabled={toggleLike.isPending}
              className={`flex items-center space-x-1 ${
                discussion.likes?.some((like: any) => like.user_id === currentUserId)
                  ? 'text-red-500'
                  : 'text-slate-500'
              }`}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{discussion.likes?.length || 0}</span>
            </Button>
            <div className="flex items-center space-x-1 text-slate-500">
              <MessageSquare className="h-4 w-4" />
              <span>{discussion.comments?.length || 0}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};