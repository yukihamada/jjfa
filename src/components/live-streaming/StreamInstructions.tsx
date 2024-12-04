import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BrowserStreamControls } from "./BrowserStreamControls";
import { StreamSetupInstructions } from "./StreamSetupInstructions";

interface StreamInstructionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  streamKey: string;
  onStreamStart?: () => void;
  onStreamEnd?: () => void;
}

export const StreamInstructions = ({ 
  open, 
  onOpenChange, 
  streamKey,
  onStreamStart = () => {},
  onStreamEnd = () => {}
}: StreamInstructionsProps) => {
  const rtmpUrl = "rtmp://rtmp.livepeer.com/live";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("コピーしました");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" aria-describedby="stream-instructions-description">
        <DialogHeader>
          <DialogTitle>配信方法</DialogTitle>
        </DialogHeader>
        <div id="stream-instructions-description">
          <Tabs defaultValue="browser">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="browser" className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                ブラウザ
              </TabsTrigger>
              <TabsTrigger value="obs">OBS</TabsTrigger>
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                スマートフォン
              </TabsTrigger>
            </TabsList>

            <TabsContent value="browser">
              <BrowserStreamControls 
                streamKey={streamKey} 
                onStreamStart={onStreamStart}
                onStreamEnd={onStreamEnd}
              />
            </TabsContent>

            <TabsContent value="obs">
              <StreamSetupInstructions 
                open={open}
                onOpenChange={onOpenChange}
                title="OBSの設定手順"
                steps={[
                  "OBSを開き、「設定」をクリックします",
                  "左メニューから「配信」を選択します",
                  "「サービス」で「カスタム」を選択します",
                  "以下の情報を入力します："
                ]}
                rtmpUrl={rtmpUrl}
                streamKey={streamKey}
                onCopy={copyToClipboard}
              />
            </TabsContent>

            <TabsContent value="mobile">
              <StreamSetupInstructions 
                open={open}
                onOpenChange={onOpenChange}
                title="スマートフォンでの配信方法"
                description={
                  <>
                    <p>以下のアプリをインストールして配信できます：</p>
                    <div className="space-y-2 mt-2">
                      <h4 className="font-medium">iPhoneの場合</h4>
                      <ul className="list-disc list-inside">
                        <li>Larix Broadcaster（無料）</li>
                        <li>Streamlabs（無料）</li>
                      </ul>
                    </div>
                    <div className="space-y-2 mt-2">
                      <h4 className="font-medium">Androidの場合</h4>
                      <ul className="list-disc list-inside">
                        <li>Larix Broadcaster（無料）</li>
                        <li>Streamlabs（無料）</li>
                        <li>Prism Live Studio（無料）</li>
                      </ul>
                    </div>
                  </>
                }
                rtmpUrl={rtmpUrl}
                streamKey={streamKey}
                onCopy={copyToClipboard}
              />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
