import { RuleSection } from "../RuleSection";
import { Calendar, Layout, Award, Clock } from "lucide-react";

export const MatchFormat = () => {
  return (
    <RuleSection id="match-format" title="試合形式">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            トーナメント方式
          </h3>
          <div className="space-y-3">
            <p className="text-slate-600">
              シングルイリミネーション方式を基本とし、以下の特別規定を設ける：
            </p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>参加者が4名以下の場合はラウンドロビン方式を採用</li>
              <li>準決勝敗者による3位決定戦を実施</li>
              <li>主要大会では敗者復活戦を実施可能</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-500" />
            試合時間
          </h3>
          <div className="space-y-3">
            <p className="text-slate-600">カテゴリー別の試合時間規定：</p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>アダルト黒帯：6分</li>
              <li>アダルト茶帯：5分</li>
              <li>アダルト紫帯以下：4分</li>
              <li>マスター（30歳以上）：4分</li>
              <li>ジュニア（18歳未満）：4分</li>
              <li>キッズ（15歳未満）：3分</li>
            </ul>
            <p className="text-slate-600 mt-2">
              延長戦が必要な場合：
            </p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>決勝戦：2分間の延長戦を実施（最大2回まで）</li>
              <li>準決勝以下：2分間の延長戦を1回のみ実施</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layout className="w-6 h-6 text-blue-500" />
            試合エリア
          </h3>
          <div className="space-y-3">
            <p className="text-slate-600">
              競技エリアの規格と安全基準：
            </p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>競技エリア：8m×8m以上</li>
              <li>安全エリア：競技エリアの外周に2m以上</li>
              <li>マットの厚さ：4cm以上</li>
              <li>表面素材：滑り止め加工された衛生的な素材</li>
            </ul>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};