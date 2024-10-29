import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter1 = () => {
  return (
    <TokenRulesSection title="第1章 総則">
      <TokenRulesArticle title="第1条（目的）">
        <ol className="list-decimal pl-6 mb-4">
          <li>本規程は、Jiu-Jitsu For All DAO（以下「JJFA」という）が発行するトークンの種類や役割、発行と管理の方法について定め、以下を目的とします：
            <ul className="list-disc pl-6 mt-2">
              <li>柔術の普及促進と参加者へのモチベーション向上</li>
              <li>公正で透明なガバナンス（意思決定のルール）実現</li>
              <li>トークン保有者の権利保護と参加者利益の最大化</li>
              <li>持続可能で健全なトークンエコノミー（トークンの流通を通じた経済圏）の創出</li>
              <li>活気と協力があるコミュニティの発展</li>
            </ul>
          </li>
          <li>本規程の運用においては、以下の原則を重視します：
            <ul className="list-disc pl-6 mt-2">
              <li>公平性：すべてのステークホルダーが平等に扱われるべき</li>
              <li>透明性：全ての重要な情報は適切なタイミングで共有されること</li>
              <li>説明責任：意思決定の流れを明確にし、メンバーに説明する義務</li>
              <li>持続可能性：JJFAの長期的な発展とメンバーへのメリットを重視</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第2条（定義）">
        <p>本規程における用語は、以下のとおりとします：</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>「MASTER NFT」
            <ul className="list-disc pl-6 mt-2">
              <li>分類：NFT（非代替性トークン）：唯一無二のデジタル資産</li>
              <li>規格：ERC-721：Ethereumブロックチェーン上のNFT標準</li>
              <li>機能：
                <ul className="list-disc pl-6">
                  <li>1票＝1トークンの投票権（ガバナンス参加権）</li>
                  <li>JJFAから得られる収益の分配請求権</li>
                  <li>提案権および重要な提案に関する議決権</li>
                  <li>特別イベントへの参加権</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>「VOTE Token」
            <ul className="list-disc pl-6 mt-2">
              <li>分類：代替性トークン：同じ価値のトークン同士を交換可能</li>
              <li>規格：ERC-20：Ethereumブロックチェーン上の標準トークン</li>
              <li>機能：
                <ul className="list-disc pl-6">
                  <li>JJFAの日常運営に関する投票権</li>
                  <li>トークンを預けることで報酬を得る「ステーキング」機能</li>
                  <li>提案権（運営への提案）</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>「BJJ Token」
            <ul className="list-disc pl-6 mt-2">
              <li>分類：代替性トークン</li>
              <li>規格：ERC-20</li>
              <li>機能：大会やイベントのエントリー費、道場利用料、柔術に関するデジタルコンテンツの購入</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};