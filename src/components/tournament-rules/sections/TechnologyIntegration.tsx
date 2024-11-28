import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const TechnologyIntegration = () => {
  return (
    <RuleSection id="technology-integration" title="テクノロジー統合">
      <RuleItem
        title="ブロックチェーンによる記録管理"
        description="試合結果、スコア、選手のパフォーマンスデータをブロックチェーンに記録し、改ざん不可能な形で永続的に保存します。"
      />
      <RuleItem
        title="AIアシスタントレフェリー"
        description="最新のAI技術を活用して、審判の判定をサポートし、より公平で正確な判定を実現します。"
      />
      <RuleItem
        title="リアルタイムデータ分析"
        description="選手の動きや技術をリアルタイムで分析し、観客への情報提供や選手の技術向上に活用します。"
      />
      <RuleItem
        title="デジタルリプレイシステム"
        description="複数アングルからの映像を即時に確認できるシステムを導入し、判定の透明性を確保します。"
      />
      <RuleItem
        title="バイオメトリクスモニタリング"
        description="選手の生体データをリアルタイムでモニタリングし、安全性の向上と最適なパフォーマンス発揮を支援します。"
      />
    </RuleSection>
  );
};