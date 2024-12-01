import { Video } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { useLiveStreams } from "@/hooks/useLiveStreams";
import { StreamCard } from "./StreamCard";

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
      {myStream && (
        <Alert className="mb-6">
          <Video className="h-4 w-4" />
          <AlertTitle>配信ステータス</AlertTitle>
          <AlertDescription>
            {myStream.status === 'live' ? (
              <span className="text-green-600">現在配信中です！ 「{myStream.title}」</span>
            ) : (
              <span className="text-yellow-600">
                配信の準備ができました。OBSなどの配信ソフトで配信を開始してください。
                <br />
                配信キー: {myStream.stream_key}
              </span>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {streams?.map((stream) => (
          <StreamCard
            key={stream.id}
            stream={stream}
            onClick={() => navigate(`/live/${stream.id}`)}
          />
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
    </div>
  );
};