import { useState } from "react";
import { Star, Trash2, Edit2, MessageSquare, X } from "lucide-react";
import { SkillLevel } from "./SkillLevelSelect";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProgressListProps {
  userProgress: any[] | undefined;
}

export const ProgressList = ({ userProgress }: ProgressListProps) => {
  const [editingProgress, setEditingProgress] = useState<any | null>(null);
  const [commentText, setCommentText] = useState("");
  const [selectedProgress, setSelectedProgress] = useState<any | null>(null);
  const queryClient = useQueryClient();

  const { data: comments, isLoading: isLoadingComments } = useQuery({
    queryKey: ["progressComments", selectedProgress?.id],
    queryFn: async () => {
      if (!selectedProgress) return [];
      const { data, error } = await supabase
        .from("learning_progress_comments")
        .select("*, profiles(full_name)")
        .eq("progress_id", selectedProgress.id)
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
    enabled: !!selectedProgress,
  });

  const deleteProgress = useMutation({
    mutationFn: async (progressId: string) => {
      const { error } = await supabase
        .from("learning_progress")
        .delete()
        .eq("id", progressId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["learningProgress"] });
      toast.success("進捗を削除しました");
    },
    onError: (error) => {
      console.error("Error deleting progress:", error);
      toast.error("進捗の削除に失敗しました");
    },
  });

  const addComment = useMutation({
    mutationFn: async ({ progressId, content }: { progressId: string; content: string }) => {
      const { error } = await supabase
        .from("learning_progress_comments")
        .insert({ progress_id: progressId, content });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progressComments", selectedProgress?.id] });
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
      queryClient.invalidateQueries({ queryKey: ["progressComments", selectedProgress?.id] });
      toast.success("コメントを削除しました");
    },
    onError: (error) => {
      console.error("Error deleting comment:", error);
      toast.error("コメントの削除に失敗しました");
    },
  });

  if (!userProgress || userProgress.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">最近の進捗</h3>
      <div className="space-y-4">
        {userProgress.map((progress) => (
          <div
            key={progress.id}
            className="p-4 border rounded-lg bg-slate-50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-slate-900">
                  {progress.technique}
                </h4>
                <p className="text-sm text-slate-600">{progress.notes}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {["beginner", "intermediate", "advanced", "expert", "master"].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        index < ["beginner", "intermediate", "advanced", "expert", "master"].indexOf(progress.skill_level as SkillLevel) + 1
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProgress(progress)}
                  >
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingProgress(progress)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteProgress.mutate(progress.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            {progress.video_url && (
              <div className="mt-2">
                <video
                  controls
                  className="w-full rounded"
                  src={progress.video_url}
                >
                  お使いのブラウザは動画の再生に対応していません。
                </video>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={!!selectedProgress} onOpenChange={() => setSelectedProgress(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>コメント - {selectedProgress?.technique}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              {comments?.map((comment: any) => (
                <div key={comment.id} className="flex items-start justify-between bg-slate-50 p-2 rounded">
                  <div>
                    <p className="text-sm font-medium">{comment.profiles?.full_name || "ユーザー"}</p>
                    <p className="text-sm text-slate-600">{comment.content}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteComment.mutate(comment.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="コメントを入力..."
                className="flex-1"
              />
              <Button
                onClick={() => {
                  if (selectedProgress && commentText.trim()) {
                    addComment.mutate({
                      progressId: selectedProgress.id,
                      content: commentText.trim(),
                    });
                  }
                }}
                disabled={!commentText.trim()}
              >
                送信
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};