import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const Sustainability = () => {
  return (
    <RuleSection id="sustainability" title="持続可能性への取り組み">
      <RuleItem
        title="環境配慮型運営"
        description="大会運営における環境負荷を最小限に抑え、持続可能な大会運営を実現します。"
      />
      <RuleItem
        title="デジタル化推進"
        description="ペーパーレス化やデジタルチケッティングの導入により、環境負荷を削減します。"
      />
      <RuleItem
        title="エコフレンドリーな用具"
        description="環境に配慮した柔術衣や設備の使用を推進します。"
      />
      <RuleItem
        title="カーボンオフセット"
        description="大会運営に伴う環境負荷を相殺する取り組みを実施します。"
      />
    </RuleSection>
  );
};