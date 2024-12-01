import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const BracketSystem = () => {
  return (
    <RuleSection id="bracket-system" title="トーナメント形式" sectionNumber="10">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">トーナメント形式の説明</h3>
          <RuleItem
            title="シングルイリミネーション方式"
            description="試合に負けた時点で、その選手はトーナメントから脱落となります。勝った選手のみが次の試合に進むことができ、最後まで勝ち残った選手が優勝となります。この方式により、公平かつ明確な勝者の決定が可能となります。"
            ruleNumber="10.0"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">ラウンド進行</h3>
          <RuleItem
            title="進行管理"
            description="各ラウンドは、試合形式に従って行われ、進行状況はメインテーブルで管理されます。"
            ruleNumber="10.1"
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">決勝戦の設定</h3>
          <RuleItem
            title="勝者決定"
            description="決勝戦は、トーナメントの最後の試合で行われ、最終的な勝者が決まります。"
            ruleNumber="10.2"
          />
        </div>
      </div>
    </RuleSection>
  );
};