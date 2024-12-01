import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const BracketSystem = () => {
  return (
    <RuleSection id="bracket-system" title="トーナメント形式" sectionNumber="10">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">トーナメント形式の説明</h3>
          <RuleItem
            title="トーナメント形式"
            description="1回負けたら大会から脱落する勝ち抜き形式です。勝者は次のラウンドに進み、敗者は大会から脱落します。最後まで勝ち残った選手が優勝となります。"
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