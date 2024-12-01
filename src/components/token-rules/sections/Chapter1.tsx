import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter1 = () => {
  return (
    <TokenRulesSection title="第1章 総則">
      <TokenRulesArticle title="第1条（目的）">
        <p className="mb-4">
          本規程は、JJFA合同会社（以下「当会社」）が発行するトークン（以下「トークン」という）の設計、発行、管理、利用、及びガバナンスプロセスを定めることで、透明性、公平性、セキュリティ、持続可能性を確保し、コミュニティ全体の利益最大化を図ることを目的とする。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第2条（トークンの種類と機能）">
        <ol className="list-decimal pl-6 mb-4">
          <li>JJFAメンバートークン（JJFA Member Token）
            <ul className="list-disc pl-6 mt-2">
              <li>当会社の会員資格を証するデジタル資産。</li>
              <li>主な機能と権利：
                <ol className="list-decimal pl-6">
                  <li>利益配分権：事業利益を保有割合に応じて分配する権利。</li>
                  <li>議決権：DAO総会での重要事項に投票する権利。</li>
                  <li>特典利用権：会員専用イベントや限定サービスへの優先参加権。</li>
                </ol>
              </li>
              <li>トークン譲渡に伴い会員資格が移転する。</li>
            </ul>
          </li>
          <li>ガバナンストークン（Governance Token）
            <ul className="list-disc pl-6 mt-2">
              <li>DAO内での意思決定参加を目的としたデジタル資産。</li>
              <li>主な機能と権利：
                <ol className="list-decimal pl-6">
                  <li>提案権：新規プロジェクトや改善案をDAO総会に提案する権利。</li>
                  <li>投票権：提案に関する意思決定への参加権。</li>
                  <li>報酬受領権：DAO活動への貢献に基づきインセンティブを受領する権利。</li>
                </ol>
              </li>
            </ul>
          </li>
          <li>JJFAトークン（JJFA Utility Token）
            <ul className="list-disc pl-6 mt-2">
              <li>プラットフォーム内での取引や支払いに使用するユーティリティトークン。</li>
              <li>主な機能と用途：
                <ol className="list-decimal pl-6">
                  <li>大会エントリー費の支払い。</li>
                  <li>道場利用料の支払い。</li>
                  <li>コミュニティ内での商品やサービスの購入。</li>
                  <li>コンテンツクリエイターへのチップ送付。</li>
                </ol>
              </li>
              <li>プラットフォーム内での活動に応じて獲得可能。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第3条（トークンの基本設計）">
        <ol className="list-decimal pl-6 mb-4">
          <li>トークンはEthereumまたはPolygonなど、セキュリティと拡張性に優れたブロックチェーンネットワーク上で発行される。</li>
          <li>トークンの技術仕様（例：スマートコントラクトコード、発行履歴）はオープンソースで公開し、保有者が透明性を確認できる環境を提供する。</li>
          <li>本トークンは、金融商品取引法その他の関連法令に準拠し、適法に設計・運用される。</li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};