import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createLocalVideoTrack, createLocalAudioTrack } from "livekit-client";
import { toast } from "sonner";
import { Video, Loader2 } from "lucide-react";

interface StreamPreviewSetupProps {
  onPreviewReady: (video: HTMLVideoElement, videoTrack: any, audioTrack: any) => void;
}

export const StreamPreviewSetup = ({ onPreviewReady }: StreamPreviewSetupProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const requestPermissions = async () => {
    try {
      setIsLoading(true);
      
      const videoTrack = await createLocalVideoTrack({
        resolution: { width: 1280, height: 720 }
      });
      
      const audioTrack = await createLocalAudioTrack();

      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      videoTrack.attach(video);

      onPreviewReady(video, videoTrack, audioTrack);
    } catch (error) {
      console.error('Failed to get media permissions:', error);
      toast.error("カメラとマイクの許可が必要です");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={requestPermissions}
      disabled={isLoading}
      size="lg"
      className="w-full sm:w-auto min-w-[200px]"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          デバイスを確認中...
        </>
      ) : (
        <>
          <Video className="w-4 h-4 mr-2" />
          カメラとマイクを許可する
        </>
      )}
    </Button>
  );
};