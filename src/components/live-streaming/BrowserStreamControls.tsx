import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StreamPreviewSetup } from "./StreamPreviewSetup";
import { StreamInfoForm } from "./StreamInfoForm";
import { useStreamSetup } from "./hooks/useStreamSetup";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface BrowserStreamControlsProps {
  streamKey: string;
  onStreamStart?: () => void;
  onStreamEnd?: () => void;
}

export const BrowserStreamControls = ({
  streamKey,
  onStreamStart,
  onStreamEnd
}: BrowserStreamControlsProps) => {
  const [previewElement, setPreviewElement] = useState<HTMLVideoElement | null>(null);
  const [videoTrack, setVideoTrack] = useState<any>(null);
  const [audioTrack, setAudioTrack] = useState<any>(null);

  const {
    isLoading,
    isStreaming,
    title,
    setTitle,
    description,
    setDescription,
    updateStreamDetails,
    startStream,
    stopStream
  } = useStreamSetup(streamKey, onStreamStart, onStreamEnd);

  const handlePreviewReady = (video: HTMLVideoElement, vTrack: any, aTrack: any) => {
    setPreviewElement(video);
    setVideoTrack(vTrack);
    setAudioTrack(aTrack);
  };

  const handleStartStream = async () => {
    if (!title.trim()) {
      toast.error("配信タイトルを入力してください");
      return;
    }

    if (!videoTrack || !audioTrack) {
      toast.error("カメラとマイクの設定を確認してください");
      return;
    }

    try {
      await startStream(videoTrack, audioTrack);
    } catch (error) {
      console.error('Failed to start stream:', error);
    }
  };

  const handleUpdateStreamDetails = () => {
    if (!title.trim()) {
      toast.error("配信タイトルを入力してください");
      return;
    }
    updateStreamDetails(streamKey, title, description);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="overflow-hidden bg-white shadow-lg">
        <div className="p-4 space-y-6">
          <StreamInfoForm
            title={title}
            description={description}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
            onUpdate={handleUpdateStreamDetails}
            isStreaming={isStreaming}
          />

          <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
            {previewElement && (
              <div ref={(container) => container?.appendChild(previewElement)} className="w-full h-full" />
            )}
          </div>
          
          <div className="flex justify-center">
            {!previewElement ? (
              <StreamPreviewSetup onPreviewReady={handlePreviewReady} />
            ) : !isStreaming ? (
              <Button
                onClick={handleStartStream}
                disabled={isLoading}
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    配信を開始中...
                  </>
                ) : (
                  "配信を開始"
                )}
              </Button>
            ) : (
              <Button
                onClick={stopStream}
                disabled={isLoading}
                variant="destructive"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    配信を終了中...
                  </>
                ) : (
                  "配信を終了"
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};