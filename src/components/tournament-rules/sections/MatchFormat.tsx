import { RuleSection } from "../RuleSection";
import { Calendar, Layout, Award, Timer } from "lucide-react";

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
            <Timer className="w-6 h-6 text-blue-500" />
            試合時間・ラウンド
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>試合時間とラウンド数は開催される大会によって決定されます</li>
            <li>青帯以上の選手は3ラウンド以上で実施されます</li>
            <li>同点の場合は、最後に上のポジションを取っていた選手が勝利となります</li>
            <li>ダブルガードの場合は1ポイントが与えられます</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layout className="w-6 h-6 text-blue-500" />
            マットサイズ
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>最低サイズ：6m×6m</li>
            <li>推奨サイズ：8m×8m以上</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            特別ルール
          </h3>
          <p className="text-slate-600">
            ニーオンベリーやパスガードについては得点が与えられません。詳細はポイントシステムをご確認ください。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};