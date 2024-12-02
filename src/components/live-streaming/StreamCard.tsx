import { Card, CardContent } from "@/components/ui/card";
import { LiveStream } from "@/types/live-streaming";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users } from "lucide-react";

interface StreamCardProps {
  stream: LiveStream;
  onClick: () => void;
  badges?: React.ReactNode;
}

export const StreamCard = ({ stream, onClick, badges }: StreamCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group relative"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video bg-slate-100">
          {stream.thumbnail_url ? (
            <img
              src={stream.thumbnail_url}
              alt={stream.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-200">
              <span className="text-slate-400 text-xs">No thumbnail</span>
            </div>
          )}
          {badges}
          {stream.status === 'live' && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              LIVE
            </div>
          )}
        </div>

        <div className="p-3 space-y-2">
          <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
            {stream.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <Avatar className="w-5 h-5">
              <AvatarImage src={stream.profiles.avatar_url} />
              <AvatarFallback>
                {stream.profiles.username?.[0]?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className="line-clamp-1">{stream.profiles.username}</span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{stream.viewer_count || 0}</span>
            </div>
            <time>
              {formatDistanceToNow(new Date(stream.created_at), {
                addSuffix: true,
                locale: ja,
              })}
            </time>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};