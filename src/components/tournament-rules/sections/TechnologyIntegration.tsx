import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const TechnologyIntegration = () => {
  return (
    <RuleSection id="technology-integration" title="テクノロジー統合">
      <RuleItem
        title="ブロックチェーン記録"
        description="試合結果、スコア、選手のパフォーマンスデータをブロックチェーンに記録し、改ざん不可能な形で保存します。"
      />
      <RuleItem
        title="AIアシスタントレフェリー"
        description="カメラとセンサーを使用してポイントの判定をサポートし、人間のレフェリーの判断を補助します。"
      />
      <RuleItem
        title="リアルタイム分析"
        description="試合中の選手の動きやテクニックをAIが分析し、統計データを生成します。"
      />
      <RuleItem
        title="デジタルリプレイ"
        description="異議申し立て時に複数アングルからの映像を即時に確認できるシステムを導入します。"
      />
    </RuleSection>
  );
};