import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const SafetyMeasures = () => {
  return (
    <RuleSection id="safety-measures" title="安全対策">
      <RuleItem
        title="メディカルチェック"
        description="試合前に選手の健康状態をデジタル記録し、ブロックチェーンで管理します。"
      />
      <RuleItem
        title="緊急対応"
        description="医療スタッフが常駐し、緊急時の対応手順を明確化します。"
      />
      <RuleItem
        title="保険加入"
        description="全選手に傷害保険への加入を義務付けます。"
      />
      <RuleItem
        title="感染症対策"
        description="最新の衛生基準に基づく感染症対策を実施します。"
      />
    </RuleSection>
  );
};