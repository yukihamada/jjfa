import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const PointSystem = () => {
  return (
    <RuleSection id="point-system" title="ポイントシステム">
      <RuleItem
        title="基本ポイント"
        description="テイクダウン：2点、スイープ：2点、ニーオンベリー：2点、マウント：4点、バック：4点"
      />
      <RuleItem
        title="アドバンテージ"
        description="技の完成に近い状態を作った場合にアドバンテージポイントが与えられます。"
      />
      <RuleItem
        title="ペナルティ"
        description="消極的な姿勢や禁止事項に対してペナルティが与えられ、2回目で相手に2点が与えられます。"
      />
      <RuleItem
        title="デジタルスコアリング"
        description="AIアシスタントレフェリーシステムがポイントの判定をサポートし、即時にブロックチェーンに記録します。"
      />
    </RuleSection>
  );
};