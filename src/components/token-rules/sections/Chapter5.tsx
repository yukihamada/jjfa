import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter5 = () => {
  return (
    <TokenRulesSection title="第5章 その他">
      <TokenRulesArticle title="第13条（緊急時対応）">
        <ol className="list-decimal pl-6 mb-4">
          <li>緊急事態の定義
            <ul className="list-disc pl-6 mt-2">
              <li>スマートコントラクトの脆弱性発見</li>
              <li>大規模な価格変動</li>
              <li>システム障害</li>
              <li>法規制の急激な変更</li>
            </ul>
          </li>
          {/* ... 他の緊急時対応も同様に実装 */}
        </ol>
      </TokenRulesArticle>

      {/* ... 他の条項も同様に実装 */}
    </TokenRulesSection>
  );
};