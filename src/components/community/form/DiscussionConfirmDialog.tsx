import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { DiscussionFormState } from "./useDiscussionForm";

interface DiscussionConfirmDialogProps {
  formState: DiscussionFormState;
  setFormState: (state: DiscussionFormState | ((prev: DiscussionFormState) => DiscussionFormState)) => void;
  onConfirm: () => void;
  isSubmitting: boolean;
}

export const DiscussionConfirmDialog = ({
  formState,
  setFormState,
  onConfirm,
  isSubmitting,
}: DiscussionConfirmDialogProps) => {
  return (
    <AlertDialog 
      open={formState.showConfirmDialog} 
      onOpenChange={(open) => setFormState(prev => ({ ...prev, showConfirmDialog: open }))}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>投稿の確認</AlertDialogTitle>
          <AlertDialogDescription>
            この内容で投稿してよろしいですか？
            {formState.attachments.length > 0 && (
              <p className="mt-2">
                添付ファイル: {formState.attachments.length}件
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                投稿中...
              </>
            ) : (
              "投稿する"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};