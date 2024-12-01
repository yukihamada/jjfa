import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter6 = () => {
  return (
    <OperatingRulesSection title="第6章 附則">
      <OperatingRulesArticle title="第11条（規程改定の手続き）">
        <ol className="list-decimal pl-6 mb-4">
          <li>規程改定案はDAO総会での特別決議によって承認される。</li>
          <li>改定内容は即時施行され、公式プラットフォームに公開する。</li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第12条（施行日）">
        <p>本規程は、2024年●月●日より施行する。</p>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};