import { team } from './sections/team';
import { token } from './sections/token';
import { events } from './sections/events';

export default {
  nav: {
    home: "トップページ",
    community: "コミュニティ",
    benefits: "柔術の魅力",
    whitepaper: "ホワイトペーパー",
    contact: "お問い合わせ"
  },
  hero: {
    title: "JJFA - 柔術 for ALL",
    subtitle: "全ての人々に柔術の魅力を届ける",
    joinCommunity: "コミュニティに参加",
    whitepaper: "ホワイトペーパー"
  },
  mission: {
    title: "ミッション",
    tournament: {
      title: "JiuFight トーナメント",
      description: "全てのレベルの選手が参加できる柔術トーナメント"
    },
    community: {
      title: "コミュニティ",
      description: "互いに学び合い、高め合うプラットフォーム"
    },
    education: {
      title: "教育コンテンツ",
      description: "レベル別の技術解説と質疑応答"
    },
    global: {
      title: "グローバル展開",
      description: "国際的な交流と柔術の普及"
    }
  },
  team: team.ja,
  token: token.ja,
  events: events.ja,
  contact: {
    title: "お問い合わせ",
    email: "メールアドレス: info@jjforall.com",
    address: "〒102-0074 東京都千代田区九段南1-6-5 九段会館テラス2F"
  }
};