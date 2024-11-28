import { RuleSection } from "../RuleSection";
import { Calendar, Layout, Award } from "lucide-react";

export const MatchFormat = () => {
  return (
    <RuleSection id="match-format" title="試合形式">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            トーナメント方式
          </h3>
          <p className="text-slate-600">
            シングルイリミネーション方式で実施され、敗者は次のラウンドに進めません。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-blue-500" />
            試合時間
          </h3>
          <p className="text-slate-600">
            試合は2分間の1ラウンドで構成されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layout className="w-6 h-6 text-blue-500" />
            マットサイズ
          </h3>
          <p className="text-slate-600">
            マットサイズは6m×6m以上を使用します。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};