import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Shield, AlertTriangle, Users } from "lucide-react";

export const CodeOfConduct = () => {
  return (
    <RuleSection id="code-of-conduct" title="行動規範" sectionNumber="15">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            選手、コーチ、スタッフ、観客のガイドライン
          </h3>
          <RuleItem
            title="スポーツマンシップ"
            description="全ての参加者は、相手選手、審判、スタッフ、観客に対して敬意を持って接する必要があります。"
            ruleNumber="15.1"
          />
          <RuleItem
            title="マナー"
            description="試合場での不適切な言動、挑発的な行為、過度な抗議は禁止されています。"
            ruleNumber="15.2"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            違反と懲罰
          </h3>
          <RuleItem
            title="警告"
            description="軽微な違反に対しては警告が発せられ、記録されます。"
            ruleNumber="15.3"
          />
          <RuleItem
            title="重大な違反"
            description="重大な違反や繰り返しの違反は、出場停止や資格剥奪につながる可能性があります。"
            ruleNumber="15.4"
          />
        </div>
      </div>
    </RuleSection>
  );
};