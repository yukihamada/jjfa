import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter2 = () => {
  return (
    <TokenRulesSection title="第2章 トークンの発行・管理">
      <TokenRulesArticle title="第3条（発行計画）">
        <ol className="list-decimal pl-6 mb-4">
          <li>社員権トークン（JJFA-MEMBER）
            <ul className="list-disc pl-6 mt-2">
              <li>総発行上限：1,000個</li>
              <li>初期発行：100個（2024年4月）</li>
              <li>段階的追加発行：
                <ul className="list-disc pl-6">
                  <li>2024年Q3：200個</li>
                  <li>2024年Q4：300個</li>
                  <li>2025年Q1：400個</li>
                </ul>
              </li>
            </ul>
          </li>
          {/* ... 他のトークン発行計画も同様に実装 */}
        </ol>
      </TokenRulesArticle>

      {/* ... 他の条項も同様に実装 */}
    </TokenRulesSection>
  );
};