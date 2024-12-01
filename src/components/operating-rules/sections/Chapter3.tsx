import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter3 = () => {
  return (
    <OperatingRulesSection title="第3章 提案および意思決定プロセス">
      <OperatingRulesArticle title="第6条（提案の要件と審査）">
        <ol className="list-decimal pl-6 mb-4">
          <li>提案の要件
            <ul className="list-disc pl-6 mt-2">
              <li>提案は以下の要素を含む必要がある：</li>
              <li>提案名：簡潔で内容を端的に表現した名称。</li>
              <li>目的と背景：提案の動機、解決すべき課題。</li>
              <li>詳細内容：実行方法、期待される成果、リスク管理策。</li>
              <li>必要な予算：金額と具体的な用途。</li>
              <li>担当者またはチーム：実行を担う人物またはグループの詳細。</li>
            </ul>
          </li>
          <li>審査プロセス
            <ul className="list-disc pl-6 mt-2">
              <li>提出後、運営チームの各専門チームが以下の観点で審査を行う：</li>
              <li>技術的妥当性（技術チーム）：スマートコントラクトの変更が必要か。</li>
              <li>財務的実現可能性（財務チーム）：予算の適切性とリソースの妥当性。</li>
              <li>法的適合性（法務チーム）：関連法令に違反しないか。</li>
            </ul>
          </li>
          <li>提案公開
            <ul className="list-disc pl-6 mt-2">
              <li>審査後、提案は公式プラットフォームに公開され、全保有者に通知する。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第7条（投票および決議の詳細）">
        <ol className="list-decimal pl-6 mb-4">
          <li>投票システム
            <ul className="list-disc pl-6 mt-2">
              <li>スマートコントラクト上で実施し、以下の方式を採用する：</li>
              <li>投票は保有トークン数に基づく重み付け（例：社員権トークン1枚＝1票）。</li>
              <li>投票結果はブロックチェーン上で公開され、改ざん不可能。</li>
            </ul>
          </li>
          <li>投票期間
            <ul className="list-disc pl-6 mt-2">
              <li>投票期間は7日間とし、意見収集期間（1週間）後に開始する。</li>
            </ul>
          </li>
          <li>決議条件
            <ul className="list-disc pl-6 mt-2">
              <li>特別決議：全投票数の3分の2以上の賛成を要する。</li>
              <li>例：トークン総量の変更、規程改定。</li>
              <li>普通決議：全投票数の過半数の賛成を要する。</li>
              <li>例：プロジェクト予算の承認、改善提案の採択。</li>
            </ul>
          </li>
          <li>実施と報告
            <ul className="list-disc pl-6 mt-2">
              <li>承認された提案は運営チームが実施を開始し、進捗状況を四半期ごとに公式プラットフォームで報告する。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};