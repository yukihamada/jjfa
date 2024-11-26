import { nav } from './en/nav';
import { footer } from './en/footer';
import { contact } from './en/contact';
import { benefits } from './en/benefits';
import { services } from './en/services';
import { team } from './en/team';
import { token } from './en/token';
import { comingSoon } from './en/comingSoon';
import { whitepaper } from './en/whitepaper';
import { roadmap } from './en/roadmap';

export default {
  nav,
  footer,
  contact,
  benefits,
  services,
  team,
  token,
  comingSoon,
  whitepaper,
  roadmap,
  hero: {
    title: "JJFA - Jiu-Jitsu for ALL",
    subtitle: "Bringing the beauty of Jiu-Jitsu to everyone",
    joinCommunity: "Join Community",
    whitepaper: "White Paper"
  },
  community: {
    title: "Community",
    joinTitle: "Join Our Community",
    joinSubtitle: "Share the beauty of Jiu-Jitsu in the JJFA community",
    events: {
      title: "Events",
      tournament: {
        title: "Monthly Tournament",
        date: "Every 3rd Saturday",
        description: "Official tournament open to all belts from white to black"
      },
      camp: {
        title: "Hawaii Training Camp",
        date: "February 28 - March 13, 2025",
        description: "Intensive training with world champions"
      },
      seminar: {
        title: "Technical Seminar",
        date: "Every Sunday",
        description: "Learn various techniques through technical seminars"
      },
      openmat: {
        title: "Open Mat",
        date: "Every Saturday",
        description: "Free practice time available"
      }
    },
    benefits: {
      title: "Member Benefits",
      exclusive: {
        title: "Exclusive Content",
        description: "Access to technique videos by top athletes and priority registration for online seminars"
      },
      events: {
        title: "Event Benefits",
        description: "Priority booking and discounts for various events and tournaments"
      }
    },
    form: {
      success: {
        title: "Registration Successful",
        description: "Thank you for joining! Please check your email for further instructions."
      },
      error: {
        title: "Registration Failed",
        description: "There was an error processing your registration. Please try again."
      }
    }
  }
};