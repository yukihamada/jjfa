import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useStreamSetup } from "@/components/live-streaming/hooks/useStreamSetup";
import { StreamPreviewSetup } from "@/components/live-streaming/StreamPreviewSetup";
import { Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const StreamingStudio = () => {
  const navigate = useNavigate();
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
    startStream,
    stopStream
  } = useStreamSetup(crypto.randomUUID(), () => {}, () => {});

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

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/live')}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          配信一覧に戻る
        </Button>

        <Card className="p-6">
          <div className="space-y-6">
            <div className="space-y-4">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="配信タイトルを入力"
                disabled={isStreaming}
                className="text-lg"
              />
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="配信の説明を入力（任意）"
                disabled={isStreaming}
                className="h-24"
              />
            </div>

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
                  size="lg"
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
                  size="lg"
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
        </Card>
      </div>
    </div>
  );
};

export default StreamingStudio;