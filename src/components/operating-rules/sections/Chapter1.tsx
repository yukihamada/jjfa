import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";
import { CommunityGuidelines } from "../../community/CommunityGuidelines";

export const Chapter1 = () => {
  return (
    <OperatingRulesSection id="purpose" title="第1章 総則">
      <CommunityGuidelines />
      <OperatingRulesArticle title="第1条（目的）">
        <p>本運営規程は、JJFA合同会社（以下「当会社」）が発行するトークンおよびDAO（分散型自律組織）の運営方針を定め、透明性、公平性、効率性、セキュリティを高め、トークン保有者全員が信頼と安心の中でコミュニティ活動を行えるエコシステムを構築することを目的とする。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第2条（適用範囲）">
        <p>本規程は、当会社が発行する以下のトークンおよび関連活動に適用される。</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>社員権トークン（Equity Token）</li>
          <li>ガバナンストークン（Governance Token）</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第3条（用語の定義）">
        <ol className="list-decimal pl-6 mb-4">
          <li>提案：トークン保有者または運営チームがDAO総会に提出する改善案、予算案、または新規プロジェクト案を指す。</li>
          <li>スマートコントラクト：トークン発行・管理および投票プロセスを技術的に実現するためのブロックチェーンプログラム。</li>
          <li>公式プラットフォーム：DAO総会の管理、提案の公開、進捗報告を行うオンラインシステム。</li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};