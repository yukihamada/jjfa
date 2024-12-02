import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Volume2, Wifi, Settings, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface StreamPreviewProps {
  streamKey: string;
  isStreaming: boolean;
}

export const StreamPreview = ({ streamKey, isStreaming }: StreamPreviewProps) => {
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [viewerCount, setViewerCount] = useState<number>(0);
  const [streamHealth, setStreamHealth] = useState<'excellent' | 'good' | 'poor'>('excellent');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isStreaming && videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.src = `https://stream.jjfa.jp/live/${streamKey}/index.m3u8`;
      
      videoElement.play().catch((error) => {
        console.error('Video playback error:', error);
        toast.error("動画の再生に失敗しました。再読み込みしてください。");
      });

      // Audio visualization setup
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const mediaElement = new Audio();
      mediaElement.src = videoElement.src;
      const source = audioContext.createMediaElementSource(mediaElement);
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      const checkAudioLevel = () => {
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
        setAudioLevel(average);

        // Stream health check based on audio levels
        if (average > 200) setStreamHealth('excellent');
        else if (average > 100) setStreamHealth('good');
        else setStreamHealth('poor');
      };

      const intervalId = setInterval(checkAudioLevel, 100);

      // Subscribe to viewer count updates
      const channel = supabase
        .channel('public:live_streams')
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'live_streams',
            filter: `stream_key=eq.${streamKey}`,
          },
          (payload) => {
            if (payload.new && 'viewer_count' in payload.new) {
              setViewerCount(payload.new.viewer_count as number);
            }
          }
        )
        .subscribe();

      return () => {
        clearInterval(intervalId);
        audioContext.close();
        channel.unsubscribe();
      };
    }
  }, [isStreaming, streamKey]);

  const getHealthColor = () => {
    switch (streamHealth) {
      case 'excellent': return 'text-green-500';
      case 'good': return 'text-yellow-500';
      case 'poor': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          playsInline
          muted
          controls
        />
        {isStreaming && (
          <Badge 
            variant="destructive" 
            className="absolute top-2 left-2 animate-pulse"
          >
            LIVE
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Wifi className={`w-5 h-5 ${getHealthColor()}`} />
            <span className="font-medium">
              {isStreaming ? '配信品質' : '未接続'}
            </span>
          </div>
          {isStreaming && (
            <span className={`text-sm ${getHealthColor()}`}>
              {streamHealth === 'excellent' ? '最高' : streamHealth === 'good' ? '良好' : '低下'}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            <span className="font-medium">音声レベル</span>
          </div>
          <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-100"
              style={{ width: `${(audioLevel / 255) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="font-medium">視聴者数</span>
          </div>
          <span className="text-lg font-semibold">{viewerCount}</span>
        </div>
      </div>
    </Card>
  );
};