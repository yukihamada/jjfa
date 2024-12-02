import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Video } from "lucide-react";
import { LiveStream } from "@/types/live-streaming";
import { StreamPreview } from "./StreamPreview";

interface StreamStatusProps {
  stream: LiveStream;
}

export const StreamStatus = ({ stream }: StreamStatusProps) => {
  return (
    <div className="space-y-3">
      <Alert>
        <Video className="h-4 w-4" />
        <AlertTitle className="text-sm">配信ステータス</AlertTitle>
        <AlertDescription className="text-xs">
          {stream.status === 'live' ? (
            <span className="text-green-600">現在配信中です！ 「{stream.title}」</span>
          ) : (
            <span className="text-yellow-600">
              配信の準備ができました。OBSなどの配信ソフトで配信を開始してください。
              <br />
              配信キー: {stream.stream_key}
            </span>
          )}
        </AlertDescription>
      </Alert>

      {stream.status === 'live' && (
        <StreamPreview 
          streamKey={stream.stream_key} 
          isStreaming={stream.status === 'live'} 
        />
      )}
    </div>
  );
};