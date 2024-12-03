import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const WeightDivisions = () => {
  return (
    <RuleSection id="weight-divisions" title="体重区分" sectionNumber="5">
      <div className="space-y-8">
        {/* 男性部門 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">成人男性部門（GiおよびNo-Gi）</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ルースター級"
              description="57.5kg以下"
              ruleNumber="5.1"
            />
            <RuleItem
              title="ライトフェザー級"
              description="64.0kg以下"
              ruleNumber="5.2"
            />
            <RuleItem
              title="フェザー級"
              description="70.0kg以下"
              ruleNumber="5.3"
            />
            <RuleItem
              title="ライト級"
              description="76.0kg以下"
              ruleNumber="5.4"
            />
            <RuleItem
              title="ミドル級"
              description="82.3kg以下"
              ruleNumber="5.5"
            />
            <RuleItem
              title="ミディアムヘビー級"
              description="88.3kg以下"
              ruleNumber="5.6"
            />
            <RuleItem
              title="ヘビー級"
              description="94.3kg以下"
              ruleNumber="5.7"
            />
            <RuleItem
              title="スーパーヘビー級"
              description="100.5kg以下"
              ruleNumber="5.8"
            />
            <RuleItem
              title="ウルトラヘビー級"
              description="制限なし"
              ruleNumber="5.9"
            />
          </div>
        </div>

        {/* 女性部門 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">成人女性部門（GiおよびNo-Gi）</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <RuleItem
              title="ルースター級"
              description="48.5kg以下"
              ruleNumber="5.10"
            />
            <RuleItem
              title="ライトフェザー級"
              description="53.5kg以下"
              ruleNumber="5.11"
            />
            <RuleItem
              title="フェザー級"
              description="58.5kg以下"
              ruleNumber="5.12"
            />
            <RuleItem
              title="ライト級"
              description="64.0kg以下"
              ruleNumber="5.13"
            />
            <RuleItem
              title="ミドル級"
              description="69.0kg以下"
              ruleNumber="5.14"
            />
            <RuleItem
              title="ミディアムヘビー級"
              description="74.0kg以下"
              ruleNumber="5.15"
            />
            <RuleItem
              title="ヘビー級"
              description="74.0kg超"
              ruleNumber="5.16"
            />
          </div>
        </div>

        <RuleItem
          title="計量ルール"
          description="試合当日、試合開始20分前までに計量を完了する必要があります。計量の回数制限は大会ごとに異なります。"
          ruleNumber="5.17"
        />
      </div>
    </RuleSection>
  );
};