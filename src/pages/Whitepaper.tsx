import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedBackground from "@/components/AnimatedBackground";

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/95 relative pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          JJFAトークン：柔術コミュニティを革新するブロックチェーンソリューション
        </h1>

        <ScrollArea className="h-[calc(100vh-200px)] rounded-lg border border-white/20 bg-black/80 backdrop-blur-md p-6">
          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">1. はじめに</h2>
              <h3 className="text-xl font-semibold mb-2 text-white/90">背景と目的</h3>
              <p className="text-white/80 mb-4">
                柔術は、その技術的深さと精神性から世界中で愛される武道・スポーツとなりました。
                しかし、その普及とコミュニティの発展にはまだ多くの課題が存在します。
                JJFA（Jiu-Jitsu For ALL）は、これらの課題を解決し、柔術を全ての人々に届けるために設立されました。
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white/90">ホワイトペーパーの概要</h3>
              <p className="text-white/80 mb-4">
                本ホワイトペーパーでは、JJFAが発行する「JJFAトークン」を中心に、
                ブロックチェーン技術を活用した柔術コミュニティの革新的なエコシステム構築について詳細に説明します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">2. 柔術コミュニティの現状と課題</h2>
              <h3 className="text-xl font-semibold mb-2 text-white/90">柔術のグローバルな普及状況</h3>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li>成長する市場：世界中で柔術道場や大会が増加</li>
                <li>多様な参加者層：子供から大人まで、男女問わず参加</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-white/90">現行の問題点</h3>
              <ul className="list-disc pl-6 text-white/80 mb-4">
                <li>資金調達の困難：大会運営や道場経営に必要な資金の不足</li>
                <li>コミュニティの断片化：情報や技術の共有不足</li>
                <li>早期支援者の不遇：初期からのサポーターが正当に評価されない</li>
              </ul>
            </section>

            {/* ... 以下、各セクションを同様のフォーマットで実装 */}
            {/* セクション3から13まで、同様の構造で実装します */}

            <section className="border-t border-white/20 pt-8 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-white">お問い合わせ先</h2>
              <ul className="list-none text-white/80">
                <li>公式ウェブサイト：www.jjfa.com</li>
                <li>メールアドレス：info@jjfa.com</li>
                <li>所在地：〒123-4567 東京都新宿区西新宿1-2-3 新宿ビルディング10F</li>
              </ul>
            </section>

            <section className="mt-8 text-white/60 text-sm">
              <h2 className="text-lg font-bold mb-2 text-white/80">免責事項</h2>
              <p>
                本ホワイトペーパーは情報提供のみを目的としており、投資勧誘を目的としたものではありません。
                JJFAトークンの購入や利用にあたっては、関連するリスクと法的義務を十分に理解した上でご判断ください。
              </p>
            </section>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Whitepaper;