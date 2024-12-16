import { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProgressItem } from "./ProgressItem";
import { ProgressComments } from "./ProgressComments";

interface ProgressListProps {
  userProgress: any[] | undefined;
  onEdit: (progress: any) => void;
}

export const ProgressList = ({ userProgress, onEdit }: ProgressListProps) => {
  const [selectedProgress, setSelectedProgress] = useState<any | null>(null);
  const queryClient = useQueryClient();

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

  if (!userProgress || userProgress.length === 0) return null;

  return (
    <div className="space-y-4">
      {userProgress.map((progress) => (
        <ProgressItem
          key={progress.id}
          progress={progress}
          onDelete={(id) => deleteProgress.mutate(id)}
          onEdit={onEdit}
          onCommentClick={setSelectedProgress}
        />
      ))}

      <Dialog open={!!selectedProgress} onOpenChange={() => setSelectedProgress(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>コメント - {selectedProgress?.technique}</DialogTitle>
            <DialogDescription>
              この技に関するコメントを追加・確認できます
            </DialogDescription>
          </DialogHeader>
          {selectedProgress && (
            <ProgressComments progressId={selectedProgress.id} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};