import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter3 = () => {
  return (
    <TokenRulesSection title="第3章 権利内容と行使">
      <TokenRulesArticle title="第6条（社員権トークンの権利）">
        <ol className="list-decimal pl-6 mb-4">
          <li>ガバナンス権
            <ul className="list-disc pl-6 mt-2">
              <li>議決権：1トークン1票</li>
              <li>拒否権：特定議案に対する拒否権（保有率33%以上）</li>
              <li>提案権：新規事業提案（保有率10%以上）</li>
            </ul>
          </li>
          {/* ... 他の権利も同様に実装 */}
        </ol>
      </TokenRulesArticle>

      {/* ... 他の条項も同様に実装 */}
    </TokenRulesSection>
  );
};