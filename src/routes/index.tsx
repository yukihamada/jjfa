import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Community from "@/pages/Community";
import CommunityRegistration from "@/pages/CommunityRegistration";
import DiscussionDetail from "@/pages/DiscussionDetail";
import Profile from "@/pages/Profile";
import Whitepaper from "@/pages/Whitepaper";
import TokenRules from "@/pages/TokenRules";
import TokenSpecification from "@/pages/TokenSpecification";
import OperatingRules from "@/pages/OperatingRules";
import TournamentRules from "@/pages/TournamentRules";
import JiujitsuBenefits from "@/pages/JiujitsuBenefits";
import LiveStreaming from "@/pages/LiveStreaming";
import StreamingStudio from "@/pages/StreamingStudio";
import Articles from "@/pages/Articles";
import Careers from "@/pages/Careers";
import Roadmap from "@/pages/Roadmap";
import NFT from "@/pages/NFT";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "community-registration",
        element: <CommunityRegistration />,
      },
      {
        path: "community/discussion/:id",
        element: <DiscussionDetail />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "whitepaper",
        element: <Whitepaper />,
      },
      {
        path: "token-rules",
        element: <TokenRules />,
      },
      {
        path: "token-specification",
        element: <TokenSpecification />,
      },
      {
        path: "operating-rules",
        element: <OperatingRules />,
      },
      {
        path: "tournament-rules",
        element: <TournamentRules />,
      },
      {
        path: "jiujitsu-benefits",
        element: <JiujitsuBenefits />,
      },
      {
        path: "live-streaming",
        element: <LiveStreaming />,
      },
      {
        path: "streaming-studio",
        element: <StreamingStudio />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "roadmap",
        element: <Roadmap />,
      },
      {
        path: "nft",
        element: <NFT />,
      },
    ],
  },
]);

export default router;