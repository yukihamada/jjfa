import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const MatchDuration = () => {
  return (
    <RuleSection id="match-duration" title="試合時間">
      <div className="space-y-4">
        <RuleItem
          title="白帯"
          description="5分間。延長戦2分。"
        />
        <RuleItem
          title="青帯"
          description="6分間。延長戦2分。"
        />
        <RuleItem
          title="紫帯"
          description="7分間。延長戦3分。"
        />
        <RuleItem
          title="茶帯"
          description="8分間。延長戦3分。"
        />
        <RuleItem
          title="黒帯"
          description="10分間。延長戦5分。"
        />
        <RuleItem
          title="延長戦ルール"
          description="延長戦でも決着がつかない場合、審判による判定となります。"
        />
      </div>
    </RuleSection>
  );
};