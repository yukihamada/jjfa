import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Recycle, TreePine, Sprout } from "lucide-react";

export const Sustainability = () => {
  return (
    <RuleSection id="sustainability" title="持続可能性への取り組み" sectionNumber="23">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
          <CardHeader>
            <Leaf className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle>環境配慮型運営</CardTitle>
            <RuleItem
              title="環境負荷削減"
              description="大会運営における環境負荷を最小限に抑え、持続可能な大会運営を実現します。"
              ruleNumber="8.1"
            />
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
          <CardHeader>
            <Recycle className="w-12 h-12 text-emerald-600 mb-4" />
            <CardTitle>デジタル化推進</CardTitle>
            <RuleItem
              title="ペーパーレス化"
              description="ペーパーレス化やデジタルチケッティングの導入により、環境負荷を削減します。"
              ruleNumber="8.2"
            />
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
          <CardHeader>
            <TreePine className="w-12 h-12 text-green-700 mb-4" />
            <CardTitle>エコフレンドリーな用具</CardTitle>
            <RuleItem
              title="環境配慮製品"
              description="環境に配慮した柔術衣や設備の使用を推進します。"
              ruleNumber="8.3"
            />
          </CardHeader>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
          <CardHeader>
            <Sprout className="w-12 h-12 text-emerald-500 mb-4" />
            <CardTitle>カーボンオフセット</CardTitle>
            <RuleItem
              title="環境貢献"
              description="大会運営に伴う環境負荷を相殺する取り組みを実施します。"
              ruleNumber="8.4"
            />
          </CardHeader>
        </Card>
      </div>
    </RuleSection>
  );
};
