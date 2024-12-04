import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const MatchDuration = () => {
  return (
    <RuleSection id="match-duration" title="試合時間" sectionNumber="4">
      <div className="space-y-4">
        <RuleItem
          title="白帯"
          description="4分一本勝負"
          ruleNumber="4.1"
        />
        <RuleItem
          title="青帯以上"
          description="5分一本勝負。決勝戦は2分×3ラウンド、インターバル1分"
          ruleNumber="4.2"
        />
        <RuleItem
          title="黒帯"
          description="6分一本勝負。決勝戦は3分×3ラウンド、インターバル1分"
          ruleNumber="4.3"
        />
      </div>
    </RuleSection>
  );
};