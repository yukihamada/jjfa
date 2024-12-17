import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { CommentItem } from "./comment/CommentItem";
import { DeleteCommentDialog } from "./comment/DeleteCommentDialog";
import { EditCommentForm } from "./comment/EditCommentForm";

interface CommentListProps {
  comments: any[];
  discussionId: string;
}

export const CommentList = ({ comments, discussionId }: CommentListProps) => {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUserId(user?.id || null);
    };
    getCurrentUser();
  }, []);

  const handleDelete = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('comments')
        .delete()
        .eq('id', commentId);

      if (error) {
        console.error('Delete comment error:', error);
        toast.error("コメントの削除に失敗しました");
        return;
      }

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['discussions'] }),
        queryClient.invalidateQueries({ queryKey: ['discussion', discussionId] }),
        queryClient.invalidateQueries({ queryKey: ['comments'] })
      ]);
      toast.success("コメントを削除しました");
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("予期せぬエラーが発生しました");
    }
  };

  const handleEdit = async (commentId: string) => {
    if (!editContent.trim()) {
      toast.error("コメントを入力してください");
      return;
    }

    try {
      const { error } = await supabase
        .from('comments')
        .update({ content: editContent.trim() })
        .eq('id', commentId);

      if (error) {
        console.error('Edit comment error:', error);
        toast.error("コメントの編集に失敗しました");
        return;
      }

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['discussions'] }),
        queryClient.invalidateQueries({ queryKey: ['discussion', discussionId] }),
        queryClient.invalidateQueries({ queryKey: ['comments'] })
      ]);
      toast.success("コメントを編集しました");
      setEditingCommentId(null);
      setEditContent("");
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("予期せぬエラーが発生しました");
    }
  };

  const startEdit = (comment: any) => {
    setEditingCommentId(comment.id);
    setEditContent(comment.content);
  };

  const cancelEdit = () => {
    setEditingCommentId(null);
    setEditContent("");
  };

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isEditing={editingCommentId === comment.id}
        >
          {editingCommentId === comment.id ? (
            <EditCommentForm
              content={editContent}
              onChange={setEditContent}
              onSave={() => handleEdit(comment.id)}
              onCancel={cancelEdit}
            />
          ) : (
            <>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
              {currentUserId === comment.user_id && (
                <div className="flex gap-1 mt-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-gray-500 hover:text-blue-600"
                    onClick={() => startEdit(comment)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <DeleteCommentDialog onDelete={() => handleDelete(comment.id)} />
                </div>
              )}
            </>
          )}
        </CommentItem>
      ))}
    </div>
  );
};