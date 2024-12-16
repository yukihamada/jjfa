import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { MessageSquare, Heart } from "lucide-react";
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
            {discussion.title && (
              <h2 className="font-medium mb-2 group-hover:text-primary transition-colors">
                {discussion.title}
              </h2>
            )}
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
          </div>
        </div>
      </div>
    </div>
  );
};