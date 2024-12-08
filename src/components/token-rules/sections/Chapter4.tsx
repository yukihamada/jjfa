import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter4 = () => {
  return (
    <TokenRulesSection title="第4章 意思決定の仕組み（DAO）と緊急時対応">
      <TokenRulesArticle title="第12条（DAOで決める）">
        <ul className="list-disc pl-6 mb-4">
          <li>重大な変更（トークン総量、重要規程改定、会社解散など）は特別決議（3分の2以上賛成）が必要。</li>
          <li>日常的なこと（大会予算、イベント企画）は過半数の賛成でOK。</li>
          <li>すべて結果はすぐに公開され、誰もが確認できるので不信感が生まれにくい。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第13条（不正防止）">
        <p className="mb-4">
          特定の人がトークンを買い占めて不正な意思決定をしようとすれば、投票権に上限をかけたり、そのウォレットを一時的に制限する対策を講じます。
          これで一部の人が柔術界を私物化しないようにします。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第14条（紛争や緊急事態）">
        <ul className="list-disc pl-6 mb-4">
          <li>意見が対立したときはまずDAO内で話し合い、それでもダメなら最終的には日本の裁判所に委ねます。</li>
          <li>ハッキングやシステムトラブル、法令変更など緊急時は「緊急動議」で素早く対応し、柔術家たちが困らないように最善策を取ります。</li>
        </ul>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};