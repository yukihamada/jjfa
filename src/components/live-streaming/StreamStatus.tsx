import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Video, Volume2, Wifi } from "lucide-react";
import { LiveStream } from "@/types/live-streaming";
import { useState, useEffect, useRef } from "react";

interface StreamStatusProps {
  stream: LiveStream;
}

export const StreamStatus = ({ stream }: StreamStatusProps) => {
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (stream.status === 'live' && videoRef.current) {
      // Set up video preview
      videoRef.current.src = `https://stream.jjfa.jp/live/${stream.stream_key}/index.m3u8`;
      videoRef.current.play().catch(error => {
        console.error('Video playback failed:', error);
      });

      // Set up audio visualization
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const mediaElement = new Audio();
      mediaElement.src = `https://stream.jjfa.jp/live/${stream.stream_key}/index.m3u8`;
      const source = audioContext.createMediaElementSource(mediaElement);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      const checkAudioLevel = () => {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
        setAudioLevel(average);
      };

      const intervalId = setInterval(checkAudioLevel, 100);
      return () => {
        clearInterval(intervalId);
        audioContext.close();
      };
    }
  }, [stream.status, stream.stream_key]);

  return (
    <div className="space-y-4">
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

      {stream.status === 'live' && (
        <Card className="p-4 space-y-4">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full"
              playsInline
              muted
              controls
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Wifi className={`w-5 h-5 ${stream.status === 'live' ? 'text-green-500' : 'text-gray-400'}`} />
              <span className="font-medium">
                {stream.status === 'live' ? '配信中' : '未接続'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5" />
              <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-100"
                  style={{ width: `${(audioLevel / 255) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};