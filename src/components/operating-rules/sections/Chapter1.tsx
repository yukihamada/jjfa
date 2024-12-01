import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";
import { Link } from "react-router-dom";

export const Chapter1 = () => {
  return (
    <OperatingRulesSection id="purpose" title="第1章 総則">
      <OperatingRulesArticle title="第1条（目的）">
        <p>本運営規程は、JJFA合同会社（以下「当会社」）が発行するトークンおよびDAO（分散型自律組織）の運営方針を定め、透明性、公平性、効率性、セキュリティを高め、トークン保有者全員が信頼と安心の中でコミュニティ活動を行えるエコシステムを構築することを目的とする。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第2条（適用範囲）">
        <p>本規程は、当会社が発行する以下のトークンおよび関連活動に適用される。</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>JJFAメンバートークン（JJFA Member Token）：社員権を表すトークン</li>
          <li>JJFAガバナンストークン（JJFA Governance Token）：DAO内での投票権を表すトークン</li>
          <li>JJFAトークン（JJFA Token）：プラットフォーム内での支払いに使用するユーティリティトークン</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第3条（用語の定義）">
        <ol className="list-decimal pl-6 mb-4">
          <li>提案：トークン保有者または運営チームがDAO総会に提出する改善案、予算案、または新規プロジェクト案を指す。</li>
          <li>スマートコントラクト：トークン発行・管理および投票プロセスを技術的に実現するためのブロックチェーンプログラム。</li>
          <li>公式プラットフォーム：DAO総会の管理、提案の公開、進捗報告を行うオンラインシステム。</li>
          <li>JJFAエコシステム：当会社が運営する柔術コミュニティプラットフォームおよび関連サービスの総称。</li>
        </ol>
      </OperatingRulesArticle>

      <div className="mt-8 text-sm text-slate-600">
        <p>※トークンに関する詳細な規定は<Link to="/token-rules" className="text-blue-600 hover:underline">トークン規程</Link>をご参照ください。</p>
      </div>
    </OperatingRulesSection>
  );
};