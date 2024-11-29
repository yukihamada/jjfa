import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const UniformRules = () => {
  return (
    <RuleSection id="uniform-rules" title="服装規定">
      <div className="space-y-4">
        <RuleItem
          title="道着の色"
          description="選手の個性を尊重し、道着の色は自由です。自分に合った色を選択できます。"
        />
        <RuleItem
          title="道着のサイズ"
          description="安全性を考慮し、袖は手首から4cm以上、長さは足首から5cm以上の余裕が必要です。"
        />
        <RuleItem
          title="パッチとロゴ"
          description="所属チームのパッチは肩、胸、背中の指定された位置に付けることができます。サイズは10cm×10cm以内。"
        />
        <RuleItem
          title="安全性の確認"
          description="破れや危険な装飾がないか、試合前に確認します。選手の安全を第一に考えます。"
        />
      </div>
    </RuleSection>
  );
};