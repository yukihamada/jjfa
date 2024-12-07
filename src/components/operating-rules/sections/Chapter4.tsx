import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter4 = () => {
  return (
    <OperatingRulesSection id="token" title="第4章 トークン管理とセキュリティ">
      <OperatingRulesArticle title="第8条（トークン発行・管理）">
        <p>トークンの発行、割当、再発行はスマートコントラクトを通じて行われ、公式プラットフォームで常に状況を確認できます。これにより、発行数や保有者構成が常にオープンで公正に保たれます。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第9条（紛失・不正利用対応）">
        <ol className="list-decimal pl-6 mb-4">
          <li>紛失時：
            <p className="mt-2">所有者がウォレットを紛失した場合、本人確認（ID提出・ビデオ認証など）を経て、DAO総会でその再発行が承認されれば、古いトークンを無効化し、新しいトークンを付与します。</p>
          </li>
          <li className="mt-4">不正利用時：
            <p className="mt-2">不正使用が発覚した場合、運営チームは該当トークンを即座に凍結します。その後、法的措置や被害者救済対応を行い、問題解決に努めます。</p>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};