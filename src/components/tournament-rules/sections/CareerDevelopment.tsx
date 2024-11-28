import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const CareerDevelopment = () => {
  return (
    <RuleSection id="career-development" title="選手キャリア開発">
      <RuleItem
        title="プロフェッショナル育成プログラム"
        description="選手のキャリアパスを明確化し、プロフェッショナルとしての成長を支援する体系的なプログラムを提供します。"
      />
      <RuleItem
        title="メディア露出支援"
        description="選手のブランディングとプロモーションを支援し、柔術の普及と選手の価値向上を図ります。"
      />
      <RuleItem
        title="国際交流プログラム"
        description="世界各国の選手との交流機会を提供し、技術と文化の相互理解を促進します。"
      />
      <RuleItem
        title="引退後支援"
        description="引退後のキャリア支援として、指導者育成プログラムやビジネス支援を提供します。"
      />
    </RuleSection>
  );
};