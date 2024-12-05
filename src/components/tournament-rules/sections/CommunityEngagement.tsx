import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building, GraduationCap, Heart } from "lucide-react";

export const CommunityEngagement = () => {
  return (
    <RuleSection id="community-engagement" title="コミュニティ参加" sectionNumber="20">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <CardTitle>オープンガバナンス</CardTitle>
            <RuleItem
              title="意思決定プロセス"
              description="ルール改定や大会運営に関する提案をコミュニティから募集し、オープンな議論と投票システムを通じて決定します。"
              ruleNumber="9.1"
            />
            <RuleItem
              title="透明性確保"
              description="意思決定プロセスや財務情報をウェブサイトで公開し、定期的な報告会を開催します。"
              ruleNumber="9.2"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Building className="w-12 h-12 text-purple-600 mb-4" />
            <CardTitle>地域活性化プログラム</CardTitle>
            <RuleItem
              title="道場支援"
              description="新規道場の開設支援、既存道場の運営改善支援、指導者派遣プログラムを実施します。"
              ruleNumber="9.3"
            />
            <RuleItem
              title="地域大会支援"
              description="地域大会の運営ノウハウ提供、機材貸出、広報支援を行い、地域での競技普及を促進します。"
              ruleNumber="9.4"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
            <CardTitle>教育プログラム</CardTitle>
            <RuleItem
              title="年齢別プログラム"
              description="幼児から高齢者まで、各年齢層に適した柔術教育プログラムを開発・提供します。"
              ruleNumber="9.5"
            />
            <RuleItem
              title="段階別カリキュラム"
              description="初心者から上級者まで、体系的な技術習得カリキュラムを提供します。"
              ruleNumber="9.6"
            />
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <Heart className="w-12 h-12 text-red-600 mb-4" />
            <CardTitle>社会貢献活動</CardTitle>
            <RuleItem
              title="地域貢献"
              description="防犯教室、いじめ防止プログラム、高齢者向け健康教室など、柔術を通じた地域社会への貢献活動を展開します。"
              ruleNumber="9.7"
            />
            <RuleItem
              title="チャリティ活動"
              description="チャリティ大会の開催、災害支援活動、環境保護活動など、社会課題解決に向けた取り組みを推進します。"
              ruleNumber="9.8"
            />
          </CardHeader>
        </Card>
      </div>
    </RuleSection>
  );
};
