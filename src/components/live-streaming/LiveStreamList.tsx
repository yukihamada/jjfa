import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useLiveStreams } from "@/hooks/useLiveStreams";
import { StreamCard } from "./StreamCard";
import { StreamStatus } from "./StreamStatus";
import { EmptyState } from "./EmptyState";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

export const LiveStreamList = () => {
  const navigate = useNavigate();
  const { streams, isLoading, myStream } = useLiveStreams();

  if (isLoading) {
    return (
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <Skeleton className="w-full aspect-video" />
              <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const liveStreams = streams?.filter(stream => stream.status === 'live');
  const archivedStreams = streams?.filter(stream => stream.status === 'ended' && stream.archive_url);

  return (
    <div className="space-y-6 md:space-y-8">
      {myStream && <StreamStatus stream={myStream} />}

      {liveStreams && liveStreams.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">ライブ配信中</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {liveStreams.map((stream) => (
              <StreamCard
                key={stream.id}
                stream={stream}
                onClick={() => navigate(`/live/${stream.id}`)}
              />
            ))}
          </div>
        </div>
      )}

      {archivedStreams && archivedStreams.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">アーカイブ</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {archivedStreams.map((stream) => (
              <StreamCard
                key={stream.id}
                stream={stream}
                onClick={() => navigate(`/live/${stream.id}`)}
                badges={
                  stream.is_official_match && (
                    <Badge className="absolute top-2 right-2 bg-yellow-500">
                      <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      公式試合
                    </Badge>
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
      
      {(!streams || streams.length === 0) && <EmptyState />}
    </div>
  );
};