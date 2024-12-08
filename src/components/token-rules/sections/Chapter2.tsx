import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter2 = () => {
  return (
    <TokenRulesSection title="第2章 トークンの発行・配分">
      <TokenRulesArticle title="第5条（発行総量と変更手続き）">
        <ul className="list-disc pl-6 mb-4">
          <li>社員権トークンは最大10,000枚。増減にはコミュニティ投票（特別決議）が必要。</li>
          <li>ガバナンストークンは年3～5%程度の増加に制限し、都度承認を得ることで勝手にインフレさせません。</li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第6条（初期アロケーションの具体例）">
        <ul className="list-disc pl-6 mb-4">
          <li>社員権トークン：
            <ul className="list-disc pl-6 mt-2">
              <li>設立時出資者、長期的な柔術貢献者（例：無償で技術指導動画を提供した黒帯、道場開設サポートをした有志）へ配布。</li>
            </ul>
          </li>
          <li>ガバナンストークン：
            <ul className="list-disc pl-6 mt-2">
              <li>創設者A・B：各10%（ロックアップ6ヶ月、その後2年かけて段階的解除）。</li>
              <li>運営チーム・初期貢献者（創設者以外）：15%以内。</li>
              <li>初期参加者・コミュニティ貢献メンバー：10%程度（道場情報追加、試合結果データベース整備など簡単な貢献タスクに参加すると獲得）。</li>
              <li>残余分は今後の大会開催報酬、道場開設支援金、指導動画制作費補助などに使うため、必要に応じて分配します。</li>
            </ul>
          </li>
          <li>ユーティリティトークン：
            <ul className="list-disc pl-6 mt-2">
              <li>運営準備金：20%（初心者向け無料体験クラス、地域交流イベント開催費用）</li>
              <li>コミュニティリワードプール：50%（良質なテクニック動画提供者、ローカル大会主催者へのインセンティブ）</li>
              <li>市場流通分：30%（新規参加者が簡単にトークンを手に入れて練習や大会に参加しやすくするため）</li>
            </ul>
          </li>
        </ul>
      </TokenRulesArticle>

      <TokenRulesArticle title="第7条（技術基盤）">
        <p className="mb-4">
          有名なブロックチェーンを採用し、スマートコントラクトはオープンソース。
          初心者向けチュートリアル（「ウォレットの作り方」「トークンの受取方」を図解したガイド）を準備します。
        </p>
      </TokenRulesArticle>

      <TokenRulesArticle title="第8条（セキュリティ）">
        <p className="mb-4">
          年次監査でセキュリティ確保。
          万が一ウォレットを紛失しても、本人確認とコミュニティ投票で救済措置可能。
          ハッキング発生時は即対策、ユーザーガイドラインで「安全なウォレット管理法」も提供。
        </p>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};