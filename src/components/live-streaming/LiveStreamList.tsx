import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const LiveStreamList = () => {
  const navigate = useNavigate();
  
  const { data: streams, isLoading } = useQuery({
    queryKey: ['live-streams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('live_streams')
        .select(`
          *,
          profiles (
            username,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <Skeleton className="w-full h-48" />
              <div className="p-4">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {streams?.map((stream) => (
        <Card 
          key={stream.id} 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate(`/live/${stream.id}`)}
        >
          <CardContent className="p-0">
            {stream.thumbnail_url ? (
              <img 
                src={stream.thumbnail_url} 
                alt={stream.title} 
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-slate-100 flex items-center justify-center">
                No thumbnail
              </div>
            )}
            <div className="p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{stream.title}</CardTitle>
                  <p className="text-sm text-slate-500">{stream.description}</p>
                </div>
                <Badge variant={stream.status === 'live' ? 'destructive' : 'secondary'}>
                  {stream.status === 'live' ? 'LIVE' : '配信終了'}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={stream.profiles?.avatar_url} />
                    <AvatarFallback>
                      {stream.profiles?.username?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{stream.profiles?.username}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <Eye className="w-4 h-4" />
                  <span>{stream.viewer_count}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {streams?.length === 0 && (
        <div className="col-span-full text-center py-12 text-slate-500">
          現在配信中の番組はありません
        </div>
      )}
    </div>
  );
};