import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter4 = () => {
  return (
    <TokenRulesSection title="第4章 セキュリティとリスク管理">
      <TokenRulesArticle title="第10条（セキュリティ対策）">
        <ol className="list-decimal pl-6 mb-4">
          <li>スマートコントラクト
            <ul className="list-disc pl-6 mt-2">
              <li>外部監査：四半期ごと</li>
              <li>脆弱性診断：月次</li>
              <li>アップグレード可能な設計</li>
              <li>エマージェンシーストップ機能</li>
            </ul>
          </li>
          {/* ... 他のセキュリティ対策も同様に実装 */}
        </ol>
      </TokenRulesArticle>

      {/* ... 他の条項も同様に実装 */}
    </TokenRulesSection>
  );
};