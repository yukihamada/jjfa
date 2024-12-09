import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { MessageSquare, ThumbsUp, Trash2 } from "lucide-react";
import { DiscussionActions } from "./DiscussionActions";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionHeader } from "./DiscussionHeader";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
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

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

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
    } catch (error) {
      console.error('Delete error:', error);
      toast.error("削除に失敗しました");
    } finally {
      setIsDeleting(false);
    }
  };

  const canDelete = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user?.id === discussion.user_id;
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <Link 
          to={`/community/discussion/${discussion.id}`} 
          className="block space-y-4 flex-grow"
        >
          <DiscussionHeader discussion={discussion} />
          <DiscussionContent discussion={discussion} />
          
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1 hover:text-primary transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span>{discussion.likes?.length || 0}</span>
            </div>
            <div className="flex items-center gap-1 hover:text-primary transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>{discussion.comments?.length || 0}</span>
            </div>
            <div className="flex gap-2">
              {discussion.tags?.map((tag: any) => (
                <Badge 
                  key={tag.id} 
                  variant="secondary"
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </Link>

        {canDelete() && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-500 hover:text-red-600"
                disabled={isDeleting}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>投稿を削除しますか？</AlertDialogTitle>
                <AlertDialogDescription>
                  この操作は取り消すことができません。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600"
                >
                  削除する
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
      <DiscussionActions 
        discussion={discussion} 
        showCommentForm={showCommentForm}
        onCommentClick={handleCommentClick}
      />
    </div>
  );
};