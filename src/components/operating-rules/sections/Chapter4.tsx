import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter4 = () => {
  return (
    <OperatingRulesSection id="tournament" title="第4章 トークン管理とセキュリティ">
      <OperatingRulesArticle title="第8条（トークンの発行および管理）">
        <ol className="list-decimal pl-6 mb-4">
          <li>トークンの発行・配分・再発行は、スマートコントラクトに基づき実施する。</li>
          <li>発行状況、取引履歴、保有者分布は公式プラットフォーム上でリアルタイムで公開される。</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第9条（紛失および不正利用の対応）">
        <ol className="list-decimal pl-6 mb-4">
          <li>紛失時の対応
            <ul className="list-disc pl-6 mt-2">
              <li>保有者がウォレット紛失を申請する場合、以下のプロセスを経る：</li>
              <li>本人確認（例：ID提出とビデオ認証）。</li>
              <li>DAO総会の承認後、紛失トークンを無効化し新しいトークンを発行。</li>
            </ul>
          </li>
          <li>不正利用時の対応
            <ul className="list-disc pl-6 mt-2">
              <li>不正使用が確認された場合、運営チームは以下を実施する：</li>
              <li>該当トークンの凍結：スマートコントラクトで即時凍結。</li>
              <li>法的措置：被害者救済および加害者に対する追及措置。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};
