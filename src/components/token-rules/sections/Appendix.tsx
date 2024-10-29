import { TokenRulesSection } from "../TokenRulesSection";

export const Appendix = () => {
  return (
    <TokenRulesSection title="附則">
      <ol className="list-decimal pl-6 mb-4">
        <li>本規程は2024年11月1日から施行されます。</li>
        <li>必要な細則はDAO総会での承認を経て定めるものとします。</li>
        <li>初期設定：
          <ul className="list-disc pl-6 mt-2">
            <li>投票期間：7日間</li>
            <li>クーリングオフ期間（投票後の熟考期間）：24時間</li>
            <li>最低投票率：51%</li>
            <li>基本提案権：MASTER NFT 1個以上保有</li>
            <li>重要提案権：MASTER NFT 3%以上保有</li>
          </ul>
        </li>
      </ol>
    </TokenRulesSection>
  );
};