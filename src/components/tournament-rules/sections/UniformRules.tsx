import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const UniformRules = () => {
  return (
    <RuleSection id="uniform-rules" title="服装規定" sectionNumber="13">
      <div className="space-y-4">
        <RuleItem
          title="道着の色"
          description="選手の個性を尊重し、道着の色は自由です。自分に合った色を選択できます。"
          ruleNumber="13.1"
        />
        <RuleItem
          title="道着のサイズ"
          description="安全性を考慮し、袖は手首から4cm以上、長さは足首から5cm以上の余裕が必要です。"
          ruleNumber="13.2"
        />
        <RuleItem
          title="パッチとロゴ"
          description="試合に影響を与えない限り、パッチやロゴは自由に配置することができます。"
          ruleNumber="13.3"
        />
        <RuleItem
          title="安全性の確認"
          description="破れや危険な装飾がないか、試合前に確認します。選手の安全を第一に考えます。"
          ruleNumber="13.4"
        />
      </div>
    </RuleSection>
  );
};