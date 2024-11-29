import { RuleSection } from "../RuleSection";
import { Heart, Shield, AlertCircle, FirstAid } from "lucide-react";

export const SafetyMeasures = () => {
  return (
    <RuleSection id="safety-measures" title="安全対策">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            メディカルチェック
          </h3>
          <div className="space-y-3">
            <p className="font-semibold">必須健康診断項目：</p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>血圧測定（収縮期血圧180mmHg以上は出場不可）</li>
              <li>体温測定（37.5度以上は出場不可）</li>
              <li>感染症スクリーニング</li>
              <li>既往歴の確認</li>
              <li>当日の体調問診</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FirstAid className="w-6 h-6 text-red-500" />
            医療体制
          </h3>
          <div className="space-y-3">
            <p className="font-semibold">会場での医療体制：</p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>救急救命士の常駐（2名以上）</li>
              <li>医師の待機（整形外科医または救急医）</li>
              <li>救急用具（AED、担架、応急処置キット）の配備</li>
              <li>救急車の要請と搬送経路の確保</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            保険制度
          </h3>
          <div className="space-y-3">
            <p className="font-semibold">必須加入保険：</p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>スポーツ安全保険（死亡・後遺障害補償）</li>
              <li>賠償責任保険（対人・対物）</li>
              <li>試合当日の傷害保険</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-yellow-500" />
            感染症対策
          </h3>
          <div className="space-y-3">
            <p className="font-semibold">基本的な感染対策：</p>
            <ul className="list-disc pl-6 text-slate-600">
              <li>入場時の検温と体調チェック</li>
              <li>マットの定期的な消毒（試合ごと）</li>
              <li>会場の換気管理（CO2濃度モニタリング）</li>
              <li>手指消毒液の設置</li>
              <li>参加者の行動履歴の記録</li>
            </ul>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};