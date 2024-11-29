import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const Rankings = () => {
  return (
    <RuleSection id="rankings" title="ランキングシステム" sectionNumber="12">
      <RuleItem
        title="ポイント計算方法"
        description="大会の規模と順位に応じてポイントを付与し、年間ランキングを算出します。"
        ruleNumber="12.0"
      />
      <RuleItem
        title="ランキング更新"
        description="ランキングは毎週月曜日に更新され、公式ウェブサイトで公開されます。"
        ruleNumber="12.1"
      />
      <RuleItem
        title="ランキングの活用"
        description="年間ランキング上位者には、次年度の大会でのシード権が付与されます。"
        ruleNumber="12.2"
      />
    </RuleSection>
  );
};