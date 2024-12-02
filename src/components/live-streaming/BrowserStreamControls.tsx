import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface BrowserStreamControlsProps {
  streamKey: string;
  onStreamStart: () => void;
  onStreamEnd: () => void;
}

export const BrowserStreamControls = ({ 
  streamKey, 
  onStreamStart,
  onStreamEnd 
}: BrowserStreamControlsProps) => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      setMediaStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsStreaming(true);
      
      const { error } = await supabase
        .from('live_streams')
        .update({ status: 'live', started_at: new Date().toISOString() })
        .eq('stream_key', streamKey);
      
      if (error) throw error;
      
      onStreamStart();
      toast.success("配信を開始しました");
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast.error("カメラとマイクの使用を許可してください");
    }
  };

  const stopStream = async () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
    setIsStreaming(false);

    const { error } = await supabase
      .from('live_streams')
      .update({ 
        status: 'ended', 
        ended_at: new Date().toISOString() 
      })
      .eq('stream_key', streamKey);

    if (error) throw error;
    
    onStreamEnd();
    toast.success("配信を終了しました");
  };

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mediaStream]);

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">ブラウザから配信</h3>
      <ol className="list-decimal list-inside space-y-2">
        <li>カメラとマイクの使用を許可してください</li>
        <li>「配信開始」ボタンをクリックして配信を開始します</li>
        <li>配信を終了する場合は「配信終了」ボタンをクリックします</li>
      </ol>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          ブラウザ配信は実験的な機能です。安定した配信にはOBSの使用をお勧めします。
        </AlertDescription>
      </Alert>

      {mediaStream && (
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="flex justify-center">
        <Button 
          className="w-full max-w-sm"
          onClick={isStreaming ? stopStream : startStream}
          disabled={isStreaming && !mediaStream}
        >
          {isStreaming ? (
            mediaStream ? (
              "配信を終了"
            ) : (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                接続中...
              </>
            )
          ) : (
            "配信を開始"
          )}
        </Button>
      </div>
    </div>
  );
};