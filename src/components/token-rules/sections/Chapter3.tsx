import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter3 = () => {
  return (
    <TokenRulesSection title="第3章 権利内容と行使">
      <TokenRulesArticle title="第4条（MASTER NFTの権利）">
        <ol className="list-decimal pl-6 mb-4">
          <li>ガバナンス権
            <ul className="list-disc pl-6 mt-2">
              <li>議決権：1トークン1票の投票権</li>
              <li>拒否権：特定議案に対する拒否権（NFT保有数が全体の33%以上で行使可）</li>
              <li>基本提案権：1個以上保有で提案権を行使可能</li>
              <li>重要提案権：NFT保有数が全体の3%以上で特定の重要事項について提案可</li>
            </ul>
          </li>
          <li>経済的権利
            <ul className="list-disc pl-6 mt-2">
              <li>収益分配請求権</li>
              <li>プレミアムイベントや特別イベント参加権</li>
              <li>特定サービスへの割引（例：大会参加費用、コンテンツ購入など）</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第5条（VOTE Tokenの権利）">
        <ol className="list-decimal pl-6 mb-4">
          <li>ガバナンス権
            <ul className="list-disc pl-6 mt-2">
              <li>日常的な運営についての投票権</li>
              <li>コミュニティにおける提案権</li>
            </ul>
          </li>
          <li>経済的権利
            <ul className="list-disc pl-6 mt-2">
              <li>ステーキング報酬獲得（トークン預け入れによる利息）</li>
              <li>プラットフォーム手数料の還元分</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第6条（BJJ Tokenの用途）">
        <ol className="list-decimal pl-6 mb-4">
          <li>支払い機能
            <ul className="list-disc pl-6 mt-2">
              <li>大会エントリー費：10%の割引</li>
              <li>道場利用料：5%の割引</li>
              <li>柔術コンテンツのデジタル購入費用</li>
              <li>各種イベント参加費</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};