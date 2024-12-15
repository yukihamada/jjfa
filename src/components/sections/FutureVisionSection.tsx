import { Card, CardContent } from "@/components/ui/card";

export const FutureVisionSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-white shadow-lg">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4 text-slate-800">3. 近日公開：道場管理＆ブロックチェーン認証システム</h3>
            <p className="text-slate-600 mb-4">
              モバイルアプリで道場運営を効率化し、ブロックチェーン技術で帯昇進や大会結果を安全・透明に記録します。
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
              <li>会員・クラス・出席・支払いを一元管理</li>
              <li>デジタル帯昇進認証と改ざん困難な試合記録</li>
              <li>NFTメダル＆称号によるユニークな達成度証明</li>
              <li>グローバルなキャリア追跡で信頼性向上</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-slate-800">JJFAが描く未来</h2>
            <p className="text-slate-600">
              私たちはテクノロジーと柔術の融合で、新たな価値と国際的な広がりを創出します。JJFAとともに、柔術の新たな幕開けへ踏み出しましょう。
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};