import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter5 = () => {
  return (
    <OperatingRulesSection id="token" title="第5章 ガバナンスと透明性">
      <OperatingRulesArticle title="第10条（運営報告）">
        <ol className="list-decimal pl-6 mb-4">
          <li>四半期報告：
            <p className="mt-2">各専門チームは四半期ごとに運営報告書を作成します。この中には以下が含まれます。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>トークン発行状況と取引履歴の概要</li>
              <li>DAO総会で決議された事項の進捗</li>
              <li>予算執行状況や利益配分の報告</li>
            </ul>
          </li>
          <li className="mt-4">公開と質疑応答：
            <p className="mt-2">報告書は公式プラットフォームで公開し、トークン保有者からの質問を受け付けます。質問には運営チームが可能な限り回答し、コミュニティメンバーと双方向のコミュニケーションを図ります。</p>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};