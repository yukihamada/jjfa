import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter3 = () => {
  return (
    <TokenRulesSection title="第3章 トークンの使い方と権利">
      <TokenRulesArticle title="第9条（使えること・できること）">
        <ul className="list-disc pl-6 mb-4">
          <li>社員権トークン：柔術コミュニティの重要な決定に参加でき、利益分配も受けられます。特別なイベントに優先参加できるため、柔術界の中核になれます。</li>
          <li>ガバナンストークン：柔術大会の新ルール提案、地域の道場支援策、教育プログラムの作成など、あなたのアイデアで柔術界を豊かにし、その貢献に応じて報酬も受け取れます。</li>
          <li>ユーティリティトークン：道場での稽古費用、大会エントリー料、指導動画購入など、柔術を学ぶ・楽しむための支払いが簡単に。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第10条（譲渡）">
        <p className="mb-4">
          トークンはブロックチェーン上で自由にやりとりできます。
          社員権トークンを譲れば、その社員資格も次の人に移るので、コミュニティメンバーが入れ替わりながら柔術界を発展させていけます。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第11条（エコシステム外での利用）">
        <p className="mb-4">
          トークンは主にJJFAエコシステム（大会、道場、関連サービス）で使うことを想定しています。
          外部サービスで使う場合、そのサービスの安全性までは保証できません。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};