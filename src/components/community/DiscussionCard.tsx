import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Calendar, Heart, Megaphone } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { AttachmentPreview } from "./AttachmentPreview";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const isAdminPost = discussion.tags?.some((tag: any) => tag.name === '運営');

  return (
    <Card className={`bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-l-4 ${
      isAdminPost ? 'border-l-orange-500' : 'border-l-indigo-500'
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              {isAdminPost && (
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700 flex items-center gap-1">
                  <Megaphone className="w-3 h-3" />
                  運営からのお知らせ
                </Badge>
              )}
              <h3 className="text-xl font-semibold text-slate-900">{discussion.title}</h3>
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
        <p className="mt-4 text-slate-600 whitespace-pre-wrap leading-relaxed">{discussion.content}</p>
        {discussion.attachments && discussion.attachments.length > 0 && (
          <AttachmentPreview attachments={discussion.attachments} readonly />
        )}
        <div className="mt-6 flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{discussion.likes?.length || 0}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{discussion.comments?.length || 0}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};