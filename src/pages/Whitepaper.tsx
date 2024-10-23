import AnimatedBackground from "@/components/AnimatedBackground";
import { useTranslation } from 'react-i18next';

const Whitepaper = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <div className="rounded-lg border border-slate-200 bg-white/90 backdrop-blur-md p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-slate-800 leading-tight">
            <span className="block mb-2">{t('whitepaper.title')}</span>
            <span className="block text-xl md:text-3xl">{t('whitepaper.subtitle')}</span>
          </h1>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t('whitepaper.intro.title')}</h2>
              <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.background')}</h3>
              <p className="mb-4">{t('whitepaper.intro.backgroundText')}</p>
              
              <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.overview')}</h3>
              <p className="mb-4">{t('whitepaper.intro.overviewText')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. 柔術コミュニティの現状と課題</h2>
              <h3 className="text-xl font-semibold mb-2">柔術のグローバルな普及状況</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>成長する市場：世界中で柔術道場や大会が増加</li>
                <li>多様な参加者層：子供から大人まで、男女問わず参加</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">現行の問題点</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>資金調達の困難：大会運営や道場経営に必要な資金の不足</li>
                <li>コミュニティの断片化：情報や技術の共有不足</li>
                <li>早期支援者の不遇：初期からのサポーターが正当に評価されない</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. JJFAのビジョンとミッション</h2>
              <h3 className="text-xl font-semibold mb-2">組織概要</h3>
              <p className="mb-4">
                JJFAは、柔術の普及とコミュニティの発展を目指す合同会社です。
              </p>

              <h3 className="text-xl font-semibold mb-2">ミッションステートメント</h3>
              <p className="mb-4">
                「柔術を全ての人へ」――柔術の技術と精神を世界中の人々に届け、コミュニティの絆を深めます。
              </p>

              <h3 className="text-xl font-semibold mb-2">長期的目標</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>柔術人口の拡大：世界中での柔術愛好家の増加</li>
                <li>コミュニティの強化：グローバルなネットワークの構築</li>
                <li>技術と文化の継承：次世代への伝承と教育</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. JJFAトークンの詳細</h2>
              <h3 className="text-xl font-semibold mb-2">トークンの目的とユースケース</h3>
              <p className="mb-4">
                JJFAトークンは、柔術コミュニティ内での価値交換、インセンティブ付与、
                ガバナンス参加を可能にするユーティリティトークンです。
              </p>

              <h3 className="text-xl font-semibold mb-2">トークンエコノミーの設計</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>インセンティブ構造：活動への参加度合いに応じた報酬</li>
                <li>持続可能性：トークンの循環と価値の維持</li>
                <li>エコシステムの拡大：多様なユースケースの提供</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">トークン配布計画</h3>
              <p className="mb-2">総発行量：100,000,000 JJFA</p>
              <ul className="list-disc pl-6 mb-4">
                <li>コミュニティリワード：50%</li>
                <li>開発・運営チーム：20%</li>
                <li>マーケティング・提携：15%</li>
                <li>リザーブ：10%</li>
                <li>法務・監査：5%</li>
              </ul>
            </section>

          <section className="border-t border-slate-200 pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">お問い合わせ先</h2>
            <ul className="list-none space-y-2">
              <li>公式ウェブサイト：www.jjforall.com</li>
              <li>メールアドレス：info@jjforall.com</li>
              <li>所在地：〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス</li>
            </ul>
          </section>

          <section className="mt-8 text-sm text-slate-600">
            <h2 className="text-lg font-bold mb-2">免責事項</h2>
            <p>
              本ホワイトペーパーは情報提供のみを目的としており、投資勧誘を目的としたものではありません。
              JJFAトークンの購入や利用にあたっては、関連するリスクと法的義務を十分に理解した上でご判断ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;
