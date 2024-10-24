import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const StartingGuide = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
      <CardHeader>
        <CardTitle>始める前の不安を解消！</CardTitle>
        <CardDescription>
          よくある心配と解決策
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">体力に自信がない</h4>
                <p className="text-sm text-slate-600">段階的なプログラムで無理なく始められます</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">怪我が心配</h4>
                <p className="text-sm text-slate-600">安全第一の指導で、初心者の怪我率は一般的なスポーツより低いことが統計で判明</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">年齢制限がある？</h4>
                <p className="text-sm text-slate-600">6歳から80代まで幅広い年齢層が実践中！実際に80代の方がマスター部門で優勝した実績もあります</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">運動音痴でも大丈夫？</h4>
                <p className="text-sm text-slate-600">基本から丁寧に指導。多くの方が3ヶ月で基礎を習得</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};