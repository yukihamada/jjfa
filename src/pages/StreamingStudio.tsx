import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const { streamKey } = useParams();
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
  } = useStreamSetup(streamKey || crypto.randomUUID(), () => {}, () => {});

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
    }
  };

  const handleUpdateStreamDetails = () => {
    if (streamKey) {
      updateStreamDetails(streamKey, title, description);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/live')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          配信一覧に戻る
        </Button>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="配信タイトルを入力"
                  disabled={isStreaming}
                />
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="配信の説明を入力"
                  disabled={isStreaming}
                />
                {!isStreaming && (
                  <Button 
                    onClick={handleUpdateStreamDetails}
                    variant="outline"
                    className="w-full"
                  >
                    配信情報を更新
                  </Button>
                )}
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
    </div>
  );
};

export default StreamingStudio;