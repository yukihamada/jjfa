import { RuleSection } from "../RuleSection";
import { Shield, Users, UserCheck, Users2 } from "lucide-react";

export const CodeOfConduct = () => {
  return (
    <RuleSection id="code-of-conduct" title="行動規範" sectionNumber="8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            基本原則
          </h3>
          <p className="text-slate-600 mb-4">
            競技者、コーチ、スタッフ、及びその他の代表者らはスポーツマンシップの最高原則を実践・実証し、競争の倫理を守る責任及び義務があります。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-blue-500" />
            競技者のガイドライン
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>対戦相手に敬意を持って接すること</li>
            <li>試合中はルールの範囲内で一生懸命プレーすること</li>
            <li>常に自制心を働かせること</li>
            <li>他人が従うような良き手本となること</li>
            <li>試合前後に、競技者はお互いに握手をし、レフェリーにも握手をすること</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            コーチのガイドライン
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>競技者及び対戦相手に敬意を持って接すること</li>
            <li>格闘技への愛と公正に戦いたいという思いを競技者に抱かせること</li>
            <li>他人が従いたくなるような良きお手本となること</li>
            <li>スポーツマンらしくないふるまいには懲罰を与えること</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users2 className="w-6 h-6 text-blue-500" />
            観客のガイドライン
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>競技のルールとその意図を知り、理解しようとすること</li>
            <li>良いプレーには、誰がしているかに関わらず評価をし、称賛すること</li>
            <li>積極的な応援に協力し、熱心な反応を示すこと</li>
            <li>負傷した競技者に対して思いやりを示すこと</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};
