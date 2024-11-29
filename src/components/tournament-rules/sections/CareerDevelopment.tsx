import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Globe2, Handshake, Trophy } from "lucide-react";

export const CareerDevelopment = () => {
  return (
    <RuleSection id="career-development" title="キャリア開発" sectionNumber="20">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <GraduationCap className="w-12 h-12 text-purple-600 mb-4" />
            <CardTitle>プロフェッショナル育成プログラム</CardTitle>
            <RuleItem
              title="キャリアパス設計"
              description="個々の選手の目標に応じた段階的な成長プランを策定し、技術指導、メンタルトレーニング、栄養管理など総合的なサポートを提供します。"
              ruleNumber="7.1"
            />
            <RuleItem
              title="実践的トレーニング"
              description="トップアスリートによるセミナー、合同練習会、模擬試合などを通じて、実践的な技術向上の機会を提供します。"
              ruleNumber="7.2"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Trophy className="w-12 h-12 text-yellow-600 mb-4" />
            <CardTitle>メディア露出支援</CardTitle>
            <RuleItem
              title="デジタルプレゼンス構築"
              description="SNSマーケティング、動画コンテンツ制作、メディアトレーニングを通じて、選手の個人ブランド確立を支援します。"
              ruleNumber="7.3"
            />
            <RuleItem
              title="メディア連携"
              description="スポーツメディア、地域メディアとの連携を強化し、選手の活動や成果を効果的に発信します。"
              ruleNumber="7.4"
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
              ruleNumber="7.5"
            />
            <RuleItem
              title="国際大会参加支援"
              description="海外大会への参加をサポートし、国際経験を積む機会を創出します。"
              ruleNumber="7.6"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Handshake className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle>引退後支援</CardTitle>
            <RuleItem
              title="指導者育成プログラム"
              description="指導者資格の取得支援、道場経営ノウハウの提供、マーケティング支援など、包括的な独立支援を行います。"
              ruleNumber="7.7"
            />
            <RuleItem
              title="キャリア移行支援"
              description="企業との連携による就職支援、起業支援、学術機関との連携によるキャリア教育を提供します。"
              ruleNumber="7.8"
            />
          </CardHeader>
        </Card>
      </div>
    </RuleSection>
  );
};
