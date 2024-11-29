import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Trophy, Medal, Flag, Users, Calculator } from "lucide-react";

export const Rankings = () => {
  return (
    <RuleSection id="rankings" title="ランキングシステム">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-blue-500" />
            個人ランキング
          </h3>
          <div className="space-y-4">
            <p className="text-slate-600">
              JJFAランキングは、トップ選手たちをランク付けするシステムです。JJFA世界選手権は年度最後の大会となります。
            </p>
            <div className="grid gap-4">
              <RuleItem
                title="ランキングの分類"
                description="個人の帯、年齢グループ、及び階級に基づき分類されます。ランキングポイントは帯や年齢カテゴリー間での移行はできません。"
              />
              <RuleItem
                title="ポイント計算（1000人未満の大会）"
                description="1位：7ポイント、2位：3ポイント、3位：1ポイント"
              />
              <RuleItem
                title="ポイント計算（1000人以上の大会）"
                description="1位：14ポイント、2位：6ポイント、3位：2ポイント"
              />
              <RuleItem
                title="世界選手権ポイント（3倍）"
                description="1位：21ポイント、2位：9ポイント、3位：3ポイント"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-green-500" />
            試合数によるボーナスポイント
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">1位のボーナス</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>1試合：×1.0</li>
                <li>2試合：×1.1</li>
                <li>3試合：×1.2</li>
                <li>4試合：×1.4</li>
                <li>5試合：×1.5</li>
                <li>6試合：×1.6</li>
                <li>7試合：×1.7</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">2位のボーナス</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>1試合：×1.0</li>
                <li>2試合：×1.1</li>
                <li>3試合：×1.2</li>
                <li>4試合：×1.4</li>
                <li>5試合：×1.5</li>
                <li>6試合：×1.6</li>
                <li>7試合：×1.7</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">3位のボーナス</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>1試合：×1.0</li>
                <li>2試合：×1.1</li>
                <li>3試合：×1.2</li>
                <li>4試合：×1.4</li>
                <li>5試合：×1.5</li>
                <li>6試合：×1.6</li>
                <li>7試合：×1.7</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Flag className="w-6 h-6 text-purple-500" />
            国別・指導者・チームランキング
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="登録要件"
              description="選手は登録時に国、チーム、指導者を確認する必要があります。確認期限後の変更は認められません。"
            />
            <RuleItem
              title="ポイント計算"
              description="獲得メダル（金、銀、銅）の合計に基づき計算されます。キッズ（4-5歳から14-15歳）と大人（16歳以上）のカテゴリーで別々に集計されます。"
            />
            <RuleItem
              title="同点の場合"
              description="金メダルの数で判定し、それも同数の場合は銀メダル、続いて銅メダルの数で判定します。それでも同点の場合は、最上位の帯のメダル数で決定します。"
            />
          </div>
        </div>
      </div>
    </RuleSection>
  );
};