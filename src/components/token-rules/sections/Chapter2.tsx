import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter2 = () => {
  return (
    <TokenRulesSection title="第2章 トークンの発行・管理">
      <TokenRulesArticle title="第3条（発行計画）">
        <ol className="list-decimal pl-6 mb-4">
          <li>MASTER NFT
            <ul className="list-disc pl-6 mt-2">
              <li>総発行上限：1,000個</li>
              <li>初期発行：100個（2024年11月）</li>
              <li>初期配布内訳：
                <ul className="list-disc pl-6">
                  <li>コアチーム：25個</li>
                  <li>アドバイザー：15個</li>
                  <li>パートナー道場：20個</li>
                  <li>コミュニティ貢献者：20個</li>
                  <li>戦略的リザーブ：20個</li>
                </ul>
              </li>
              <li>段階的追加発行：
                <ul className="list-disc pl-6">
                  <li>2024年Q4：200個</li>
                  <li>2025年Q1：300個</li>
                  <li>2025年Q2：400個</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>VOTE Token
            <ul className="list-disc pl-6 mt-2">
              <li>総発行数：100,000,000 VOTE</li>
              <li>配布計画：
                <ul className="list-disc pl-6">
                  <li>コミュニティへの報酬：50%</li>
                  <li>開発・運営費用：20%</li>
                  <li>広報・マーケティング：15%</li>
                  <li>備蓄（リザーブ）：10%</li>
                  <li>法務および監査：5%</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>BJJ Token
            <ul className="list-disc pl-6 mt-2">
              <li>総発行数：1,000,000,000 BJJ</li>
              <li>初期価格：1 BJJ = 100円</li>
              <li>価格安定化メカニズムを搭載し、価格の安定を保つ</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};