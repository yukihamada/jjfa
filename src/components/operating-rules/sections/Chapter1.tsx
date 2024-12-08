import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";
import { Link } from "react-router-dom";

export const Chapter1 = () => {
  return (
    <OperatingRulesSection id="purpose" title="第1章 総則">
      <OperatingRulesArticle title="第1条（目的）">
        <p>この運営規程は、JJFA合同会社（以下「当社」）が発行・運営するトークンおよびDAO（分散型自律組織）の仕組みを円滑、公正、透明なものとし、柔術コミュニティ全体が安心して参加できる環境をつくることを目的とします。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第2条（適用範囲）">
        <p>この規程は、当社が発行する以下のトークンおよび、それらを用いたDAO活動すべてに適用されます。</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>JJFAメンバートークン：当社の社員資格を示すトークン</li>
          <li>JJFAガバナンストークン：DAO内での投票権を持つトークン</li>
          <li>JJFAトークン：大会参加費やプラットフォーム内支払いに用いるユーティリティトークン</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第3条（用語定義）">
        <ul className="list-disc pl-6 mb-4">
          <li>「提案」とは、コミュニティや運営チームがDAO総会に提出するプロジェクト計画や改善策を指します。</li>
          <li>「スマートコントラクト」とは、ブロックチェーン上で動く自動プログラムで、トークン管理・投票などを改ざん不可能な形で実行します。</li>
          <li>「公式プラットフォーム」とは、提案閲覧・投票・報告確認ができる公式サイトやWebアプリを指します。</li>
          <li>「JJFAエコシステム」とは、柔術を軸にした当社提供のサービス・コミュニティ全体を指します。</li>
        </ul>
        <div className="mt-4 text-sm text-slate-600">
          <p>トークンに関する詳細な技術仕様や管理手順は<Link to="/token-rules" className="text-blue-600 hover:underline">トークン規程</Link>を参照してください。</p>
        </div>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第4条（準拠法および法的管轄）">
        <p>本規程およびDAO活動は、日本国の法令に準拠します。万一紛争が生じた場合は、日本の管轄裁判所を最終的な解決手段とします。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};