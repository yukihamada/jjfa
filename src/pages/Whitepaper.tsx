import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Whitepaper = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <div className="container mx-auto py-12 px-4">
        <div className="rounded-lg border border-slate-200 bg-white/90 backdrop-blur-md p-6">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800 leading-tight">
            <span className="block mb-2">{isJapanese ? 'JJFAホワイトペーパー' : 'JJFA Whitepaper (Japanese Original)'}</span>
            <span className="block text-lg sm:text-xl md:text-3xl">{isJapanese ? 'Web3で創る柔術の未来' : 'Building the Future of Jiu-Jitsu through Web3'}</span>
          </h1>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link 
              to="/articles" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              定款を見る
            </Link>
            <Link 
              to="/operating-rules" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              運営規程を見る
            </Link>
            <Link 
              to="/token-rules" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              トークン規程を見る
            </Link>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{isJapanese ? '1. はじめに' : '1. Introduction (Japanese Original)'}</h2>
              <h3 className="text-xl font-semibold mb-2">{isJapanese ? '背景' : 'Background'}</h3>
              <p className="mb-4">{isJapanese ? 'ブラジリアン柔術は、武道としても競技スポーツとしても世界的に成長を続けています。しかし、持続可能な成長と公平な価値分配の面で、コミュニティはさまざまな課題に直面しています。' : 'Brazilian Jiu-Jitsu continues to grow globally both as a martial art and as a competitive sport. However, the community faces various challenges in terms of sustainable growth and fair value distribution. (Japanese Original)'}</p>
              
              <h3 className="text-xl font-semibold mb-2">プロジェクト概要</h3>
              <p className="mb-4">JJFA（Jiu-Jitsu For ALL）は、世界中の練習者、道場、大会主催者をつなぐ分散型プラットフォームを作ることで、これらの課題を解決することを目指しています。</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. ガバナンス構造</h2>
              <p className="mb-4">
                JJFAは、Web3技術を活用した分散型自律組織（DAO）として運営されます。
                詳細な運営方針については、
                <Link to="/operating-rules" className="text-blue-600 hover:underline">運営規程</Link>
                をご確認ください。
              </p>
              <p className="mb-4">
                また、組織としての基本的な枠組みについては
                <Link to="/articles" className="text-blue-600 hover:underline">定款</Link>
                に、トークンに関する詳細は
                <Link to="/token-rules" className="text-blue-600 hover:underline">トークン規程</Link>
                にそれぞれ定められています。
              </p>
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

              <h3 className="text-xl font-semibold mb-2">トークンの種類と配布計画</h3>
              <p className="mb-4">
                JJFAでは、以下の3種類のトークンを発行します：
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>MASTER NFT：ガバナンス参加権と収益分配請求権を持つNFT</li>
                <li>VOTE Token：日常的な運営への参加権を持つトークン</li>
                <li>BJJ Token：プラットフォーム内での支払いに使用するトークン</li>
              </ul>
              
              <p className="mb-4">
                各トークンの詳細な発行計画、権利内容、配布条件については、
                <Link to="/token-rules" className="text-blue-600 hover:underline">トークン規程</Link>
                をご確認ください。
              </p>
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
    </div>
  );
};

export default Whitepaper;
