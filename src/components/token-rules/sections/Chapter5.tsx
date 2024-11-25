import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter5 = () => {
  return (
    <TokenRulesSection title="第5章 ガバナンスと規程改定">
      <TokenRulesArticle title="第11条（DAOガバナンス）">
        <ol className="list-decimal pl-6 mb-4">
          <li>議決方法
            <ul className="list-disc pl-6 mt-2">
              <li>特別決議（議決権の3分の2以上の賛成）：トークン総量変更、規程改定、会社解散など。</li>
              <li>普通決議（過半数の賛成）：プロジェクト提案、資金配分、新規イベント計画など。</li>
            </ul>
          </li>
          <li>投票システムの透明性
            <ul className="list-disc pl-6 mt-2">
              <li>スマートコントラクトにより投票プロセスを管理し、結果を即時公開。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第12条（規程改定手続き）">
        <ol className="list-decimal pl-6 mb-4">
          <li>規程改定案は、公式ウェブサイトで全保有者に公開し、1週間の意見募集期間を設ける。</li>
          <li>改定案はDAO総会で承認後、直ちに施行される。</li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};