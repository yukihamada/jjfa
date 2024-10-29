import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter5 = () => {
  return (
    <TokenRulesSection title="第5章 セキュリティとリスク管理">
      <TokenRulesArticle title="第8条（セキュリティ対策）">
        <ol className="list-decimal pl-6 mb-4">
          <li>スマートコントラクト
            <ul className="list-disc pl-6 mt-2">
              <li>外部監査の実施：四半期ごと</li>
              <li>脆弱性診断：毎月実施</li>
              <li>アップグレードが容易な設計</li>
              <li>非常停止機能（問題発生時に一時停止できる機能）</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第9条（緊急時対応）">
        <ol className="list-decimal pl-6 mb-4">
          <li>緊急事態の定義
            <ul className="list-disc pl-6 mt-2">
              <li>スマートコントラクトに脆弱性が発見された場合</li>
              <li>価格の大幅な変動</li>
              <li>システム障害が発生した場合</li>
              <li>法規制の急な変更が発生した場合</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};