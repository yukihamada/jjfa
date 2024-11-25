import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter3 = () => {
  return (
    <TokenRulesSection title="第3章 トークンの利用と譲渡">
      <TokenRulesArticle title="第7条（利用権利）">
        <ol className="list-decimal pl-6 mb-4">
          <li>社員権トークン保有者
            <ul className="list-disc pl-6 mt-2">
              <li>利益配分：事業利益を保有割合に基づいて分配。</li>
              <li>議決権行使：DAO総会での重要事項に対する投票。</li>
              <li>優待特典：柔術イベント、教育プログラム、限定プロジェクトへの優先参加権。</li>
            </ul>
          </li>
          <li>ガバナンストークン保有者
            <ul className="list-disc pl-6 mt-2">
              <li>提案・投票権：DAOのプロジェクトや機能改善に対する意思決定参加。</li>
              <li>報酬受領権：貢献活動に基づきインセンティブを受領。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第8条（譲渡の透明性）">
        <ol className="list-decimal pl-6 mb-4">
          <li>社員権トークンおよびガバナンストークンは、ブロックチェーン上で自由に譲渡可能とする。</li>
          <li>社員権トークンの譲渡は、社員資格および関連する権利の移転を伴う。</li>
          <li>譲渡は公式プラットフォームを通じ、スマートコントラクトにより記録される。</li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};