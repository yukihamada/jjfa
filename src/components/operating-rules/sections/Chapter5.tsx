import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter5 = () => {
  return (
    <OperatingRulesSection id="governance" title="第5章 ガバナンスと透明性">
      <OperatingRulesArticle title="第16条（運営報告）">
        <p>運営チームは四半期ごとに報告書を作成し、トークン発行状況、提案実行進捗、予算執行状況などを公式プラットフォームで公開します。参加者は質問可能で、運営チームは誠実に回答します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第17条（非常時対応）">
        <p>ハッキング発生や重大なシステム欠陥が確認された場合、緊急動議を発議し、通常より短い審議・投票期間で即時対策を講じます。緊急措置は次回DAO総会で報告し、必要なら改善策を検討します。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};