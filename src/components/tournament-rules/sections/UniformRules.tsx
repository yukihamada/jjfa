import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const UniformRules = () => {
  return (
    <RuleSection id="uniform-rules" title="服装規定" sectionNumber="2">
      <div className="space-y-4">
        <RuleItem
          title="2.1 サイズとフィット"
          description="袖は手首から5cm以内、パンツは足首から10cm以内。相手が適切に掴めるよう余裕を持たせること"
          ruleNumber="2.1"
        />
        <RuleItem
          title="2.2 生地の仕様"
          description="耐久性のあるコットンまたは類似素材を使用。摩擦や引っ張りに耐えられる強度と適切な厚さ・織りの密度が必要"
          ruleNumber="2.2"
        />
        <RuleItem
          title="2.3 襟（ラペル）の要件"
          description="適切な厚さと硬さを持つ襟。プラスチックまたは類似素材の使用が認められる"
          ruleNumber="2.3"
        />
        <RuleItem
          title="2.4 パッチと刺繍"
          description="チーム、アカデミー、スポンサーのパッチは指定された位置（襟、肩、脚の特定エリア）にのみ付けることが可能"
          ruleNumber="2.4"
        />
        <RuleItem
          title="2.5 帯の着用"
          description="各自の級に応じた帯を使用し、試合中に解けないようしっかりと結ぶこと"
          ruleNumber="2.5"
        />
        <RuleItem
          title="2.6 清潔さの維持"
          description="道着は清潔で、汚れ、悪臭、破れ、穴がないこと。試合前のチェックで不適合となる場合がある"
          ruleNumber="2.6"
        />
      </div>
    </RuleSection>
  );
};