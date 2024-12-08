import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter4 = () => {
  return (
    <OperatingRulesSection id="token" title="第4章 トークン管理とセキュリティ">
      <OperatingRulesArticle title="第12条（トークン発行・管理）">
        <p>トークンの発行・割当・再発行はスマートコントラクト経由で行います。発行数、保有状況は常に公式プラットフォームで確認可能です。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第13条（紛失・不正利用への対応）">
        <p>ウォレット紛失時は、本人確認を経てDAO総会で承認されれば、古いトークンを無効化し新トークンを再発行します。不正利用が判明した場合、該当トークンは即時凍結し、法的措置や救済対応を行います。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第14条（リスク管理とコンプライアンス）">
        <p>運営チームは、ハッキングや市場変動、規制変更に備え、定期的にリスク評価を行います。必要に応じてKYC・AML対応やセキュリティ強化策を実施し、コンプライアンスを確保します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第15条（個人情報保護）">
        <p>ウォレット紛失対応などで個人情報が必要な場合、当社は関連法令に従い最小限の情報を収集・安全管理します。利用目的を明確にし、プライバシーポリシーを別途定めて公式プラットフォームで公開します。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};