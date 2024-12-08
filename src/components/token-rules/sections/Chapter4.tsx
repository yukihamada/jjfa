import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter4 = () => {
  return (
    <TokenRulesSection title="第4章 ガバナンスと緊急対応">
      <TokenRulesArticle title="第12条（DAOによる意思決定）">
        <p className="mb-4">
          重大事項は特別決議、日常案件は普通決議。
          結果は即時公開し、不正を許しません。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第13条（不正防止）">
        <p className="mb-4">
          トークン独占による市場支配を防ぎ、フラットなコミュニティを維持。
          不正者には投票権限制限など厳正対処。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第14条（紛争・緊急時対応）">
        <p className="mb-4">
          話し合いで解決を目指し、無理なら日本裁判所に委ねる明確なルール。
          ハッキング等緊急時は「緊急動議」で素早く対処。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};