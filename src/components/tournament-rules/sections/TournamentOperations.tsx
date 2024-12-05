import { RuleSection } from "../RuleSection";
import { Building, Users, Trophy } from "lucide-react";

export const TournamentOperations = () => {
  return (
    <RuleSection id="tournament-operations" title="大会運営" sectionNumber="14">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">14.0</span>
            会場レイアウト
          </h3>
          <p className="text-slate-600">
            大会会場は、選手、観客、スタッフの安全性と利便性を考慮して設計されます。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>試合エリア：最低6m×6m、推奨8m×8m</li>
            <li>ウォームアップエリア：十分なスペースの確保</li>
            <li>医療スタッフステーション：緊急時の迅速な対応が可能な配置</li>
            <li>観客席：安全な距離を保ちつつ、試合の観戦が可能な配置</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">14.1</span>
            運営スタッフの責任
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>大会ディレクター：全体の統括と進行管理</li>
            <li>審判団：公平な判定と試合の円滑な進行</li>
            <li>医療スタッフ：選手の安全管理と応急処置</li>
            <li>計量担当：正確な計量の実施</li>
            <li>記録係：試合結果の記録と管理</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">14.2</span>
            表彰式と賞品
          </h3>
          <p className="text-slate-600">
            各カテゴリーの上位入賞者に対して、以下の表彰が行われます：
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>金メダル：優勝者</li>
            <li>銀メダル：準優勝者</li>
            <li>銅メダル：3位入賞者（2名）</li>
            <li>賞状：入賞者全員</li>
            <li>特別賞：最優秀選手賞、技術賞など</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};