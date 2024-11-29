import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const BracketSystem = () => {
  return (
    <RuleSection id="bracket-system" title="ブラケットシステム" sectionNumber="10">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">ブラケット形式の説明</h3>
          <p className="text-slate-600">
            トーナメントはシングルイリミネーション形式で行われ、勝者は次のラウンドに進み、敗者は大会から脱落します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">ラウンド進行</h3>
          <p className="text-slate-600">
            各ラウンドは、試合形式に従って行われ、進行状況はメインテーブルで管理されます。決勝戦では、勝者がチャンピオンとして表彰されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4">決勝戦の設定</h3>
          <p className="text-slate-600">
            決勝戦は、トーナメントの最後の試合で行われ、最終的な勝者が決まります。これにより、全てのチームの戦績を反映した公正な勝者が選ばれます。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};
