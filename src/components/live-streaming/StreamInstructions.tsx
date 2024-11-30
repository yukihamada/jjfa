import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Copy, Info, Smartphone, Monitor } from "lucide-react";
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

          <TabsContent value="browser" className="space-y-4">
            <div className="space-y-4">
              <h3 className="font-semibold">ブラウザから配信</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>カメラとマイクの使用を許可してください</li>
                <li>「配信開始」ボタンをクリックして配信を開始します</li>
                <li>配信を終了する場合は「配信終了」ボタンをクリックします</li>
              </ol>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  ブラウザ配信は実験的な機能です。安定した配信にはOBSの使用をお勧めします。
                </AlertDescription>
              </Alert>

              <div className="flex justify-center">
                <Button className="w-full max-w-sm">
                  配信を開始
                </Button>
              </div>
            </div>
          </TabsContent>

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
                  <li>Streamlabs（無料）</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Androidの場合</h4>
                <ul className="list-disc list-inside">
                  <li>Larix Broadcaster（無料）</li>
                  <li>Streamlabs（無料）</li>
                  <li>Prism Live Studio（無料）</li>
                </ul>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  アプリの設定で、以下のRTMP URLとストリームキーを入力してください。
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