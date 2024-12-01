import { OperatingRulesSection } from "../OperatingRulesSection";
import { OperatingRulesArticle } from "../OperatingRulesArticle";

export const Chapter2 = () => {
  return (
    <OperatingRulesSection title="第2章 運営体制">
      <OperatingRulesArticle title="第4条（運営組織の構成）">
        <ol className="list-decimal pl-6 mb-4">
          <li>DAO総会
            <ul className="list-disc pl-6 mt-2">
              <li>役割：最高意思決定機関であり、トークン保有者全員で構成される。</li>
              <li>議題の例：トークンの総発行量変更、新規プロジェクトの採択、規程改定の承認。</li>
              <li>開催頻度：四半期ごと（必要に応じて臨時開催）。</li>
              <li>議事録公開：議事録は総会終了後7日以内に公式プラットフォームで公開する。</li>
            </ul>
          </li>
          <li>運営チーム
            <ul className="list-disc pl-6 mt-2">
              <li>構成と役割：以下の専門チームで構成される。</li>
              <li>技術チーム：スマートコントラクト運用、トークンセキュリティ監視。
                <ul className="list-disc pl-6">
                  <li>例：スマートコントラクトのバグ報告対応、外部監査依頼。</li>
                </ul>
              </li>
              <li>コミュニティチーム：意見収集、保有者間の調整、広報活動。
                <ul className="list-disc pl-6">
                  <li>例：SNSを活用した提案の意見収集キャンペーン。</li>
                </ul>
              </li>
              <li>財務チーム：予算編成、利益配分の管理。
                <ul className="list-disc pl-6">
                  <li>例：トークン配分の進捗報告書の作成と公開。</li>
                </ul>
              </li>
              <li>法務チーム：規程改定案作成、規制遵守確認。
                <ul className="list-disc pl-6">
                  <li>例：各国の暗号資産規制に基づく運営方針の助言。</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>

      <OperatingRulesArticle title="第5条（責任と権限の分担）">
        <ol className="list-decimal pl-6 mb-4">
          <li>DAO総会：
            <ul className="list-disc pl-6 mt-2">
              <li>責任：重要事項の審議・決議。</li>
              <li>権限：提案採択、新規プロジェクトの承認、規程改定の承認。</li>
            </ul>
          </li>
          <li>運営チーム：
            <ul className="list-disc pl-6 mt-2">
              <li>責任：決議内容の実行と進捗管理。</li>
              <li>権限：日常業務の遂行、トークン管理、トラブル対応。</li>
            </ul>
          </li>
        </ol>
      </OperatingRulesArticle>
    </OperatingRulesSection>
  );
};