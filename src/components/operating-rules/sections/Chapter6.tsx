import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter6 = () => {
  return (
    <OperatingRulesSection id="other" title="第6章 附則">
      <OperatingRulesArticle title="第11条（規程改定手続）">
        <p>規程を改定する場合は、DAO総会で特別決議（全投票数の3分の2以上の賛成）が必要です。改定内容は承認後即時に適用され、公式プラットフォームで公表します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第12条（施行日）">
        <p>この規程は2024年●月●日から有効となります。</p>
        <p className="mt-4">以上のルールに従うことで、当社はDAOモデルを通じ、全ての参加者が納得し、理解できる方法で運営を行い、柔術コミュニティが持続的に発展する健全な環境を整えていきます。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};