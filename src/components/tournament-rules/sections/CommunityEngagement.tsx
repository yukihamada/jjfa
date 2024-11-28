import { RuleSection } from "../RuleSection";
import { RuleItem } from "../RuleItem";

export const CommunityEngagement = () => {
  return (
    <RuleSection id="community-engagement" title="コミュニティ参加">
      <RuleItem
        title="オープンガバナンス"
        description="ルール改定やトーナメント運営に関する意思決定プロセスを透明化し、コミュニティの参加を促進します。"
      />
      <RuleItem
        title="地域活性化プログラム"
        description="地域の柔術教室や大会の支援を通じて、草の根レベルでの普及を推進します。"
      />
      <RuleItem
        title="教育プログラム"
        description="子供から大人まで、年齢や経験に応じた教育プログラムを提供します。"
      />
      <RuleItem
        title="社会貢献活動"
        description="柔術を通じた社会貢献活動を推進し、コミュニティの価値向上を図ります。"
      />
    </RuleSection>
  );
};