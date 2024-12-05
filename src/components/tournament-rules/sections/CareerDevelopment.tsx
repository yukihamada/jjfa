import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Globe2, Handshake, Trophy } from "lucide-react";

export const CareerDevelopment = () => {
  return (
    <RuleSection id="career-development" title="キャリア開発" sectionNumber="18">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
            <CardTitle>トレーニングプログラム</CardTitle>
            <RuleItem
              title="キャリアパス設計"
              description="個々の選手の目標に応じた段階的な成長プランを策定し、技術指導、メンタルトレーニング、栄養管理など総合的なサポートを提供します。"
              ruleNumber="18.1"
            />
            <RuleItem
              title="実践的トレーニング"
              description="トップアスリートによるセミナー、合同練習会、模擬試合などを通じて、実践的な技術向上の機会を提供します。"
              ruleNumber="18.2"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Trophy className="w-12 h-12 text-yellow-600 mb-4" />
            <CardTitle>レフェリーおよび指導者の育成</CardTitle>
            <RuleItem
              title="レフェリー育成プログラム"
              description="国際基準に基づいた審判技術の向上と、最新のルール解釈に関する継続的な教育を提供します。"
              ruleNumber="18.3"
            />
            <RuleItem
              title="指導者認定制度"
              description="段階的な指導者資格制度を通じて、質の高い指導者の育成と技術の標準化を推進します。"
              ruleNumber="18.4"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Globe2 className="w-12 h-12 text-blue-600 mb-4" />
            <CardTitle>国際交流プログラム</CardTitle>
            <RuleItem
              title="国際練習キャンプ"
              description="年間を通じて世界各国の選手との合同練習キャンプを開催し、技術交流と文化理解を深める機会を提供します。"
              ruleNumber="18.5"
            />
            <RuleItem
              title="国際大会参加支援"
              description="海外大会への参加をサポートし、国際経験を積む機会を創出します。"
              ruleNumber="18.6"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Handshake className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle>キャリア支援</CardTitle>
            <RuleItem
              title="キャリアトランジション"
              description="引退後のキャリア支援として、指導者育成プログラムや関連業界での就職支援を提供します。"
              ruleNumber="18.7"
            />
            <RuleItem
              title="メンタリングプログラム"
              description="経験豊富な指導者や元選手によるメンタリングを通じて、若手選手のキャリア開発をサポートします。"
              ruleNumber="18.8"
            />
          </CardHeader>
        </Card>
      </div>
    </RuleSection>
  );
};