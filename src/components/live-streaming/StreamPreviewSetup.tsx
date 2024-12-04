import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createLocalVideoTrack, createLocalAudioTrack } from "livekit-client";
import { toast } from "sonner";
import { Video } from "lucide-react";

interface StreamPreviewSetupProps {
  onPreviewReady: (video: HTMLVideoElement, videoTrack: any, audioTrack: any) => void;
}

export const StreamPreviewSetup = ({ onPreviewReady }: StreamPreviewSetupProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasPermissions, setHasPermissions] = useState(false);

  const requestPermissions = async () => {
    try {
      setIsLoading(true);
      
      // First check if we have permissions
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      stream.getTracks().forEach(track => track.stop());
      
      const videoTrack = await createLocalVideoTrack({
        resolution: { width: 1280, height: 720 },
      });
      
      const audioTrack = await createLocalAudioTrack();

      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      videoTrack.attach(video);

      setHasPermissions(true);
      onPreviewReady(video, videoTrack, audioTrack);
    } catch (error) {
      console.error('Failed to get media permissions:', error);
      toast.error("カメラとマイクの許可が必要です。ブラウザの設定を確認してください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {!hasPermissions && (
        <Button
          onClick={requestPermissions}
          disabled={isLoading}
          className="w-full"
        >
          <Video className="w-4 h-4 mr-2" />
          カメラとマイクを許可する
        </Button>
      )}
    </div>
  );
};