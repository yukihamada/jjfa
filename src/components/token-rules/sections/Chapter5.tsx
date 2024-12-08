import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter5 = () => {
  return (
    <TokenRulesSection title="第5章 法令順守、個人情報、知的財産">
      <TokenRulesArticle title="第15条（コンプライアンス）">
        <p className="mb-4">
          必要ならKYCやAML対応。
          社会の信用を得て、柔術コミュニティが健全に拡大。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第16条（個人情報保護）">
        <p className="mb-4">
          最小限の情報取得と安全管理。
          プライバシーポリシーを示し、安心感を提供。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第17条（知的財産）">
        <p className="mb-4">
          「JJFA」ブランドやロゴは当社所有。
          NFTやコンテンツは別ルールで整理。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};