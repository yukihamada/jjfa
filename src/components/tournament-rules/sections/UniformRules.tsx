import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const UniformRules = () => {
  return (
    <RuleSection id="uniform-rules" title="服装規定" sectionNumber="2">
      <div className="space-y-4">
        <RuleItem
          title="道着の素材"
          description="綿または綿ポリエステル混紡の丈夫な生地を使用すること。薄すぎる生地や伸縮性の高い生地は禁止"
          ruleNumber="2.1"
        />
        <RuleItem
          title="道着のサイズ"
          description="袖は手首から4cm以上、裾は足首から5cm以上の余裕が必要"
          ruleNumber="2.2"
        />
        <RuleItem
          title="パッチの配置"
          description="パッチは以下の位置のみ許可：肩（左右）、胸（左右）、背中（上部中央）、袖（上腕部）、ズボン（太もも部）。サイズは各部位の面積の25%以下"
          ruleNumber="2.3"
        />
        <RuleItem
          title="安全性の確認"
          description="破れや危険な装飾がないか、試合前に確認。選手の安全を最優先"
          ruleNumber="2.4"
        />
      </div>
    </RuleSection>
  );
};