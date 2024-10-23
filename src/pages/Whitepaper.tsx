import { ScrollArea } from "@/components/ui/scroll-area";
import AnimatedBackground from "@/components/AnimatedBackground";

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/95 relative">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          JJFAトークン：柔術コミュニティを革新するブロックチェーンソリューション
        </h1>

        <ScrollArea className="h-[calc(100vh-200px)] rounded-lg border border-white/20 bg-black/50 backdrop-blur-md p-6">
          <div className="text-gray-200 space-y-8">
            {/* 目次 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">目次</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>はじめに</li>
                <li>柔術コミュニティの現状と課題</li>
                <li>JJFAのビジョンとミッション</li>
                <li>JJFAトークンの詳細</li>
                <li>FiNANCiEプラットフォームの活用</li>
                <li>技術的アーキテクチャとセキュリティ</li>
                <li>JJFAトークンの具体的ユースケース</li>
                <li>ガバナンスモデルとコミュニティ参加</li>
                <li>マーケティング戦略と普及計画</li>
                <li>プロジェクトのロードマップ</li>
                <li>リスクマネジメントと法的コンプライアンス</li>
                <li>チーム紹介と顧問</li>
                <li>結論と今後の展望</li>
              </ol>
            </section>

            {/* 各セクションの内容 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. はじめに</h2>
              <h3 className="text-xl font-semibold mb-2">背景と目的</h3>
              <p className="mb-4">
                柔術は、その技術的深さと精神性から世界中で愛される武道・スポーツとなりました。
                しかし、その普及とコミュニティの発展にはまだ多くの課題が存在します。
                JJFA（Jiu-Jitsu For ALL）は、これらの課題を解決し、柔術を全ての人々に届けるために設立されました。
              </p>
              
              <h3 className="text-xl font-semibold mb-2">ホワイトペーパーの概要</h3>
              <p>
                本ホワイトペーパーでは、JJFAが発行する「JJFAトークン」を中心に、
                ブロックチェーン技術を活用した柔術コミュニティの革新的なエコシステム構築について詳細に説明します。
              </p>
            </section>

            {/* 以下、同様のフォーマットで各セクションを追加 */}
            {/* ... 残りのセクションも同様の構造で実装 */}

            <section className="border-t border-white/20 pt-8">
              <h2 className="text-2xl font-bold mb-4">免責事項</h2>
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