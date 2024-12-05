import { RuleSection } from "../RuleSection";
import { Shield, FileText, AlertTriangle } from "lucide-react";

export const AntiDoping = () => {
  return (
    <RuleSection id="anti-doping" title="ドーピング管理と公正な競技" sectionNumber="16">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">16.0</span>
            アンチドーピング方針
          </h3>
          <p className="text-slate-600">
            JJFAは、世界アンチ・ドーピング機構（WADA）のガイドラインに従い、
            クリーンな競技環境の維持に努めています。
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
            <li>禁止薬物リストの遵守</li>
            <li>定期的な教育プログラムの実施</li>
            <li>違反に対する厳格な処分</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">16.1</span>
            検査手続き
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>無作為抽出による検査</li>
            <li>メダリストの必須検査</li>
            <li>競技外検査の実施</li>
            <li>検体の採取と分析手順</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">16.2</span>
            違反と制裁
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>競技結果の無効化</li>
            <li>出場停止処分</li>
            <li>再教育プログラムの受講義務</li>
            <li>復帰のための要件</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};