import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Volume2, Wifi } from "lucide-react";

interface StreamPreviewProps {
  streamKey: string;
  isStreaming: boolean;
}

export const StreamPreview = ({ streamKey, isStreaming }: StreamPreviewProps) => {
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isStreaming && videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.src = `https://stream.jjfa.jp/live/${streamKey}/index.m3u8`;
      videoElement.play().catch(console.error);

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
      };

      const intervalId = setInterval(checkAudioLevel, 100);
      return () => {
        clearInterval(intervalId);
        audioContext.close();
      };
    }
  }, [isStreaming, streamKey]);

  return (
    <Card className="p-4 space-y-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          playsInline
          muted
          controls
        />
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
        <div className="flex items-center gap-2">
          <Wifi className={`w-5 h-5 ${isStreaming ? 'text-green-500' : 'text-gray-400'}`} />
          <span className="font-medium">
            {isStreaming ? '配信中' : '未接続'}
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
  );
};