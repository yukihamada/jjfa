import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye, Clock, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

interface Profile {
  username: string;
  avatar_url: string;
}

interface LiveStream {
  id: string;
  title: string;
  description: string | null;
  status: 'live' | 'offline' | 'ended';
  viewer_count: number;
  thumbnail_url: string | null;
  profiles: Profile;
  created_at: string;
  updated_at: string;
  stream_key: string;
  started_at: string | null;
  ended_at: string | null;
  user_id: string;
}

export const LiveStreamList = () => {
  const navigate = useNavigate();
  
  const { data: streams, isLoading } = useQuery({
    queryKey: ['live-streams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('live_streams')
        .select(`
          *,
          profiles:user_id (
            username,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as unknown as LiveStream[];
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <Skeleton className="w-full h-48" />
              <div className="p-4 space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {streams?.map((stream) => (
        <Card 
          key={stream.id} 
          className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
          onClick={() => navigate(`/live/${stream.id}`)}
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
      ))}
      
      {streams?.length === 0 && (
        <div className="col-span-full text-center py-12">
          <div className="max-w-sm mx-auto space-y-4">
            <Video className="w-12 h-12 mx-auto text-slate-300" />
            <div>
              <p className="text-lg font-medium">現在配信中の番組はありません</p>
              <p className="text-sm text-slate-500">
                新しい配信が始まるのをお待ちください
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};