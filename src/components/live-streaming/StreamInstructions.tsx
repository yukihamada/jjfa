import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Info } from "lucide-react";
import { toast } from "sonner";

interface StreamInstructionsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  streamKey: string;
}

export const StreamInstructions = ({ open, onOpenChange, streamKey }: StreamInstructionsProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("コピーしました");
  };

  const rtmpUrl = "rtmp://rtmp.livepeer.com/live";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>配信方法</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="obs">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="obs">OBSで配信</TabsTrigger>
            <TabsTrigger value="mobile">スマートフォンで配信</TabsTrigger>
          </TabsList>

          <TabsContent value="obs" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-semibold">OBSの設定手順</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>OBSを開き、「設定」をクリックします</li>
                <li>左メニューから「配信」を選択します</li>
                <li>「サービス」で「カスタム」を選択します</li>
                <li>以下の情報を入力します：</li>
              </ol>

              <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">配信URL</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(rtmpUrl)}
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
                      onClick={() => copyToClipboard(streamKey)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      コピー
                    </Button>
                  </div>
                  <code className="text-sm">{streamKey}</code>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-semibold">スマートフォンでの配信方法</h3>
              <p>以下のアプリをインストールして配信できます：</p>
              
              <div className="space-y-2">
                <h4 className="font-medium">iPhoneの場合</h4>
                <ul className="list-disc list-inside">
                  <li>Larix Broadcaster（無料）</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Androidの場合</h4>
                <ul className="list-disc list-inside">
                  <li>Larix Broadcaster（無料）</li>
                  <li>StreamLabs（無料）</li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  アプリの設定で、上記のRTMP URLとストリームキーを入力してください。
                </AlertDescription>
              </Alert>

              <div className="space-y-4 p-4 bg-slate-50 rounded-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">配信URL</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(rtmpUrl)}
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
                      onClick={() => copyToClipboard(streamKey)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      コピー
                    </Button>
                  </div>
                  <code className="text-sm">{streamKey}</code>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};