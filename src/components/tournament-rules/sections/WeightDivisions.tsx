import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const WeightDivisions = () => {
  return (
    <RuleSection id="weight-divisions" title="体重区分" sectionNumber="6">
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">男性部門</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ルースター級"
              description="57.5kg以下"
              ruleNumber="6.1"
            />
            <RuleItem
              title="フェザー級"
              description="64kg以下"
              ruleNumber="6.2"
            />
            <RuleItem
              title="ライト級"
              description="70kg以下"
              ruleNumber="6.3"
            />
            <RuleItem
              title="ミドル級"
              description="77.5kg以下"
              ruleNumber="6.4"
            />
            <RuleItem
              title="ミディアムヘビー級"
              description="85.5kg以下"
              ruleNumber="6.5"
            />
            <RuleItem
              title="ヘビー級"
              description="85.5kg超"
              ruleNumber="6.6"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">女性部門</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ライトフェザー級"
              description="53.5kg以下"
              ruleNumber="6.7"
            />
            <RuleItem
              title="フェザー級"
              description="58.5kg以下"
              ruleNumber="6.8"
            />
            <RuleItem
              title="ライト級"
              description="64kg以下"
              ruleNumber="6.9"
            />
            <RuleItem
              title="ミドル級"
              description="69kg以下"
              ruleNumber="6.10"
            />
            <RuleItem
              title="ヘビー級"
              description="69kg超"
              ruleNumber="6.11"
            />
          </div>
        </div>

        <RuleItem
          title="計量ルール"
          description="試合当日、試合開始20分前までに計量を完了する必要があります。計量の回数制限は大会ごとに異なります。"
          ruleNumber="6.12"
        />
      </div>
    </RuleSection>
  );
};