import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const BlackBeltSystem = () => {
  return (
    <RuleSection id="black-belt-system" title="黒帯制度" sectionNumber="13">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">黒帯認定の要件</h3>
          <p className="text-slate-600 mb-4">
            黒帯を取得するためには、競技歴、技術、試合でのパフォーマンスを総合的に評価されます。
            JJFAは、以下の国際的に認知された柔術団体からの黒帯認定を受け入れ、それをもとに認証を行います：
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600">
            <li>International Brazilian Jiu-Jitsu Federation (IBJJF)</li>
            <li>Sport Jiu-Jitsu Federation (SJJF)</li>
            <li>その他JJFAが認める国際柔術団体</li>
          </ul>
          <RuleItem
            title="既存の黒帯認定"
            description="上記団体から発行された黒帯証明書を保持している場合、その証明書をJJFAに提出することで、JJFA内での黒帯資格が認定されます。"
            ruleNumber="13.0"
          />
          <RuleItem
            title="技術試験"
            description="新規で黒帯を取得する場合、技術試験を通過する必要があります。試験内容は、基本技術やコンビネーションが含まれます。"
            ruleNumber="13.1"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">黒帯の義務</h3>
          <p className="text-slate-600 mb-4">
            黒帯は、その地位にふさわしい行動、指導、競技者との交流を行うことが求められます。
          </p>
          <RuleItem
            title="後進指導"
            description="黒帯保持者は、初心者や子供たちへの指導を行い、技術や倫理の普及に努める必要があります。"
            ruleNumber="13.2"
          />
          <RuleItem
            title="大会参加"
            description="指定された大会に参加し、レフェリーやコーチとしての役割を果たすことも求められる場合があります。"
            ruleNumber="13.3"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">認定プロセス</h3>
          <RuleItem
            title="申請手続き"
            description="他団体での黒帯認定を受けている場合、以下の書類をJJFAに提出する必要があります：1) 黒帯証明書の原本または認証されたコピー、2) 競技歴の記録、3) 指導歴の記録（該当する場合）"
            ruleNumber="13.4"
          />
          <RuleItem
            title="審査期間"
            description="申請書類の提出から認定までは通常2〜4週間程度かかります。審査の過程で追加の情報や面談が必要となる場合があります。"
            ruleNumber="13.5"
          />
        </div>
      </div>
    </RuleSection>
  );
};