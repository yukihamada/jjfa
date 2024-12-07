import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";
import { Link } from "react-router-dom";

export const Chapter1 = () => {
  return (
    <OperatingRulesSection id="purpose" title="第1章 総則">
      <OperatingRulesArticle title="第1条（目的）">
        <p>この運営規程は、JJFA合同会社（以下「当社」）が発行する各種トークンと、DAO（分散型自律組織）の仕組みを円滑かつ公正に運営するための基本ルールです。</p>
        <p>私たちはこの規程に基づき、</p>
        <ul className="list-disc pl-6 mb-4">
          <li>トークン保有者（コミュニティ参加者）が安心して活動できる場をつくる</li>
          <li>決定プロセスの透明性と公正性を確保する</li>
          <li>運営を効率化し、柔軟な対応を可能にする</li>
          <li>システム上のセキュリティを強化して不正を防止する</li>
        </ul>
        <p>ことを目指しています。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第2条（適用範囲）">
        <p>この規程は、当社が発行する以下のトークンと、それらを活用したDAO活動すべてに適用されます。</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>JJFAメンバートークン（JJFA Member Token）：当社の「社員」としての資格を示すトークン。</li>
          <li>JJFAガバナンストークン（JJFA Governance Token）：DAO内での投票権をもつトークン。</li>
          <li>JJFAトークン（JJFA Token）：大会参加費やプラットフォーム上の支払いに使えるユーティリティトークン。</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第3条（用語の定義）">
        <ul className="list-disc pl-6 mb-4">
          <li>提案：トークン保有者や運営チームがDAO総会に提出する「改善策」「新プロジェクト」「予算案」などの計画やアイデア。</li>
          <li>スマートコントラクト：ブロックチェーン上で動く自動化されたプログラム。トークン管理や投票が適正に行われ、記録が改ざんされないようにします。</li>
          <li>公式プラットフォーム：提案閲覧、投票実行、報告確認ができる公式サイトやWebアプリ等の総称。</li>
          <li>JJFAエコシステム：柔術を軸にした、当社が提供するオンライン・オフラインのサービスやコミュニティ群。</li>
        </ul>

        <div className="mt-4 text-sm text-slate-600">
          <p>トークンに関する詳細な技術仕様や管理手順は<Link to="/token-rules" className="text-blue-600 hover:underline">トークン規程</Link>を参照してください。</p>
        </div>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};