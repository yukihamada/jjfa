import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Calendar, Heart, Megaphone } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { AttachmentPreview } from "./AttachmentPreview";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [isLiking, setIsLiking] = useState(false);
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