import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Gavel, Shield, MessageSquare } from "lucide-react";

export const RefereeBasics = () => {
  return (
    <RuleSection id="referee-basics" title="レフェリーの基本原則" sectionNumber="7">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Gavel className="w-6 h-6 text-blue-500" />
            基本原則
          </h3>
          <div className="space-y-4">
            <RuleItem
              ruleNumber="7.0"
              title="公正性の重要性"
              description="研修を受け、一貫性のあるレフェリーは、個々の試合の結果に影響を与える決定をするので、公正な大会には不可欠です。正確かつ偏見のない振る舞いで、ルールを守り、試合を判断することが期待されています。"
            />
            <RuleItem
              ruleNumber="7.1"
              title="判定の自信"
              description="レフェリーは、判定に自信を示すべきであり、その特性はルールの理解及び経験から得られるものです。マット上の状況に関わらず、落ち着いた態度を維持することが望まれます。"
            />
            <RuleItem
              ruleNumber="7.2"
              title="中立性の維持"
              description="レフェリー及びスタッフは、競技エリア内でいかなる競技者も励ましたり、贔屓をしたり、応援したりすることは許可されていません。"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            主審の責務
          </h3>
          <div className="space-y-4">
            <RuleItem
              ruleNumber="7.3"
              title="試合の管理"
              description="試合は、一人の主審によって裁かれます。主審は対戦エリアに居続け、競技者の近くに居ることで試合を管理します。"
            />
            <div className="pl-4 md:pl-6 space-y-3">
              <p className="text-slate-600 font-medium">主審の具体的な責務：</p>
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

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-blue-500" />
            レフェリーの指示と合図
          </h3>
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-slate-800">基本的な声による指示</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-600">Combate / Fight</p>
                  <p className="text-slate-600 mt-1">試合開始</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-600">Parou / Stop</p>
                  <p className="text-slate-600 mt-1">一時停止</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-600">Lute / Fight</p>
                  <p className="text-slate-600 mt-1">積極的に戦うように促す</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-600">Acabou / Time</p>
                  <p className="text-slate-600 mt-1">試合終了</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};