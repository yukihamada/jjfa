import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter3 = () => {
  return (
    <OperatingRulesSection id="dao" title="第3章 提案および意思決定プロセス">
      <OperatingRulesArticle title="第6条（提案の要件と審査）">
        <ol className="list-decimal pl-6 mb-4">
          <li>提案要件：提案には以下を明記してください。
            <ul className="list-disc pl-6 mt-2">
              <li>提案名（短くわかりやすい名前）</li>
              <li>目的と背景（なぜこの提案が必要か、どの課題を解決するか）</li>
              <li>詳細な実行方法（具体的な手順、必要なツールや人材）</li>
              <li>想定される成果とリスク（期待できる効果、考えられる問題点と対策）</li>
              <li>必要予算（費用やリソース配分の根拠）</li>
              <li>担当チームまたは実行メンバー</li>
            </ul>
          </li>
          <li className="mt-4">審査プロセス：
            <p className="mt-2">提案が提出されると、運営チームが以下の観点からチェックします。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>技術チーム：技術的な実現性・安全性</li>
              <li>財務チーム：予算の妥当性、資金配分の合理性</li>
              <li>法務チーム：法令・規制への適合状況</li>
            </ul>
            <p className="mt-2">（コミュニティチームは、提案内容をわかりやすくまとめ、公開準備をします。）</p>
          </li>
          <li className="mt-4">提案公開：
            <p className="mt-2">審査終了後、提案は公式プラットフォームに掲載され、全てのトークン保有者に通知します。</p>
          </li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第7条（投票と決議）">
        <ol className="list-decimal pl-6 mb-4">
          <li>投票システム：
            <p className="mt-2">投票はブロックチェーン上で行われ、保有トークン数に応じて票が割り当てられます（例：社員権トークン1枚＝1票）。</p>
            <p>投票結果はチェーン上で公開されるため、不正な改ざんができません。</p>
          </li>
          <li className="mt-4">投票期間：
            <p className="mt-2">提案公開から約1週間の意見交換期間を経て、投票期間は7日間とします。</p>
          </li>
          <li className="mt-4">決議条件：
            <ul className="list-disc pl-6 mt-2">
              <li>特別決議（重要事項）：全投票の3分の2以上が賛成で採択。対象はトークン総量変更、規程改定、会社解散など大きな影響を持つ決定です。</li>
              <li>普通決議（一般事項）：過半数の賛成で採択。プロジェクトの予算承認や日常的な運営施策など、比較的規模の小さい決定が対象です。</li>
            </ul>
          </li>
          <li className="mt-4">実行と報告：
            <p className="mt-2">採択された提案は、運営チームが速やかに実行に移します。進行状況は四半期ごとの報告で公開し、重要な決議の進捗は次回のDAO総会でも報告します。</p>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};