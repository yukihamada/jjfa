import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter2 = () => {
  return (
    <TokenRulesSection title="第2章 トークンの発行・配分方法">
      <TokenRulesArticle title="第5条（発行数と変更）">
        <ul className="list-disc pl-6 mb-4">
          <li>社員権トークンは最大10,000枚まで。増やしたり減らしたりするときは、コミュニティ投票で多数の同意が必要です。</li>
          <li>ガバナンストークンは必要に応じて少しずつ増やせる仕組みですが、ここもDAOでの承認が求められます。</li>
          <li>発行状況はいつでも公式サイトで確認可能で、透明性を確保します。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第6条（初期アロケーション）">
        <ul className="list-disc pl-6 mb-4">
          <li>社員権トークンは設立時の出資者や特別に貢献してきた人たちに配られます。</li>
          <li>ガバナンストークンは：
            <ul className="list-disc pl-6 mt-2">
              <li>創設者A・B：各10%（ただしロックアップ期間あり）</li>
              <li>運営チーム・初期貢献者：15%以内で配分</li>
              <li>初期参加者や貢献者：10%程度を配布</li>
              <li>残りは将来のイベントや新企画に応じて配布</li>
            </ul>
          </li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第7条（ブロックチェーンと透明性）">
        <p className="mb-4">
          トークンは、世界中で使われている安全性の高いブロックチェーン上に発行されます。
          プログラムは公開され、誰でもその仕組みをチェック可能です。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第8条（セキュリティ対策）">
        <p className="mb-4">
          定期的にセキュリティチェックを行い、不正があればすぐに対応します。
          ウォレットをなくした場合も、本人確認とコミュニティの同意があれば救済措置が可能です。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};