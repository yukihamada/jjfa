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
  title?: string;
  description?: React.ReactNode;
  steps?: string[];
  rtmpUrl?: string;
  onCopy?: (text: string) => void;
}

export const StreamSetupInstructions = ({
  open,
  onOpenChange,
  streamKey,
  onStreamStart,
  onStreamEnd,
  title,
  description,
  steps,
  rtmpUrl = "rtmp://global.rtmp.livekit.cloud/live",
  onCopy
}: StreamSetupInstructionsProps) => {
  const [showBrowserControls, setShowBrowserControls] = useState(false);
  const wsUrl = import.meta.env.VITE_LIVEKIT_WS_URL;

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("コピーしました");
      onCopy?.(text);
    } catch (error) {
      toast.error("コピーに失敗しました");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || "配信設定"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {description && <div className="text-sm text-gray-600">{description}</div>}
          
          {steps && (
            <div className="space-y-2">
              {steps.map((step, index) => (
                <p key={index} className="text-sm">
                  {index + 1}. {step}
                </p>
              ))}
            </div>
          )}

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
                  onClick={() => handleCopy(rtmpUrl)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">{rtmpUrl}</code>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">ストリームキー</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(streamKey)}
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
                  onClick={() => handleCopy(wsUrl)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">{wsUrl}</code>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">視聴用URL</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(`${rtmpUrl}/${streamKey}`)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  コピー
                </Button>
              </div>
              <code className="text-sm">{rtmpUrl}/{streamKey}</code>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};