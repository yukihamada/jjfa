import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const Introduction = () => {
  return (
    <RuleSection id="introduction" title="はじめに">
      <RuleItem
        title="JJFAの理念と目的"
        description="柔術をすべての人に身近なものとし、コミュニティの持続可能な成長と公正な価値分配を目指します。"
      />
      <RuleItem
        title="JiuFightのコンセプト"
        description="柔術の新時代を切り開く、技術と競技精神を重視した大会です。"
      />
      <RuleItem
        title="デジタル時代の柔術大会"
        description="ブロックチェーン技術を活用し、試合結果や選手のパフォーマンスデータを透明かつ永続的に記録します。"
      />
    </RuleSection>
  );
};