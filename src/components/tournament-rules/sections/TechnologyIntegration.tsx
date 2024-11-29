import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Database, Bot, BarChart, Video, HeartPulse } from "lucide-react";

export const TechnologyIntegration = () => {
  return (
    <RuleSection id="technology-integration" title="テクノロジー統合">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Database className="w-6 h-6 text-blue-500" />
            データ管理システム
          </h3>
          <p className="text-slate-600">
            <span className="font-semibold">15. </span>
            試合結果、スコア、選手のパフォーマンスデータを永続的なデータベースに記録し、改ざん不可能な形で保存します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bot className="w-6 h-6 text-blue-500" />
            AIアシスタントレフェリー
          </h3>
          <p className="text-slate-600">
            最新のAI技術を活用して、審判の判定をサポートし、より公平で正確な判定を実現します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <BarChart className="w-6 h-6 text-blue-500" />
            リアルタイムデータ分析
          </h3>
          <p className="text-slate-600">
            選手の動きや技術をリアルタイムで分析し、観客への情報提供や選手の技術向上に活用します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Video className="w-6 h-6 text-blue-500" />
            デジタルリプレイシステム
          </h3>
          <p className="text-slate-600">
            複数アングルからの映像を即時に確認できるシステムを導入し、判定の透明性を確保します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HeartPulse className="w-6 h-6 text-blue-500" />
            バイオメトリクスモニタリング
          </h3>
          <p className="text-slate-600">
            選手の生体データをリアルタイムでモニタリングし、安全性の向上と最適なパフォーマンス発揮を支援します。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};