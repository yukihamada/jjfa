import { RuleSection } from "../RuleSection";
import { Users, Weight, Trophy, Calculator } from "lucide-react";
import { RuleItem } from "../RuleItem";

export const TeamRules = () => {
  return (
    <RuleSection id="team-rules" title="団体戦ルール" sectionNumber="14">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            チーム編成
          </h3>
          <RuleItem
            title="チーム構成"
            description="同じ帯色の選手で構成されたチームで対戦します。"
            ruleNumber="1"
            sectionNumber="14"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Weight className="w-6 h-6 text-blue-500" />
            体重制限
          </h3>
          <RuleItem
            title="合計体重制限"
            description="チームの合計体重が210kg以下である必要があります。"
            ruleNumber="2"
            sectionNumber="14"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            勝敗決定
          </h3>
          <RuleItem
            title="勝敗の決定方法"
            description="各選手の勝ち抜き戦で、勝ち数の多いチームが勝利となります。"
            ruleNumber="3"
            sectionNumber="14"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-500" />
            同点の場合
          </h3>
          <RuleItem
            title="同点時の処理"
            description="勝ち数が同じ場合は、獲得ポイントの合計が多いチームが勝利となります。"
            ruleNumber="4"
            sectionNumber="14"
          />
        </div>
      </div>
    </RuleSection>
  );
};