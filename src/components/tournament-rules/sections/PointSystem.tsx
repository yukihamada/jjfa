import { RuleSection } from "../RuleSection";
import { Shield, Info, Award } from "lucide-react";

export const PointSystem = () => {
  return (
    <RuleSection id="point-system" title="ポイントシステム" sectionNumber="6">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            基本ポイント（全て3秒キープ）
          </h3>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <p>テイクダウン（立った状態から相手をコントロールしながら倒す）：即時2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <p>スイープ（全ての上下の入れ替え）：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <p>抑え込み（全ての抑え込み）：3点</p>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <p>ハーフガード抑え込み：1点</p>
            </div>
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <p>ダブルガードから立ち上がり：2点</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-green-500" />
            体重区分
          </h3>
          <p className="text-slate-600">
            SJ（スポーツ柔術）の体重区分に準拠します。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};