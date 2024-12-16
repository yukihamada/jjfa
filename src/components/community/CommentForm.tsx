import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface CommentFormProps {
  discussionId: string;
  onCancel?: () => void;
}

export const CommentForm = ({ discussionId, onCancel }: CommentFormProps) => {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast.error("コメントを入力してください");
      return;
    }

    setIsSubmitting(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      toast.error("コメントするにはログインが必要です");
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            discussion_id: discussionId,
            user_id: user.id,
            content: content.trim()
          }
        ]);

      if (error) {
        console.error('Comment error:', error);
        toast.error("コメントの投稿に失敗しました");
      } else {
        toast.success("コメントを投稿しました");
        setContent("");
        // Invalidate both discussions and comments queries
        await Promise.all([
          queryClient.invalidateQueries({ queryKey: ['discussions'] }),
          queryClient.invalidateQueries({ queryKey: ['discussion', discussionId] }),
          queryClient.invalidateQueries({ queryKey: ['comments'] })
        ]);
        if (onCancel) onCancel();
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("予期せぬエラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="コメントを入力..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex justify-end gap-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            キャンセル
          </Button>
        )}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              送信中...
            </>
          ) : (
            "コメントする"
          )}
        </Button>
      </div>
    </form>
  );
};