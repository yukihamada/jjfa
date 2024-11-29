import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Trophy, Flag, Calculator, Medal } from "lucide-react";

export const TeamPoints = () => {
  return (
    <RuleSection id="team-points" title="チームポイント">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            大会チームポイント
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="チーム登録"
              description="選手は登録時にチームを明確に指定する必要があります。登録後のチーム変更は認められません。"
            />
            <RuleItem
              title="ポイント計算方法"
              description="1000人未満の大会：金メダル7点、銀メダル3点、銅メダル1点
1000人以上の大会：金メダル14点、銀メダル6点、銅メダル2点
JJFA世界選手権：金メダル21点、銀メダル9点、銅メダル3点"
            />
            <RuleItem
              title="同点の場合"
              description="同点の場合、金メダルの数で判定し、それも同数の場合は銀メダル、続いて銅メダルの数で判定します。それでも同点の場合は、最上位の帯のメダル数で決定します。"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Flag className="w-6 h-6 text-green-500" />
            国別ポイント
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="国籍登録"
              description="選手は登録時に国籍/出身国を明確に指定する必要があります。登録後の変更は認められません。"
            />
            <RuleItem
              title="ポイント集計"
              description="キッズ（4-5歳から14-15歳）と大人（16歳以上）のカテゴリーで別々に集計されます。"
            />
          </div>
        </div>
      </div>
    </RuleSection>
  );
};