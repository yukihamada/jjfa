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
              <span className="text-slate-400">No thumbnail</span>
            </div>
          )}
          {badges}
          {stream.status === 'live' && (
            <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-sm rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              LIVE
            </div>
          )}
        </div>

        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
              {stream.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Avatar className="w-6 h-6">
                <AvatarImage src={stream.profiles.avatar_url} />
                <AvatarFallback>
                  {stream.profiles.username?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <span>{stream.profiles.username}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
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