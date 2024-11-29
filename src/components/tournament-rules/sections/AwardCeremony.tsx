import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Medal, Users, AlertTriangle } from "lucide-react";

export const AwardCeremony = () => {
  return (
    <RuleSection id="award-ceremony" title="表彰式" sectionNumber="2">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Medal className="w-6 h-6 text-yellow-500" />
            表彰式の規則
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="ユニフォーム規定"
              description="選手はJJFA公認のユニフォームで表彰式に出席しなければなりません。"
              ruleNumber="2.1"
            />
            <RuleItem
              title="メダル受け取りの義務"
              description="メダルを獲得した各選手は、表彰式に出席してメダルを自身で受け取る必要があります。正当な理由なく表彰式を欠席した場合、メダルを失う可能性があります。"
              ruleNumber="2.2"
            />
            <RuleItem
              title="表彰台でのマナー"
              description="表彰台では、宗教的、政治的、個人的、商業的な意味を含む無礼または挑発的な表明は禁止されています。特別な理由がない限り、帽子などの頭を覆うものの着用も禁止されています。"
              ruleNumber="2.3"
            />
            <RuleItem
              title="国歌演奏時の礼儀"
              description="優勝者の国歌が演奏される間、全ての選手は起立して敬意を表する必要があります。"
              ruleNumber="2.4"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            失格条件
          </h3>
          <p className="text-slate-600">
            スポーツマンシップに反して表彰式への参加を拒否した選手は、そのカテゴリーの失格となり、チームポイントおよび無差別級への出場資格を失います。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};