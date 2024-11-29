import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Trophy, Star, Target, Award } from "lucide-react";

export const Rankings = () => {
  return (
    <RuleSection id="rankings" title="ランキングシステム" sectionNumber="13">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            ポイント計算方法
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="大会規模による配点"
              description="大会の規模や重要度に応じて、獲得できるポイントが変動します。"
              ruleNumber="13.1"
            />
            <RuleItem
              title="順位によるポイント"
              description="1位：100ポイント、2位：70ポイント、3位：50ポイント、4位：30ポイント"
              ruleNumber="13.2"
            />
            <RuleItem
              title="参加ポイント"
              description="大会参加者には基本的に10ポイントが付与されます。"
              ruleNumber="13.3"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />
            ランキングの更新
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="更新タイミング"
              description="大会終了後、1週間以内にランキングを更新します。"
              ruleNumber="13.4"
            />
            <RuleItem
              title="ランク付けの基準"
              description="ポイントが同じ場合は、過去の大会での成績や参加状況を考慮します。"
              ruleNumber="13.5"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-yellow-500" />
            パフォーマンス評価
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="パフォーマンス分析"
              description="各選手の試合ごとのパフォーマンスを分析し、フィードバックを提供します。"
              ruleNumber="13.6"
            />
            <RuleItem
              title="目標設定サポート"
              description="選手が自身の成長を促進するための目標設定をサポートします。"
              ruleNumber="13.7"
            />
          </div>
        </div>
      </div>
    </RuleSection>
  );
};
