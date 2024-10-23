import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">JJFA合同会社 定款</h1>
            
            <div className="prose prose-slate max-w-none">
              <h2 className="text-xl font-bold mt-8 mb-4">第1章　総則</h2>
              
              <h3 className="font-bold mt-6 mb-2">（商号）</h3>
              <p>第1条　本会社は、合同会社JJFAと称する。</p>
              
              <h3 className="font-bold mt-6 mb-2">（目的）</h3>
              <p>第2条　本会社は、次の事業を行うことを目的とする。</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>柔術の普及および啓蒙に関する事業</li>
                <li>柔術に関するイベント、セミナーの企画、運営および開催</li>
                <li>柔術に関する情報の収集、提供および販売</li>
                <li>オンラインプラットフォームおよびアプリケーションの開発、運営および管理</li>
                <li>ユーティリティトークンの発行、管理および運用</li>
                <li>ブロックチェーン技術を活用したシステムの開発およびコンサルティング業務</li>
                <li>各種コンテンツの企画、制作、販売および配信</li>
                <li>スポーツ用品、衣類、アクセサリー等の企画、製造、販売および輸出入</li>
                <li>前各号に附帯または関連する一切の事業</li>
              </ol>

              {/* ... 以下同様に全ての条項を記載 */}
              <h3 className="font-bold mt-6 mb-2">（本店所在地）</h3>
              <p>第3条　本会社は、本店を東京都新宿区西新宿1丁目2番3号に置く。</p>

              <h2 className="text-xl font-bold mt-8 mb-4">第5章　ユーティリティトークン</h2>
              
              <h3 className="font-bold mt-6 mb-2">（トークンの発行）</h3>
              <p>第16条　本会社は、コミュニティ運営およびサービス提供のため、ユーティリティトークン「JJFAトークン」（以下「トークン」という）を発行する。</p>

              <h3 className="font-bold mt-6 mb-2">（トークンの性質）</h3>
              <p>第17条　トークンは、本会社が提供するサービスおよびプラットフォーム内で利用可能なユーティリティトークンであり、法定通貨および証券ではない。</p>

              <h3 className="font-bold mt-6 mb-2">（トークンの利用）</h3>
              <p>第18条　トークンは、以下の用途に使用できる。</p>
              <ol className="list-decimal pl-6 mb-4">
                <li>道場の月謝、大会参加費、セミナー費用の支払い</li>
                <li>オンラインコンテンツ、教材、グッズの購入</li>
                <li>コミュニティへの貢献に対する報酬の受領</li>
                <li>ガバナンスへの参加（提案提出および投票）</li>
              </ol>

              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  ※ この定款は、ブロックチェーン上に記録され、誰でも閲覧および検証が可能です。
                  変更履歴もすべて透明性をもって管理されています。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;