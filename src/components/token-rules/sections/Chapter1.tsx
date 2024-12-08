import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter1 = () => {
  return (
    <TokenRulesSection title="第1章 総則">
      <TokenRulesArticle title="第1条（目的）">
        <p className="mb-4">
          この規程は、JJFA合同会社（以下「当社」）が発行する「トークン」を使って、柔術コミュニティ（道場や大会、練習者、サポーター）をグローバルに発展させるための基本ルールです。
          私たちは、このルールにより誰もが安心して柔術を始め、続け、楽しめる仕組みをつくります。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第2条（トークンの種類）">
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-4">JJFAメンバートークン（社員権トークン）：
            <ul className="list-disc pl-6 mt-2">
              <li>柔術コミュニティを支える「社員」としての資格を表します。</li>
              <li>このトークンがあれば、事業利益の分配や、大切な意思決定への投票、限定イベント（特別セミナーや有名師範の講習会）への優先参加が可能になり、柔術界に深く関わることができます。</li>
            </ul>
          </li>
          <li className="mb-4">ガバナンストークン：
            <ul className="list-disc pl-6 mt-2">
              <li>柔術コミュニティ全体の方針決定（DAO）に参加するためのトークンです。</li>
              <li>大会の新企画提案、コミュニティ支援策の発案など、あなたのアイデアが柔術界の未来を形作ります。</li>
              <li>創設者2名は、それぞれガバナンストークン総量の10%を初期保有しますが、すぐ売ったりできないロックアップ期間を設けることで、長期的なコミットメントを示します。</li>
            </ul>
          </li>
          <li>JJFAトークン（ユーティリティトークン）：
            <ul className="list-disc pl-6 mt-2">
              <li>柔術大会の参加費や道場の利用料を支払ったり、コミュニティ内でコーチング動画やグッズを購入するのに使える実用的なトークンです。</li>
              <li>柔術愛好家が気軽に道場やイベントに参加し、柔術の魅力を体験しやすくなります。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第3条（法的な位置づけ）">
        <p className="mb-4">
          これらのトークンは株式や証券ではなく、あくまで柔術コミュニティの運営や参加をサポートする「道具」です。
          当社とDAOは日本の法律を守り、安心・安全な運営を心がけます。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第4条（リスクや責任について）">
        <p className="mb-4">
          トークンには値段の変動やハッキングのリスクがあります。
          当社はトークン価値を保証しませんが、あなたのウォレットを安全に管理したり、税金などを自分できちんと処理することで、安全に参加することが可能です。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};