import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const MatchDuration = () => {
  return (
    <RuleSection id="match-duration" title="試合時間" sectionNumber="4">
      <div className="space-y-4">
        <RuleItem
          title="白帯"
          description="2分1ラウンド以上"
          ruleNumber="4.1"
        />
        <RuleItem
          title="青帯以上"
          description="2分×3ラウンド以上。大会によってラウンド数を調整可能。"
          ruleNumber="4.2"
        />
        <RuleItem
          title="休憩時間"
          description="ラウンド間は30秒以上の休憩。選手のコンディション管理を重視します。"
          ruleNumber="4.3"
        />
        <RuleItem
          title="試合進行"
          description="選手の体力と安全を考慮しながら、観客にとって見やすい試合展開を心がけます。"
          ruleNumber="4.4"
        />
        <RuleItem
          title="試合時間の調整"
          description="大会の規模や参加者数に応じて、主催者の判断で試合時間を調整できます。ただし、選手の安全を最優先とします。"
          ruleNumber="4.5"
        />
      </div>
    </RuleSection>
  );
};