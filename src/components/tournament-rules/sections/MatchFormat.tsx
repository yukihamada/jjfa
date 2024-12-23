import { RuleSection } from "../RuleSection";
import { Calendar, Layout, Award, Timer, Scale } from "lucide-react";

export const MatchFormat = () => {
  return (
    <RuleSection id="match-format" title="試合形式" sectionNumber="1">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">1.0</span>
            計量ルール
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>試合開始20分前までに計量を完了する必要があります</li>
            <li>計量時間は大会によって変更される場合があります</li>
            <li>体重オーバーの場合は失格となります</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">1.1</span>
            トーナメント方式
          </h3>
          <p className="text-slate-600">
            シングルイリミネーション方式で実施され、敗者は次のラウンドに進めません。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Timer className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">1.2</span>
            試合時間・ラウンド
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>試合時間とラウンド数は開催される大会によって決定されます</li>
            <li>青帯以上の選手は3ラウンド以上で実施されます</li>
            <li>同点の場合は、最後に上のポジションを取っていた選手が勝利となります</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Layout className="w-6 h-6 text-blue-500" />
            <span className="text-blue-600">1.3</span>
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
            <span className="text-blue-600">1.4</span>
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