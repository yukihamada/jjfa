import { LiveStream } from "@/types/live-streaming";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

interface StreamCardProps {
  stream: LiveStream;
  onClick: () => void;
}

export const StreamCard = ({ stream, onClick }: StreamCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          {stream.thumbnail_url ? (
            <img 
              src={stream.thumbnail_url} 
              alt={stream.title} 
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              <span className="text-slate-400">No thumbnail</span>
            </div>
          )}
          <Badge 
            variant={stream.status === 'live' ? 'destructive' : 'secondary'}
            className="absolute top-2 right-2"
          >
            {stream.status === 'live' ? 'LIVE' : '配信終了'}
          </Badge>
        </div>

        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold line-clamp-1">{stream.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-2">{stream.description}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={stream.profiles.avatar_url} />
                <AvatarFallback>
                  {stream.profiles.username?.[0]?.toUpperCase() || 'U'}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{stream.profiles.username}</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{stream.viewer_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>
                  {formatDistanceToNow(new Date(stream.created_at), { 
                    addSuffix: true,
                    locale: ja 
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};