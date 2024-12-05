import { RuleSection } from "../RuleSection";
import { Shield, Heart, FileCheck, Stethoscope } from "lucide-react";

export const SafetyMeasures = () => {
  return (
    <RuleSection id="safety-measures" title="安全対策" sectionNumber="9">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">9.0</span>
            大会保険
          </h3>
          <div className="space-y-4">
            <p className="text-slate-600">
              JJFAは全ての公式大会において、参加選手を対象とした包括的な傷害保険に加入します。
              選手は個別での保険加入は不要ですが、追加の保障を希望する場合は任意で加入することができます。
            </p>
            
            <div className="pl-4">
              <h4 className="font-semibold text-slate-800 mb-2">保障内容</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>死亡・後遺障害保険金: 最高5,000万円</li>
                <li>入院保険金: 日額5,000円（180日限度）</li>
                <li>通院保険金: 日額3,000円（90日限度）</li>
                <li>手術保険金: 入院保険金日額の10倍（入院時）または5倍（外来時）</li>
              </ul>
            </div>

            <div className="pl-4">
              <h4 className="font-semibold text-slate-800 mb-2">保障対象期間</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>大会当日の会場到着時から解散時まで</li>
                <li>公式練習時間中の事故</li>
                <li>試合中の事故</li>
                <li>会場内での移動中の事故</li>
              </ul>
            </div>

            <div className="pl-4">
              <h4 className="font-semibold text-slate-800 mb-2">保険金請求手続き</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>事故発生後48時間以内に大会本部への報告が必要</li>
                <li>医師の診断書の提出が必要</li>
                <li>請求書類は大会本部または公式ウェブサイトから入手可能</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-blue-600">9.1</span>
            メディカルチェック
          </h3>
          <p className="text-slate-600">
            試合前に選手の健康状態を確認し、記録します。以下の項目を確認します：
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>血圧測定</li>
            <li>体温チェック</li>
            <li>問診票の確認</li>
            <li>既往症の確認</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-green-500" />
            <span className="text-blue-600">9.2</span>
            緊急対応
          </h3>
          <p className="text-slate-600">
            医療スタッフが常駐し、緊急時の対応手順を明確化します：
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>救急救命士の常駐</li>
            <li>AEDの設置</li>
            <li>救急車の待機（大規模大会の場合）</li>
            <li>近隣医療機関との連携体制</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-purple-500" />
            <span className="text-blue-600">9.3</span>
            感染症対策
          </h3>
          <p className="text-slate-600">
            最新の衛生基準に基づく感染症対策を実施します：
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>入場時の検温</li>
            <li>消毒液の設置</li>
            <li>換気の徹底</li>
            <li>マスク着用の推奨（試合時を除く）</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};