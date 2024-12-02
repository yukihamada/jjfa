import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Video } from "lucide-react";
import { BrowserStreamControls } from "./BrowserStreamControls";
import { toast } from "sonner";

interface StreamSetupInstructionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  streamKey: string;
  onStreamStart?: () => void;
  onStreamEnd?: () => void;
}

export const StreamSetupInstructions = ({
  open,
  onOpenChange,
  streamKey,
  onStreamStart,
  onStreamEnd
}: StreamSetupInstructionsProps) => {
  const [showBrowserControls, setShowBrowserControls] = useState(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("コピーしました");
    } catch (error) {
      toast.error("コピーに失敗しました");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>配信設定</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowBrowserControls(true)}
            >
              <Video className="w-4 h-4 mr-2" />
              ブラウザから配信を開始
            </Button>
          </div>

          {showBrowserControls && (
            <BrowserStreamControls
              streamKey={streamKey}
              onStreamStart={onStreamStart}
              onStreamEnd={onStreamEnd}
            />
          )}

          <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">RTMP URL</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy("rtmp://stream.jjfa.jp/live")}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">rtmp://stream.jjfa.jp/live</code>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ストリームキー</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(streamKey)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">{streamKey}</code>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">WebSocket URL</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(`wss://stream.jjfa.jp/ws`)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">wss://stream.jjfa.jp/ws</code>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">視聴用URL</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onCopy(`https://stream.jjfa.jp/live/${streamKey}/index.m3u8`)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">https://stream.jjfa.jp/live/{streamKey}/index.m3u8</code>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};