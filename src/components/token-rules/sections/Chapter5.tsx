import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter5 = () => {
  return (
    <TokenRulesSection title="第5章 法令順守、個人情報、知的財産">
      <TokenRulesArticle title="第15条（コンプライアンス）">
        <p className="mb-4">
          法令に合わせて本人確認（KYC）や資金洗浄防止（AML）などを行う場合があります。
          社会的信用を重視し、柔術界の健全な発展を支えます。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第16条（個人情報保護）">
        <p className="mb-4">
          ウォレット紛失対応やKYCで個人情報を集める場合は必要最低限。
          プライバシーポリシーを公開し、情報は安全に扱います。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第17条（知的財産）">
        <p className="mb-4">
          「JJFA」ブランドやロゴは当社の財産です。
          NFTや独自コンテンツについては別途ルールを設ける場合があります。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};