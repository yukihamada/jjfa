import { ReactNode } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StreamSetupInstructionsProps {
  title: string;
  description?: ReactNode;
  steps?: string[];
  rtmpUrl: string;
  streamKey: string;
  onCopy: (text: string) => void;
}

export const StreamSetupInstructions = ({
  title,
  description,
  steps,
  rtmpUrl,
  streamKey,
  onCopy
}: StreamSetupInstructionsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">{title}</h3>
      
      {description && description}
      
      {steps && (
        <ol className="list-decimal list-inside space-y-2">
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      )}

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
              onClick={() => onCopy(rtmpUrl)}
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
  );
};