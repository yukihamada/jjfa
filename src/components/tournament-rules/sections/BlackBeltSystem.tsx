import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const BlackBeltSystem = () => {
  return (
    <RuleSection id="black-belt-system" title="黒帯制度" sectionNumber="13">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">黒帯取得の要件</h3>
          <p className="text-slate-600 mb-4">
            黒帯を取得するためには、競技歴、技術、試合でのパフォーマンスを総合的に評価されます。
          </p>
          <RuleItem
            title="技術試験"
            description="技術試験を通過する必要があります。試験内容は、基本技術やコンビネーションが含まれます。"
            ruleNumber="13.0"
          />
          <RuleItem
            title="試合参加"
            description="黒帯取得者は、指定された期間内に一定数の公式試合に参加しなければなりません。"
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
      </div>
    </RuleSection>
  );
};