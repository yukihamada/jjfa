import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter5 = () => {
  return (
    <OperatingRulesSection title="第5章 ガバナンスおよび透明性">
      <OperatingRulesArticle title="第10条（運営報告の具体化）">
        <ol className="list-decimal pl-6 mb-4">
          <li>四半期ごとの運営報告
            <ul className="list-disc pl-6 mt-2">
              <li>各専門チームは、以下を含む報告書を作成する：</li>
              <li>トークン発行状況と取引履歴。</li>
              <li>DAO総会の決議事項と進捗状況。</li>
              <li>利益配分の詳細および予算執行状況。</li>
            </ul>
          </li>
          <li>報告の公開と質疑応答
            <ul className="list-disc pl-6 mt-2">
              <li>報告書は公式プラットフォームで公開され、保有者からの質疑に対応するセッションを設ける。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};