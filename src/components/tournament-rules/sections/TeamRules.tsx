import { RuleSection } from "../RuleSection";
import { Users, Weight, Trophy, Calculator } from "lucide-react";

export const TeamRules = () => {
  return (
    <RuleSection id="team-rules" title="団体戦ルール">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            チーム編成
          </h3>
          <p className="text-slate-600">
            <span className="font-semibold">10. </span>
            同じ帯色の選手で構成されたチームで対戦します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Weight className="w-6 h-6 text-blue-500" />
            体重制限
          </h3>
          <p className="text-slate-600">
            チームの合計体重が210kg以下である必要があります。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            勝敗決定
          </h3>
          <p className="text-slate-600">
            各選手の勝ち抜き戦で、勝ち数の多いチームが勝利となります。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-500" />
            同点の場合
          </h3>
          <p className="text-slate-600">
            勝ち数が同じ場合は、獲得ポイントの合計が多いチームが勝利となります。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};