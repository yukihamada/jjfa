import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter1 = () => {
  return (
    <TokenRulesSection title="第1章 総則">
      <TokenRulesArticle title="第1条（目的）">
        <ol className="list-decimal pl-6 mb-4">
          <li>本規程は、合同会社JJFA（以下「当会社」という）が発行するトークンの種類、性質、発行方法、管理方法等について定め、以下の実現を目的とする。
            <ul className="list-disc pl-6 mt-2">
              <li>柔術の普及促進に向けた効果的なインセンティブ設計</li>
              <li>透明で民主的なガバナンスの実現</li>
              <li>トークン保有者の権利保護</li>
              <li>健全なトークンエコノミーの構築</li>
              <li>コミュニティの持続的な発展</li>
            </ul>
          </li>
          <li>本規程の解釈・運用にあたっては、以下の原則を重視する。
            <ul className="list-disc pl-6 mt-2">
              <li>公平性：全てのステークホルダーの平等な取扱い</li>
              <li>透明性：全ての重要情報の適時適切な開示</li>
              <li>説明責任：意思決定プロセスの明確化</li>
              <li>持続可能性：長期的な発展を考慮した設計</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第2条（定義）">
        <p>本規程において使用する用語の定義は、以下の通りとする。</p>
        <ol className="list-decimal pl-6 mb-4">
          <li>「社員権トークン（JJFA-MEMBER）」
            <ul className="list-disc pl-6 mt-2">
              <li>分類：非代替性トークン（NFT）</li>
              <li>規格：ERC-721</li>
              <li>コントラクトアドレス：[アドレスを記載]</li>
              <li>主な機能：
                <ul className="list-disc pl-6">
                  <li>議決権（1トークン＝1票）</li>
                  <li>配当請求権（出資額上限）</li>
                  <li>残余財産分配請求権（出資額上限）</li>
                  <li>新規事業提案権</li>
                </ul>
              </li>
            </ul>
          </li>
          {/* ... 他のトークン定義 */}
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};