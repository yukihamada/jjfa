import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Languages, Award, Users } from "lucide-react";

export const GlobalStandards = () => {
  return (
    <RuleSection id="global-standards" title="国際標準化">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <CardTitle>国際ルールの統一</CardTitle>
            <RuleItem
              title="国際ルール委員会"
              description="世界各国の柔術団体代表者で構成される委員会を設置し、定期的なルールレビューと更新を行います。"
            />
            <RuleItem
              title="標準化プロセス"
              description="競技ルール、審判基準、大会運営方針の国際標準を策定し、段階的な導入を推進します。"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Languages className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle>多言語対応</CardTitle>
            <RuleItem
              title="公式文書の多言語化"
              description="ルールブック、審判マニュアル、大会規定などを10言語以上に翻訳し、定期的に更新します。"
            />
            <RuleItem
              title="通訳システム"
              description="国際大会における多言語通訳システムの導入と、オンライン研修の多言語対応を実現します。"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Award className="w-12 h-12 text-purple-600 mb-4" />
            <CardTitle>国際認定制度</CardTitle>
            <RuleItem
              title="資格認定システム"
              description="選手、審判、指導者の技能レベルを客観的に評価し、国際的に通用する資格認定を行います。"
            />
            <RuleItem
              title="継続教育"
              description="オンラインプラットフォームを活用した定期的な研修と、技能更新プログラムを提供します。"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Users className="w-12 h-12 text-orange-600 mb-4" />
            <CardTitle>文化的多様性の尊重</CardTitle>
            <RuleItem
              title="文化理解プログラム"
              description="各国の柔術文化や伝統を学ぶワークショップを開催し、相互理解を深めます。"
            />
            <RuleItem
              title="ローカライゼーション"
              description="各地域の文化や習慣に配慮した柔術普及プログラムを展開します。"
            />
          </CardHeader>
        </Card>
      </div>
    </RuleSection>
  );
};