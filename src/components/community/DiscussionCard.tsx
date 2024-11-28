import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Calendar, Heart, Megaphone, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
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
  const isAdminPost = discussion.tags?.some((tag: any) => tag.name === '運営');

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
    <Card className={`group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 ${
      isAdminPost ? 'border-l-orange-500' : 'border-l-indigo-500'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-grow">
            <div className="flex items-center gap-2 flex-wrap">
              {isAdminPost && (
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 flex items-center gap-1">
                  <Megaphone className="w-3 h-3" />
                  運営からのお知らせ
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {discussion.title}
              </h3>
              {discussion.tags?.map((tag: any) => (
                <Badge key={tag.id} variant="secondary" className={`text-xs ${
                  tag.name === '運営' 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {tag.name}
                </Badge>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="flex items-center">
                {discussion.profiles?.avatar_url ? (
                  <img
                    src={discussion.profiles.avatar_url}
                    alt={discussion.profiles?.username || '匿名'}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 mr-2" />
                )}
                <span>{discussion.profiles?.username || '匿名'}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={discussion.created_at}>
                  {format(new Date(discussion.created_at), 'PPP', { locale: ja })}
                </time>
              </div>
            </div>
          </div>
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
        <p className="mt-4 text-slate-600 whitespace-pre-wrap leading-relaxed">
          {discussion.content}
        </p>
        {discussion.attachments && discussion.attachments.length > 0 && (
          <AttachmentPreview attachments={discussion.attachments} readonly />
        )}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-500 hover:text-indigo-600"
              onClick={handleLike}
              disabled={isLiking}
            >
              <Heart className={`w-4 h-4 mr-1 ${discussion.likes?.length > 0 ? 'fill-current text-pink-500' : ''}`} />
              <span>{discussion.likes?.length || 0}</span>
            </Button>
            <div className="flex items-center text-slate-500">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>{discussion.comments?.length || 0}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};