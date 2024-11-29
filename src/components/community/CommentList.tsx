import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CommentListProps {
  comments: any[];
  discussionId: string;
}

export const CommentList = ({ comments, discussionId }: CommentListProps) => {
  const queryClient = useQueryClient();
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const handleDelete = async (commentId: string) => {
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId);

    if (error) {
      console.error('Delete comment error:', error);
      toast.error("コメントの削除に失敗しました");
    } else {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['discussions'] }),
        queryClient.invalidateQueries({ queryKey: ['discussion', discussionId] }),
        queryClient.invalidateQueries({ queryKey: ['comments'] })
      ]);
      toast.success("コメントを削除しました");
    }
  };

  const handleEdit = async (commentId: string) => {
    if (!editContent.trim()) {
      toast.error("コメントを入力してください");
      return;
    }

    const { error } = await supabase
      .from('comments')
      .update({ content: editContent.trim() })
      .eq('id', commentId);

    if (error) {
      console.error('Edit comment error:', error);
      toast.error("コメントの編集に失敗しました");
    } else {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['discussions'] }),
        queryClient.invalidateQueries({ queryKey: ['discussion', discussionId] }),
        queryClient.invalidateQueries({ queryKey: ['comments'] })
      ]);
      toast.success("コメントを編集しました");
      setEditingCommentId(null);
      setEditContent("");
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

  const canModify = async (userId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    return user?.id === userId;
  };

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white/50 p-4 rounded-lg border border-gray-100"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                {comment.profiles?.avatar_url ? (
                  <img
                    src={comment.profiles.avatar_url}
                    alt={comment.profiles?.username || '匿名'}
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200" />
                )}
                <span className="font-medium text-sm">
                  {comment.profiles?.username || '匿名'}
                </span>
                <span className="text-sm text-gray-500">
                  {format(new Date(comment.created_at), 'PPP', { locale: ja })}
                </span>
              </div>
              {editingCommentId === comment.id ? (
                <div className="space-y-2">
                  <Textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => handleEdit(comment.id)}>
                      保存
                    </Button>
                    <Button size="sm" variant="outline" onClick={cancelEdit}>
                      キャンセル
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
              )}
            </div>
            {canModify(comment.user_id) && editingCommentId !== comment.id && (
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-blue-600"
                  onClick={() => startEdit(comment)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>コメントを削除しますか？</AlertDialogTitle>
                      <AlertDialogDescription>
                        この操作は取り消すことができません。
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>キャンセル</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDelete(comment.id)}
                        className="bg-red-500 hover:bg-red-600"
                      >
                        削除する
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};