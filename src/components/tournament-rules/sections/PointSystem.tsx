import { RuleSection } from "../RuleSection";
import { Shield, Swords, Crown, Timer, Award, AlertTriangle } from "lucide-react";

export const PointSystem = () => {
  return (
    <RuleSection id="point-system" title="ポイントシステム">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            基本ポイント
          </h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Swords className="w-5 h-5 text-slate-600" />
                <p className="font-semibold">テイクダウン：2点または3点</p>
              </div>
              <ul className="list-disc pl-6 text-slate-600">
                <li>相手をコントロールしながら倒し、3秒以上上位を保持：2点</li>
                <li>投げ技で相手を背中から着地させた場合：3点</li>
                <li>相手が直接座った場合：ポイントなし</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-slate-600" />
                <p className="font-semibold">スイープ：2点</p>
              </div>
              <ul className="list-disc pl-6 text-slate-600">
                <li>ガードポジションから相手の体勢を崩し、上位を3秒以上維持</li>
                <li>50/50やベリンボロからの反転も同様</li>
                <li>スタンドからガードに引き込んだ直後の反転はポイントなし</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-slate-600" />
                <p className="font-semibold">ニーオンベリー：2点</p>
              </div>
              <ul className="list-disc pl-6 text-slate-600">
                <li>サイドコントロールから膝を相手の腹部に乗せ、3秒以上維持</li>
                <li>相手の両腕をコントロールしていること</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-slate-600" />
                <p className="font-semibold">マウント：4点</p>
              </div>
              <ul className="list-disc pl-6 text-slate-600">
                <li>相手の胸の上で両膝を設置し、3秒以上維持</li>
                <li>相手の腕を1本以上跨いでいる場合は無効</li>
                <li>テクニカルマウントも同様に4点</li>
              </ul>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-slate-600" />
                <p className="font-semibold">バックコントロール：4点</p>
              </div>
              <ul className="list-disc pl-6 text-slate-600">
                <li>両足のフックを入れて相手の背後をコントロール</li>
                <li>ボディトライアングルでの維持も有効</li>
                <li>3秒以上の維持が必要</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            反則行為とペナルティ
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">軽微な反則（警告）：</p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>消極的な試合運び</li>
                <li>場外への逃避</li>
                <li>不適切なグリップの保持</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">重大な反則（失格）：</p>
              <ul className="list-disc pl-6 text-slate-600">
                <li>故意の怪我や危険行為</li>
                <li>審判への暴言や不服従</li>
                <li>禁止技の使用</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-green-500" />
            勝利条件
          </h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>サブミッション（タップまたは口頭による降参）による勝利</li>
            <li>ポイントによる勝利（試合時間終了時の総得点）</li>
            <li>アドバンテージによる判定（ポイント同点の場合）</li>
            <li>失格による勝利（重大な反則行為）</li>
            <li>医師の判断による勝利（怪我や体調不良）</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};