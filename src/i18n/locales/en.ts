import { team } from './sections/team';
import { token } from './sections/token';
import { events } from './sections/events';

export default {
  nav: {
    home: "Home",
    community: "Community",
    benefits: "Benefits",
    whitepaper: "Whitepaper",
    contact: "Contact"
  },
  hero: {
    title: "JJFA - Jiu-jitsu for ALL",
    subtitle: "Bringing the beauty of Jiu-jitsu to everyone",
    joinCommunity: "Join Community",
    whitepaper: "Whitepaper"
  },
  mission: {
    title: "Mission",
    tournament: {
      title: "JiuFight Tournament",
      description: "Jiu-jitsu tournaments for athletes of all levels"
    },
    community: {
      title: "Community",
      description: "A platform where we learn and grow together"
    },
    education: {
      title: "Educational Content",
      description: "Level-based technique explanations and Q&A"
    },
    global: {
      title: "Global Expansion",
      description: "International exchange and promotion of Jiu-jitsu"
    }
  },
  team: team.en,
  token: token.en,
  events: events.en,
  contact: {
    title: "Contact",
    email: "Email: info@jjforall.com",
    address: "2F Kudankai Terrace, 1-6-5 Kudanminami, Chiyoda-ku, Tokyo 102-0074, Japan"
  }
};