import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Brackets, Users, Scale, Award } from "lucide-react";

export const BracketSystem = () => {
  return (
    <RuleSection id="bracket-system" title="ブラケット(組み合わせ)システム">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Brackets className="w-6 h-6 text-blue-500" />
            基本ルール
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="トーナメント方式"
              description="全てのJJFA大会はシングル・エリミネーション方式トーナメントのブラケットシステムで運営されます。"
            />
            <RuleItem
              title="ブラケット作成"
              description="各大会において、ブラケットは大会開始前に作成され、大会当日には変更されません。"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            カテゴリー分け
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="分類基準"
              description="選手は年齢、スキルレベルグループまたは帯、階級、そして性別によって分けられます。"
            />
            <RuleItem
              title="統合ルール"
              description="イベントディレクターとマッチメーカーは試合成立を確実にするために階級を統合させることができます。"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-500" />
            ブラケットの種類
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="オープンブラケット"
              description="5、6、7人の競技者で構成され、不戦勝が含まれます。"
            />
            <RuleItem
              title="クローズドブラケット"
              description="2、4、8、16人の競技者で構成され、不戦勝がありません。"
            />
            <RuleItem
              title="不戦勝ルール"
              description="不戦勝は1回戦でのみ行われ、準決勝戦や決勝戦では行われません。"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            試合識別システム
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="競技者1の識別"
              description="ブラケットの上の競技者は緑及び黄色の帯またはアンクルバンドを着用し、スコアボードでは緑の背景で表示されます。"
            />
            <RuleItem
              title="競技者2の識別"
              description="ブラケットの下の競技者は追加の帯やアンクルバンドを着用せず、スコアボードでは白の背景で表示されます。"
            />
          </div>
        </div>
      </div>
    </RuleSection>
  );
};