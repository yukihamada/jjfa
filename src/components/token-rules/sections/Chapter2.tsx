import { TokenRulesSection } from "../TokenRulesSection";
import { TokenRulesArticle } from "../TokenRulesArticle";

export const Chapter2 = () => {
  return (
    <TokenRulesSection title="第2章 トークンの発行と管理">
      <TokenRulesArticle title="第4条（トークン発行総量と方針）">
        <ol className="list-decimal pl-6 mb-4">
          <li>トークン発行総量は以下の通り制限する：
            <ul className="list-disc pl-6 mt-2">
              <li>社員権トークン：最大発行総数10,000トークン（変更には特別決議を要する）。</li>
              <li>ガバナンストークン：年間インフレ率は3～5%以内とし、追加発行はDAO総会で承認を必要とする。</li>
            </ul>
          </li>
          <li>発行済トークンの明細は公式ウェブサイトにリアルタイムで公開する。</li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第5条（配分基準と取得方法）">
        <ol className="list-decimal pl-6 mb-4">
          <li>社員権トークン
            <ul className="list-disc pl-6 mt-2">
              <li>設立時の出資額10万円につき1トークンを初期配分する。</li>
              <li>柔術コミュニティへの特別貢献が認められた者に追加付与される。</li>
            </ul>
          </li>
          <li>ガバナンストークン
            <ul className="list-disc pl-6 mt-2">
              <li>プラットフォーム活動（例：貢献度、DAOプロジェクト、バグ報告）に基づき報酬として配布される。</li>
              <li>柔術イベントや教育プログラムへの参加を通じて取得可能。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>

      <TokenRulesArticle title="第6条（トークン管理体制）">
        <ol className="list-decimal pl-6 mb-4">
          <li>トークンの発行、譲渡、停止、再発行はすべてスマートコントラクトにより自動化され、ブロックチェーン上に記録される。</li>
          <li>セキュリティ確保のため、以下の体制を整備する：
            <ul className="list-disc pl-6 mt-2">
              <li>第三者機関による年次セキュリティ監査：スマートコントラクトとシステムの安全性を保証。</li>
              <li>不正利用防止システム：リアルタイム監視と自動アラート機能。</li>
              <li>トークン紛失時の対応ポリシー：本人確認後の再発行手続き。</li>
            </ul>
          </li>
        </ol>
      </TokenRulesArticle>
    </TokenRulesSection>
  );
};