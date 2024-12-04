import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { StreamPreviewSetup } from "./StreamPreviewSetup";
import { StreamInfoForm } from "./StreamInfoForm";
import { useStreamSetup } from "./hooks/useStreamSetup";
import { toast } from "sonner";
import { Copy, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

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
  const [streamUrl, setStreamUrl] = useState<string>("");

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
  } = useStreamSetup(streamKey, () => {
    onStreamStart?.();
    // Generate public URL when stream starts
    const url = `${window.location.origin}/live/${streamKey}`;
    setStreamUrl(url);
    toast.success("配信を開始しました！");
  }, onStreamEnd);

  const handlePreviewReady = (video: HTMLVideoElement, vTrack: any, aTrack: any) => {
    setPreviewElement(video);
    setVideoTrack(vTrack);
    setAudioTrack(aTrack);
  };

  const handleStartStream = async () => {
    if (!videoTrack || !audioTrack) {
      toast.error("カメラとマイクの設定を確認してください");
      return;
    }

    try {
      await startStream(videoTrack, audioTrack);
    } catch (error) {
      console.error('Failed to start stream:', error);
      toast.error("配信の開始に失敗しました。再度お試しください。");
    }
  };

  const copyStreamUrl = async () => {
    try {
      await navigator.clipboard.writeText(streamUrl);
      toast.success("配信URLをコピーしました");
    } catch (error) {
      console.error('Failed to copy URL:', error);
      toast.error("URLのコピーに失敗しました");
    }
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
          
          <div className="space-y-4">
            {isStreaming && streamUrl && (
              <div className="flex gap-2">
                <Input 
                  value={streamUrl} 
                  readOnly 
                  className="bg-slate-50"
                />
                <Button
                  onClick={copyStreamUrl}
                  variant="outline"
                  size="icon"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            )}

            <div className="flex justify-end">
              {!previewElement ? (
                <StreamPreviewSetup onPreviewReady={handlePreviewReady} />
              ) : !isStreaming ? (
                <Button
                  onClick={handleStartStream}
                  disabled={isLoading}
                  className="w-full sm:w-auto"
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
                  className="w-full sm:w-auto"
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
        </div>
      </Card>
    </div>
  );
};