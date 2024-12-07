import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter2 = () => {
  return (
    <OperatingRulesSection id="organization" title="第2章 運営体制">
      <OperatingRulesArticle title="第4条（運営組織の構成）">
        <ol className="list-decimal pl-6 mb-4">
          <li>DAO総会：
            <ul className="list-disc pl-6 mt-2">
              <li>役割：コミュニティの最高意思決定機関。保有トークンによる投票で方針を決定します。</li>
              <li>決定事項の例：トークン総発行量の変更、新規プロジェクトの採否、運営規程の改定。</li>
              <li>開催頻度：原則として四半期ごと。必要に応じて臨時開催も行います。</li>
              <li>議事録公開：総会終了後7日以内に公式プラットフォームで公開します。</li>
            </ul>
          </li>
          <li className="mt-4">運営チーム：
            <p className="mt-2">DAO総会で決まった方針を現実に動かす専門チームで構成されます。</p>
            <ul className="list-disc pl-6 mt-2">
              <li>技術チーム：スマートコントラクトの維持管理、不具合対応、外部セキュリティ監査依頼など。</li>
              <li>コミュニティチーム：提案受付、トークン保有者間の意見調整、SNSや公式サイトでの情報発信。</li>
              <li>財務チーム：予算編成、利益配分計画の作成と実行、収支報告。</li>
              <li>法務チーム：規定改定案や運営方針が法令や規制に適合しているかを確認。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第5条（責任と権限の分担）">
        <ul className="list-disc pl-6 mb-4">
          <li>DAO総会：
            <ul className="list-disc pl-6 mt-2">
              <li>責任：コミュニティの重要方針や大規模変更を審議し、方向性を決定する。</li>
              <li>権限：提案採択、新プロジェクトの承認、規程改定の承認など。</li>
            </ul>
          </li>
          <li className="mt-4">運営チーム：
            <ul className="list-disc pl-6 mt-2">
              <li>責任：DAO総会で決まったことを実行に移し、日々の運営を円滑に進める。</li>
              <li>権限：日常業務の実行、トークン管理、不正対応など、総会で定められた範囲内での独自判断。</li>
            </ul>
          </li>
        </ul>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};