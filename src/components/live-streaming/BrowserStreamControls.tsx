import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StreamPreviewSetup } from "./StreamPreviewSetup";
import { StreamInfoForm } from "./StreamInfoForm";
import { useStreamSetup } from "./hooks/useStreamSetup";

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

  const handleStartStream = () => {
    startStream(videoTrack, audioTrack);
  };

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="space-y-4">
          <StreamInfoForm
            title={title}
            description={description}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
            onUpdate={updateStreamDetails}
            isStreaming={isStreaming}
          />

          <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
            {previewElement && (
              <div ref={(container) => container?.appendChild(previewElement)} className="w-full h-full" />
            )}
          </div>
          
          <div className="flex justify-end">
            {!previewElement ? (
              <StreamPreviewSetup onPreviewReady={handlePreviewReady} />
            ) : !isStreaming ? (
              <Button
                onClick={handleStartStream}
                disabled={isLoading}
                className="w-full sm:w-auto"
              >
                配信を開始
              </Button>
            ) : (
              <Button
                onClick={stopStream}
                disabled={isLoading}
                variant="destructive"
                className="w-full sm:w-auto"
              >
                配信を終了
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};