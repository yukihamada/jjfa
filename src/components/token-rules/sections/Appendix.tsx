import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Appendix = () => {
  return (
    <TokenRulesSection title="第6章 附則">
      <TokenRulesArticle title="第13条（技術仕様と運用指針）">
        <p className="mb-4">
          トークン運用の詳細は「トークン技術仕様書」に基づき実施する。本規程に記載のない事項については、日本の法令および定款を優先適用する。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第14条（施行日）">
        <p className="mb-4">
          本規程は2024年●月●日から施行する。
        </p>
      </TokenRulesArticle>

      <div className="mt-8">
        <h3 className="font-bold mb-4">この規程の最終的な完成度</h3>
        <ol className="list-decimal pl-6 mb-4">
          <li>完全な透明性と法的適合性：発行履歴、運用方法、意思決定プロセスが法令に基づき設計され、トークン保有者が信頼を持って利用可能。</li>
          <li>ユーザー中心の対応力：紛失・不正時の対応が具体的かつ迅速で、保有者に安心感を提供。</li>
          <li>グローバル基準の設計：Ethereumなどの広く利用されるブロックチェーンを活用し、将来的な拡張性を確保。</li>
          <li>DAOエコシステムの強化：特別決議と普通決議の明確なルールにより、効率的で公平な意思決定を実現。</li>
        </ol>
      </div>
    </TokenRulesSection>
  );
};