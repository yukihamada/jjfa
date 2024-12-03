import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const WeightDivisions = () => {
  return (
    <RuleSection id="weight-divisions" title="体重区分" sectionNumber="5">
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">体重区分表</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ルースター級"
              description="48.5kg以下"
              ruleNumber="5.1"
            />
            <RuleItem
              title="ライトフェザー級"
              description="53.5kg以下"
              ruleNumber="5.2"
            />
            <RuleItem
              title="フェザー級"
              description="58.5kg以下"
              ruleNumber="5.3"
            />
            <RuleItem
              title="ライト級"
              description="64.0kg以下"
              ruleNumber="5.4"
            />
            <RuleItem
              title="ミドル級"
              description="69.0kg以下"
              ruleNumber="5.5"
            />
            <RuleItem
              title="ミディアムヘビー級"
              description="74.0kg以下"
              ruleNumber="5.6"
            />
            <RuleItem
              title="ヘビー級"
              description="74.0kg超"
              ruleNumber="5.7"
            />
          </div>
        </div>

        <RuleItem
          title="計量ルール"
          description="試合当日、試合開始20分前までに計量を完了する必要があります。計量の回数制限は大会ごとに異なります。"
          ruleNumber="5.8"
        />
      </div>
    </RuleSection>
  );
};