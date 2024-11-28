import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
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
          profiles (username, full_name),
          likes (user_id),
          comments (
            id,
            content,
            created_at,
            profiles (username, full_name)
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const toggleLike = useMutation({
    mutationFn: async (discussionId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      const { data: existingLike } = await supabase
        .from('likes')
        .select()
        .eq('discussion_id', discussionId)
        .eq('user_id', user.id)
        .single();

      if (existingLike) {
        const { error } = await supabase
          .from('likes')
          .delete()
          .eq('discussion_id', discussionId)
          .eq('user_id', user.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('likes')
          .insert([
            {
              discussion_id: discussionId,
              user_id: user.id
            }
          ]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
    },
    onError: (error) => {
      console.error("Like toggle error:", error);
      toast.error("操作に失敗しました。もう一度お試しください。");
    }
  });

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2 text-gray-600">読み込み中...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {discussions?.map((discussion: any) => (
        <Card key={discussion.id} className="bg-white shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-2 mb-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {discussion.profiles?.username?.[0] || discussion.profiles?.full_name?.[0] || '?'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">
                  {discussion.profiles?.username || discussion.profiles?.full_name || '匿名ユーザー'}
                </p>
                <p className="text-sm text-slate-500">
                  {formatDistanceToNow(new Date(discussion.created_at), { 
                    addSuffix: true,
                    locale: ja 
                  })}
                </p>
              </div>
            </div>
            <CardTitle>{discussion.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap mb-4">{discussion.content}</p>
            <div className="flex items-center justify-between">
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
                <span>♥</span>
                <span>{discussion.likes?.length || 0}</span>
              </Button>
              <span className="text-sm text-slate-500">
                コメント {discussion.comments?.length || 0}件
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};