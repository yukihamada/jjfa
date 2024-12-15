import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

interface ProgressCommentsProps {
  progressId: string;
}

export const ProgressComments = ({ progressId }: ProgressCommentsProps) => {
  const [commentText, setCommentText] = useState("");
  const queryClient = useQueryClient();

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ["progressComments", progressId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("learning_progress_comments")
        .select("*, profiles(full_name)")
        .eq("progress_id", progressId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const addComment = useMutation({
    mutationFn: async (content: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("learning_progress_comments")
        .insert({ 
          progress_id: progressId,
          content,
          user_id: user.id
        });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progressComments", progressId] });
      setCommentText("");
      toast.success("コメントを追加しました");
    },
    onError: (error) => {
      console.error("Error adding comment:", error);
      toast.error("コメントの追加に失敗しました");
    },
  });

  const deleteComment = useMutation({
    mutationFn: async (commentId: string) => {
      const { error } = await supabase
        .from("learning_progress_comments")
        .delete()
        .eq("id", commentId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progressComments", progressId] });
      toast.success("コメントを削除しました");
    },
    onError: (error) => {
      console.error("Error deleting comment:", error);
      toast.error("コメントの削除に失敗しました");
    },
  });

  return (
    <div className="space-y-4">
      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {comments?.map((comment: any) => (
          <div key={comment.id} className="flex items-start justify-between bg-slate-50 p-3 rounded">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 break-all">{comment.profiles?.full_name || "ユーザー"}</p>
              <p className="text-sm text-slate-600 break-all">{comment.content}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => deleteComment.mutate(comment.id)}
              className="ml-2 shrink-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">削除</span>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="コメントを入力..."
          className="flex-1 min-h-[80px]"
        />
        <Button
          onClick={() => {
            if (commentText.trim()) {
              addComment.mutate(commentText.trim());
            }
          }}
          disabled={!commentText.trim()}
          className="shrink-0"
        >
          送信
        </Button>
      </div>
    </div>
  );
};