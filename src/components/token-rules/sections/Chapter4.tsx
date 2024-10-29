import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter4 = () => {
  return (
    <TokenRulesSection title="第4章 初期配布とロックアップ">
      <TokenRulesArticle title="第7条（初期配布の条件）">
        <ol className="list-decimal pl-6 mb-4">
          <li>コアチーム向け配布条件
            <ul className="list-disc pl-6 mt-2">
              <li>初年度：完全ロック（譲渡不可）</li>
              <li>2年目以降：四半期ごとに25%を解放</li>
              <li>最低1年のコミットメント（活動に専念する義務）</li>
            </ul>
          </li>
          <li>アドバイザー向け配布条件
            <ul className="list-disc pl-6 mt-2">
              <li>初めの6ヶ月間はロック</li>
              <li>その後1年間：毎月均等に解放</li>
              <li>月次ミーティング参加が必須条件</li>
            </ul>
          </li>
          <li>パートナー道場向け配布条件
            <ul className="list-disc pl-6 mt-2">
              <li>最初の3ヶ月間はロック</li>
              <li>その後6ヶ月間で均等に解放</li>
              <li>システムの導入が必須条件</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};