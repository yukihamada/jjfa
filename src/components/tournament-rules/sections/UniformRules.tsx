import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const UniformRules = () => {
  return (
    <RuleSection id="uniform-rules" title="服装規定">
      <div className="space-y-4">
        <RuleItem
          title="道着の色"
          description="白または青の道着のみ使用可能。黒や他の色は認められません。"
        />
        <RuleItem
          title="道着のサイズ"
          description="袖は手首から4cm以上、長さは足首から5cm以上の余裕が必要です。"
        />
        <RuleItem
          title="パッチとロゴ"
          description="所属チームのパッチは肩、胸、背中の指定された位置のみ。サイズは10cm×10cm以内。"
        />
        <RuleItem
          title="不適切な道着"
          description="破れ、汚れ、不適切なサイズの道着での出場は認められず、失格となる場合があります。"
        />
      </div>
    </RuleSection>
  );
};