import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const WeightDivisions = () => {
  return (
    <RuleSection id="weight-divisions" title="体重区分">
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">男性部門</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ルースター級"
              description="57.5kg以下"
            />
            <RuleItem
              title="フェザー級"
              description="64kg以下"
            />
            <RuleItem
              title="ライト級"
              description="70kg以下"
            />
            <RuleItem
              title="ミドル級"
              description="77.5kg以下"
            />
            <RuleItem
              title="ミディアムヘビー級"
              description="85.5kg以下"
            />
            <RuleItem
              title="ヘビー級"
              description="85.5kg超"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">女性部門</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ライトフェザー級"
              description="53.5kg以下"
            />
            <RuleItem
              title="フェザー級"
              description="58.5kg以下"
            />
            <RuleItem
              title="ライト級"
              description="64kg以下"
            />
            <RuleItem
              title="ミドル級"
              description="69kg以下"
            />
            <RuleItem
              title="ヘビー級"
              description="69kg超"
            />
          </div>
        </div>

        <RuleItem
          title="計量ルール"
          description="試合前日の指定された時間に計量を実施。規定体重をオーバーした場合、2時間以内に再計量が可能です。"
        />
      </div>
    </RuleSection>
  );
};