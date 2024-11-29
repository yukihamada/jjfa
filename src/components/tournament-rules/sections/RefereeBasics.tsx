import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Gavel, Scale, Shield, Users, Award, Scroll, School, MessageSquare } from "lucide-react";

export const RefereeBasics = () => {
  return (
    <RuleSection id="referee-basics" title="レフェリーの基本原則">
      <div className="space-y-8">
        {/* 基本原則 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Gavel className="w-6 h-6 text-blue-500" />
            基本原則
          </h3>
          <div className="space-y-4">
            <RuleItem
              ruleNumber="38.1"
              title="公正性の重要性"
              description="研修を受け、一貫性のあるレフェリーは、個々の試合の結果に影響を与える決定をするので、公正な大会には不可欠です。正確かつ偏見のない振る舞いで、ルールを守り、試合を判断することが期待されています。"
            />
            <RuleItem
              ruleNumber="38.2"
              title="判定の自信"
              description="レフェリーは、判定に自信を示すべきであり、その特性はルールの理解及び経験から得られるものです。マット上の状況に関わらず、落ち着いた態度を維持することが望まれます。"
            />
            <RuleItem
              ruleNumber="38.3"
              title="中立性の維持"
              description="レフェリー及びスタッフは、競技エリア内でいかなる競技者も励ましたり、贔屓をしたり、応援したりすることは許可されていません。"
            />
          </div>
        </div>

        {/* 主審の責務 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            主審の責務
          </h3>
          <div className="space-y-4">
            <RuleItem
              ruleNumber="38.4"
              title="試合の管理"
              description="試合は、一人の主審によって裁かれます。主審は対戦エリアに居続け、競技者の近くに居ることで試合を管理します。"
            />
            <div className="pl-6 space-y-3">
              <p className="text-slate-600">主審の具体的な責務：</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>試合場、装具、柔術衣、選手の衛生状態などの監督</li>
                <li>選手の配置と試合開始の指示</li>
                <li>外部からの妨害の防止</li>
                <li>危険な状況への介入</li>
                <li>医療チームの入場許可の判断</li>
              </ul>
            </div>
          </div>
        </div>

        {/* レフェリーの資格要件 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            レフェリーの資格要件
          </h3>
          <div className="space-y-4">
            <RuleItem
              ruleNumber="38.7"
              title="ルールの理解"
              description="レフェリーは、ルール及び規定の本を読んで勉強し、SJJIFレフェリーセミナーに出席し、必要な認定コースに合格する必要があります。"
            />
            <RuleItem
              ruleNumber="38.8"
              title="柔術経験"
              description="国際大会で審判するには茶帯または黒帯でなければなりません。新たな柔術技や戦略に精通している必要があります。"
            />
          </div>
        </div>

        {/* レフェリーの指示 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            レフェリーの指示
          </h3>
          <div className="pl-6">
            <p className="text-slate-600 mb-3">一般的な指示：</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">Ação (アサウ)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">Lute (ルーチ)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">More action</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">もっと動いて</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">違反グリップを離して</p>
              </div>
              <div className="bg-slate-50 p-3 rounded">
                <p className="font-semibold">続けたい?</p>
              </div>
            </div>
          </div>
        </div>

        {/* レフェリーのジェスチャー */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            レフェリーのジェスチャー
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">基本的なジェスチャー</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">試合開始</div>
                  <p className="text-slate-600">両腕を肩の高さまで上げ、「ファイト！」と共に下ろす</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">ポイント付与</div>
                  <p className="text-slate-600">該当選手の色の手を上げ、指の本数でポイントを示す</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">試合終了</div>
                  <p className="text-slate-600">両腕を水平に開き、「ストップ！」と宣言</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">特殊なジェスチャー</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">ペナルティ</div>
                  <p className="text-slate-600">該当選手の色の拳を上げる</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">一時停止</div>
                  <p className="text-slate-600">手を「T」の形に組み、「タイム」と宣言</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded">
                  <div className="font-semibold min-w-[120px]">失格</div>
                  <p className="text-slate-600">腕を頭上で交差させ、該当選手を指す</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};