import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Shield, Swords, Crown, Ban, AlertTriangle } from "lucide-react";

export const PointSystem = () => {
  return (
    <RuleSection id="point-system" title="ポイントシステム">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4 text-red-500">
          <Ban className="w-6 h-6" />
          <p className="font-semibold">アドバンテージポイントは廃止されました</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            基本ポイント
          </h3>
          <div className="grid gap-4">
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-slate-600" />
              <p>テイクダウン：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Swords className="w-5 h-5 text-slate-600" />
              <p>スイープ：2点</p>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-slate-600" />
              <p>マウント：4点</p>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-slate-600" />
              <p>バック：4点</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            ペナルティ
          </h3>
          <p className="text-slate-600">
            消極的な姿勢や禁止事項に対してペナルティが与えられ、2回目で相手に2点が与えられます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-500" />
            デジタルスコアリング
          </h3>
          <p className="text-slate-600">
            AIアシスタントレフェリーシステムがポイントの判定をサポートし、即時にブロックチェーンに記録します。
            全てのポイントは明確な技術的達成に基づいて付与され、主観的な判断要素は排除されます。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};