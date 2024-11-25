import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter4 = () => {
  return (
    <TokenRulesSection title="第4章 紛失・不正利用への対応">
      <TokenRulesArticle title="第9条（紛失時の対応）">
        <ol className="list-decimal pl-6 mb-4">
          <li>ウォレットの秘密鍵を紛失した場合、以下の手順を経てトークンを再発行する：
            <ul className="list-disc pl-6 mt-2">
              <li>本人確認書類の提出および審査。</li>
              <li>DAO総会の承認後、紛失トークンを無効化し、新トークンを発行。</li>
            </ul>
          </li>
          <li>再発行には合理的な手数料を請求する場合がある。</li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第10条（不正利用への対策）">
        <ol className="list-decimal pl-6 mb-4">
          <li>不正利用が確認された場合、当会社は以下の措置を講じる：
            <ul className="list-disc pl-6 mt-2">
              <li>スマートコントラクトによる不正トークンの一時停止または無効化。</li>
              <li>被害者に対するトークン回復措置を実施。</li>
              <li>必要に応じて法的措置を講じる。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};