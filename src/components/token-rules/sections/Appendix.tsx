import { TokenRulesSection } from "../TokenRulesSection";

export const Appendix = () => {
  return (
    <TokenRulesSection title="附則">
      <ol className="list-decimal pl-6 mb-4">
        <li>本規程は2024年4月1日から施行する。</li>
        <li>本規程の実施に必要な細則は、業務執行社員が別に定める。</li>
        <li>初期設定値は以下の通りとし、運用状況に応じて見直しを行う。
          <ul className="list-disc pl-6 mt-2">
            <li>投票期間：7日間</li>
            <li>クーリングオフ期間：24時間</li>
            <li>最低投票率：51%</li>
            <li>提案権行使の閾値：総発行量の10%</li>
          </ul>
        </li>
      </ol>
    </TokenRulesSection>
  );
};