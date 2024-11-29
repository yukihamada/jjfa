import { Button } from "@/components/ui/button";
import { Heart, MessageSquare } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface DiscussionActionsProps {
  discussion: any;
  showCommentForm: boolean;
  onCommentClick: () => void;
}

export const DiscussionActions = ({ 
  discussion, 
  showCommentForm, 
  onCommentClick 
}: DiscussionActionsProps) => {
  const [isLiking, setIsLiking] = useState(false);
  const queryClient = useQueryClient();

  const handleLike = async () => {
    try {
      setIsLiking(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("いいねするにはログインが必要です");
        return;
      }

      const { error } = await supabase
        .from('likes')
        .insert([
          { discussion_id: discussion.id, user_id: user.id }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast.error("すでにいいねしています");
        } else {
          throw error;
        }
      } else {
        queryClient.invalidateQueries({ queryKey: ['discussions'] });
        toast.success("いいねしました！");
      }
    } catch (error) {
      console.error('Like error:', error);
      toast.error("いいねに失敗しました");
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="mt-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-500 hover:text-indigo-600"
          onClick={handleLike}
          disabled={isLiking}
        >
          <Heart className={`w-4 h-4 mr-1 ${discussion.likes?.length > 0 ? 'fill-current text-pink-500' : ''}`} />
          <span>{discussion.likes?.length || 0}</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-500 hover:text-indigo-600"
          onClick={onCommentClick}
        >
          <MessageSquare className="w-4 h-4 mr-1" />
          <span>{discussion.comments?.length || 0}</span>
        </Button>
      </div>
    </div>
  );
};