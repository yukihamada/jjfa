import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const AgeCategories = () => {
  return (
    <RuleSection id="age-categories" title="年齢カテゴリー" sectionNumber="3">
      <div className="space-y-4">
        <RuleItem
          title="キッズ部門"
          description="4-15歳：安全性を重視したルールが適用され、体重差と経験を考慮したマッチメイキングを行います。"
          ruleNumber="3.1"
        />
        <RuleItem
          title="ジュニア部門"
          description="16-17歳：アダルトルールを基本としながら、安全性に配慮した特別ルールが適用されます。"
          ruleNumber="3.2"
        />
        <RuleItem
          title="アダルト部門"
          description="18-29歳：標準的なルールが適用され、最もコンペティティブな部門となります。"
          ruleNumber="3.3"
        />
        <RuleItem
          title="マスター部門"
          description="30歳以上：年齢別（30+, 35+, 40+, 45+, 50+）のカテゴリーで、経験と安全性を考慮したルールが適用されます。"
          ruleNumber="3.4"
        />
      </div>
    </RuleSection>
  );
};