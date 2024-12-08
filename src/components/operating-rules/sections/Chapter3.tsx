import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter3 = () => {
  return (
    <OperatingRulesSection id="dao" title="第3章 提案および意思決定プロセス">
      <OperatingRulesArticle title="第8条（提案要件・審査）">
        <p>提案には、目的・背景・具体的手順・必要予算・期待効果・リスクなどを明記します。</p>
        <p>運営チームは、技術面（技術チーム）、予算面（財務チーム）、法令遵守（法務チーム）の観点から事前審査を行い、その後公式プラットフォームに提案を掲載します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第9条（投票・決議）">
        <p>提案公開後、約1週間の意見交換期間を経て投票を行います。投票期間は7日間とし、ブロックチェーン上で集計するため改ざんは不可能です。</p>
        <ul className="list-disc pl-6 mb-4">
          <li>特別決議（重大事項例：トークン総量変更、規程改定）：全投票数の3分の2以上の賛成</li>
          <li>普通決議（日常事項例：プロジェクト予算承認）：過半数の賛成</li>
        </ul>
        <p>可決後、運営チームは速やかに提案内容を実行します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第10条（投票権濫用防止）">
        <p>特定のウォレットが過度にトークンを集中させ、意思決定を支配しないよう、必要に応じて投票上限やロックアップ期間を設定できます。疑わしい行為がある場合、運営チームは調査し、必要なら投票権制限などの対策を講じます。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第11条（紛争解決）">
        <p>参加者間や対外的な紛争が発生した場合、まずDAO総会やコミュニティチームを通じて話し合い解決を試みます。それでも合意に至らない場合、日本国内の適切な裁判所を最終的な紛争解決手段とします。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};