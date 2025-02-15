import { Card, CardContent } from "@/components/ui/card";
import { DiscussionHeader } from "./DiscussionHeader";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionActions } from "./DiscussionActions";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
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
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
    };
    getUser();
  }, []);

  const handleCommentClick = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const { error } = await supabase
        .from('discussions')
        .delete()
        .eq('id', discussion.id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      toast.success("投稿を削除しました");
      setShowDeleteDialog(false);
    } catch (error) {
      console.error('Delete error:', error);
      toast.error("削除に失敗しました");
    } finally {
      setIsDeleting(false);
    }
  };

  const isOwner = currentUser?.id === discussion.user_id;

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-all">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <DiscussionHeader discussion={discussion} />
            {isOwner && (
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:text-red-600"
                onClick={() => setShowDeleteDialog(true)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <DiscussionContent discussion={discussion} />
          <DiscussionActions 
            discussion={discussion} 
            showCommentForm={showCommentForm}
            onCommentClick={handleCommentClick}
          />
          {showCommentForm && (
            <div className="mt-4">
              <CommentForm 
                discussionId={discussion.id} 
                onCancel={() => setShowCommentForm(false)}
              />
            </div>
          )}
          {discussion.comments && discussion.comments.length > 0 && (
            <div className="mt-4">
              <CommentList comments={discussion.comments} discussionId={discussion.id} />
            </div>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>投稿を削除しますか？</AlertDialogTitle>
            <AlertDialogDescription>
              この操作は取り消せません。本当に削除してもよろしいですか？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700"
            >
              削除する
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};