import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter6 = () => {
  return (
    <OperatingRulesSection id="other" title="第6章 附則">
      <OperatingRulesArticle title="第18条（規程改定手続）">
        <p>規程改定には特別決議が必要です。可決後、改定内容は直ちに適用され、公式プラットフォームで公表します。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第19条（解散・清算手続）">
        <p>プロジェクト終了や会社解散を特別決議で承認した場合、清算手続や残余財産の分配方法などを別途提案し、実行します。清算後も一定期間情報共有とサポート対応を行います。</p>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第20条（施行日）">
        <p>この規程は2024年●月●日より有効とします。</p>
        <p className="mt-4">以上の規程により、JJFAはWeb3技術を活用した公正で透明性の高い運営を行い、柔術コミュニティ全体が安心して参加・成長できるエコシステムを実現します。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};