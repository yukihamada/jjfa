import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { MessageSquare, Heart, Trash2 } from "lucide-react";
import { AttachmentPreview } from "./AttachmentPreview";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();
  const timeAgo = formatDistanceToNow(new Date(discussion.created_at), {
    addSuffix: true,
    locale: ja,
  });

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

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const { error } = await supabase
        .from('discussions')
        .delete()
        .eq('id', discussion.id);

      if (error) throw error;

      await queryClient.invalidateQueries({ queryKey: ['discussions'] });
      toast.success("投稿を削除しました");
    } catch (error) {
      console.error('Delete error:', error);
      toast.error("投稿の削除に失敗しました");
    } finally {
      setIsDeleting(false);
    }
  };

  const canDelete = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user?.id === discussion.user_id;
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-3">
        <Link to={`/profile/${discussion.profile?.id}`}>
          <Avatar className="h-10 w-10 ring-2 ring-white">
            <AvatarImage src={discussion.profile?.avatar_url} alt={discussion.profile?.username || "ユーザー"} />
            <AvatarFallback>{(discussion.profile?.username || "?")?.[0]}</AvatarFallback>
          </Avatar>
        </Link>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Link 
              to={`/profile/${discussion.profile?.id}`}
              className="font-medium hover:text-primary transition-colors"
            >
              {discussion.profile?.username || "匿名ユーザー"}
            </Link>
            <span className="text-sm text-slate-400">・</span>
            <span className="text-sm text-slate-400">{timeAgo}</span>
          </div>
          
          <Link to={`/community/discussion/${discussion.id}`} className="block group">
            <p className="text-slate-600 whitespace-pre-wrap break-words">
              {discussion.content}
            </p>
            {discussion.attachments && discussion.attachments.length > 0 && (
              <div className="mt-3">
                <AttachmentPreview attachments={discussion.attachments} readonly />
              </div>
            )}
          </Link>

          <div className="flex items-center gap-6 mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-pink-600 -ml-3"
              onClick={handleLike}
              disabled={isLiking}
            >
              <Heart className={`w-4 h-4 mr-1.5 ${discussion.likes?.length > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
              <span>{discussion.likes?.length || 0}</span>
            </Button>
            
            <Link to={`/community/discussion/${discussion.id}`}>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-primary -ml-3"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                <span>{discussion.comments?.length || 0}</span>
              </Button>
            </Link>

            {canDelete() && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 hover:text-red-600 -ml-3"
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
        </div>
      </div>
    </div>
  );
};