import { RuleSection } from "../RuleSection";
import { Shield, Swords, Crown, Timer, Award } from "lucide-react";

export const PointSystem = () => {
  return (
    <RuleSection id="point-system" title="ポイントシステム" sectionNumber="3">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            基本ポイント
          </h3>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-slate-600" />
              <p>テイクダウン（立った状態から相手をコントロールしながら倒し、上位のポジションを確保）：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-slate-600" />
              <p>スイープ（ガードポジションから相手のバランスを崩し、上位のポジションを確保）：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-slate-600" />
              <p>押さえ込み（相手を仰向けにして3秒間押さえ込みを維持）：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-slate-600" />
              <p>マウントポジション（相手の胸の上に完全なコントロールで跨る）：4点</p>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-slate-600" />
              <p>バックコントロール（両フックを入れて相手の背後をコントロール）：4点</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-green-500" />
            勝利条件
          </h3>
          <p className="text-slate-600">
            ポイント、サブミッション、または審判の判定によって勝敗が決まります。
            時間内に決着がつかない場合、獲得ポイントにより勝敗を決定します。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};
