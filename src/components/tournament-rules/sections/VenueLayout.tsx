import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { MapPin, LayoutGrid, Building, Table, User, Trophy, Weight, Stethoscope } from "lucide-react";

export const VenueLayout = () => {
  return (
    <RuleSection id="venue-layout" title="会場レイアウト" sectionNumber="15">
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Building className="w-6 h-6 text-blue-500" />
            基本レイアウト要件
          </h3>
          <p className="text-slate-600 mb-4">
            JJFA公認大会の会場は、以下の要素を適切に配置し、選手と観客の安全性と利便性を確保する必要があります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <LayoutGrid className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">試合エリア</h4>
                <p className="text-sm text-slate-600">最低サイズ：6m×6m（36㎡）、推奨サイズ：8m×8m（64㎡）。各試合場は番号で識別。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Table className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">スコアテーブル</h4>
                <p className="text-sm text-slate-600">各試合場に配置され、スコアボードまたはモニターを完備。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <User className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">ウォームアップエリア</h4>
                <p className="text-sm text-slate-600">試合前の選手専用のウォーミングアップスペース。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Weight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">計量・検査エリア</h4>
                <p className="text-sm text-slate-600">公式計量と道着チェックを行うスペース。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">メインテーブル</h4>
                <p className="text-sm text-slate-600">大会運営の中枢。トーナメント進行管理を行う。</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Trophy className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">表彰エリア</h4>
                <p className="text-sm text-slate-600">3段の表彰台を設置。背景には大会名とスポンサーを表示。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-blue-500" />
            安全管理体制
          </h3>
          <div className="space-y-4">
            <p className="text-slate-600">
              大会運営には以下のスタッフが配置され、安全で円滑な運営を確保します：
            </p>
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              <li>大会コーディネーター（全体の統括と非倫理的行為への対応）</li>
              <li>審判団（主審、副審）</li>
              <li>タイムキーパー</li>
              <li>ドクター・医療スタッフ</li>
              <li>セキュリティスタッフ</li>
              <li>検査官（計量・道着チェック）</li>
            </ul>
            <p className="text-slate-600 mt-4">
              特に医療エリアは、全ての試合場から容易にアクセスできる場所に設置し、緊急時に迅速な対応ができる体制を整えます。
            </p>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};
