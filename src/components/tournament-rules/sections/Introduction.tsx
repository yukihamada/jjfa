import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Info, Target } from "lucide-react";

export const Introduction = () => {
  return (
    <RuleSection id="introduction" title="はじめに">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Info className="w-6 h-6 text-blue-500" />
            JJFAの理念と目的
          </h3>
          <p className="text-slate-600">
            柔術をすべての人に身近なものとし、コミュニティの持続可能な成長と公正な価値分配を目指します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-500" />
            JiuFightのコンセプト
          </h3>
          <p className="text-slate-600">
            柔術の新時代を切り開く、技術と競技精神を重視した大会です。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};