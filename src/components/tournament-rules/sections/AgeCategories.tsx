import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const AgeCategories = () => {
  return (
    <RuleSection id="age-categories" title="年齢カテゴリー">
      <div className="space-y-4">
        <RuleItem
          title="キッズ部門"
          description="4-12歳：2年齢ごとのカテゴリー分け。特別な安全ルールが適用されます。"
        />
        <RuleItem
          title="ジュニア部門"
          description="13-15歳：体重差は最大6kgまで。試合時間は4分。"
        />
        <RuleItem
          title="アダルト部門"
          description="16-30歳：標準的なルールが適用されます。"
        />
        <RuleItem
          title="マスター部門"
          description="31歳以上：年齢別（30+, 35+, 40+, 45+, 50+）。安全性を考慮したルール適用。"
        />
      </div>
    </RuleSection>
  );
};