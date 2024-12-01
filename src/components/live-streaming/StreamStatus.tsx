import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Video } from "lucide-react";
import { LiveStream } from "@/types/live-streaming";

interface StreamStatusProps {
  stream: LiveStream;
}

export const StreamStatus = ({ stream }: StreamStatusProps) => {
  return (
    <Alert className="mb-6">
      <Video className="h-4 w-4" />
      <AlertTitle>配信ステータス</AlertTitle>
      <AlertDescription>
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
  );
};