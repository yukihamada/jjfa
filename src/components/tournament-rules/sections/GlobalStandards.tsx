import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const GlobalStandards = () => {
  return (
    <RuleSection id="global-standards" title="国際標準化">
      <RuleItem
        title="国際ルールの統一"
        description="世界各国の柔術団体と協力し、競技ルールの国際標準化を推進します。"
      />
      <RuleItem
        title="多言語対応"
        description="ルールブックと審判システムの多言語対応を実現し、グローバルな普及を促進します。"
      />
      <RuleItem
        title="国際認定制度"
        description="選手、審判、指導者の資格を国際的に認定する制度を確立します。"
      />
      <RuleItem
        title="文化的多様性の尊重"
        description="各国の文化や伝統を尊重しながら、柔術の発展を推進します。"
      />
    </RuleSection>
  );
};