import { useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useLiveStreams } from "@/hooks/useLiveStreams";
import { StreamCard } from "./StreamCard";
import { StreamStatus } from "./StreamStatus";
import { EmptyState } from "./EmptyState";

export const LiveStreamList = () => {
  const navigate = useNavigate();
  const { streams, isLoading, myStream } = useLiveStreams();

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
    <div className="space-y-6">
      {myStream && <StreamStatus stream={myStream} />}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {streams?.map((stream) => (
          <StreamCard
            key={stream.id}
            stream={stream}
            onClick={() => navigate(`/live/${stream.id}`)}
          />
        ))}
        
        {streams?.length === 0 && <EmptyState />}
      </div>
    </div>
  );
};