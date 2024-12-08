import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter2 = () => {
  return (
    <OperatingRulesSection id="organization" title="第2章 運営体制">
      <OperatingRulesArticle title="第5条（DAO総会）">
        <p>DAO総会は、コミュニティの最高意思決定機関です。トークン保有者は投票権を通じ、プロジェクト方針、予算、規程改定など重要事項を決定します。総会は原則として四半期ごとに開催し、議事録は終了後7日以内に公式プラットフォームで公開します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第6条（運営チーム）">
        <p>運営チームは、DAO総会で決まった方針を実行に移します。</p>
        <ul className="list-disc pl-6 mb-4">
          <li>技術チーム：スマートコントラクト管理、不具合対応、外部セキュリティ監査</li>
          <li>コミュニティチーム：提案受付、参加者間調整、SNS発信</li>
          <li>財務チーム：予算作成・実行、収支報告</li>
          <li>法務チーム：法令適合性確認、規程改定案精査</li>
        </ul>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第7条（外部連携）">
        <p>DAO総会は、外部道場、大会主催者、他のWeb3プロジェクトとの提携を審議できます。提携条件や契約概要は提案時に示し、コミュニティへ透明性を確保します。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};