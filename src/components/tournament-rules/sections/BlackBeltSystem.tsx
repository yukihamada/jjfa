import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Medal } from "lucide-react";

export const BlackBeltSystem = () => {
  return (
    <RuleSection id="black-belt-system" title="黒帯制度">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Medal className="w-5 h-5 text-slate-600" />
            黒帯の基本要件
          </h3>
          <div className="space-y-4">
            <RuleItem
              title="9. 年齢要件"
              description="黒帯を与えられるのは19歳以上の選手のみです。"
            />
            <RuleItem
              title="所属要件"
              description="黒帯証明書の申請には、JJFAに所属している必要があります。"
            />
            <RuleItem
              title="指導者要件"
              description="黒帯の段位を授与されるためには、そのJJFAの正会員であり、JJFA加盟スクールにメインインストラクターまたはアシスタントインストラクターとして登録されている必要があります。"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">黒帯段位システム</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">段位</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">対象年齢</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">最短修了期間</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { rank: "黒帯", age: "19歳以上", period: "前の帯で1年" },
                  { rank: "黒帯初段", age: "22歳以上", period: "前の帯で3年" },
                  { rank: "黒帯二段", age: "25歳以上", period: "前の帯で3年" },
                  { rank: "黒帯三段", age: "28歳以上", period: "前の帯で3年" },
                  { rank: "黒帯四段", age: "33歳以上", period: "前の帯で5年" },
                  { rank: "黒帯五段", age: "38歳以上", period: "前の帯で5年" },
                  { rank: "黒帯六段", age: "43歳以上", period: "前の帯で5年" },
                  { rank: "赤黒帯七段", age: "50歳以上", period: "前の帯で7年" },
                  { rank: "赤黒帯八段", age: "57歳以上", period: "前の帯で7年" },
                  { rank: "赤帯九段", age: "67歳以上", period: "前の帯で10年" },
                  { rank: "赤帯十段", age: "82歳以上", period: "前の帯で10年" },
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.rank}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </RuleSection>
  );
};