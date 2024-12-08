import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter3 = () => {
  return (
    <TokenRulesSection title="第3章 トークン活用シーンと価値">
      <TokenRulesArticle title="第9条（社員権トークン活用例）">
        <ul className="list-disc pl-6 mb-4">
          <li>利益分配：有料オンラインセミナー（有名黒帯によるテクニック解説）で得た収益を社員権トークン数に応じて還元。「自分が投資した分、柔術界の成長からリターンが来る」イメージ。</li>
          <li>重要決議投票：道場連合で「初心者向け統一グレードシステム」を作る際、あなたの一票が初心者の成長環境整備に直結。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第10条（ガバナンストークン活用例）">
        <ul className="list-disc pl-6 mb-4">
          <li>提案：地方大会の開催補助、女性専用クラス支援、青帯以下限定トーナメントなど、コミュニティが求める実用的なアイデアを形にできます。</li>
          <li>報酬：初心者向けテクニックガイドを制作・共有することで報酬を獲得。これで柔術初心者も、自分が分かった技を解説する形で簡単に貢献でき、報酬をもらえます。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第11条（ユーティリティトークン活用例）">
        <ul className="list-disc pl-6 mb-4">
          <li>海外遠征時、現地道場でのスパーリング費用をJJFAトークンで支払い、言語や為替の面倒なし。</li>
          <li>オンラインショップで柔術着やパッチ、指導用マニュアルを購入。</li>
          <li>オンラインマッチメイキングサービスの利用料としてトークンを払えば、世界中の練習相手とつながれる。</li>
        </ul>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};