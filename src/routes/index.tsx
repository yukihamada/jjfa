import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Articles from "@/pages/Articles";
import OperatingRules from "@/pages/OperatingRules";
import TokenRules from "@/pages/TokenRules";
import TournamentRules from "@/pages/TournamentRules";
import Community from "@/pages/Community";
import CommunityRegistration from "@/pages/CommunityRegistration";
import DiscussionDetail from "@/pages/DiscussionDetail";
import Profile from "@/pages/Profile";
import NFT from "@/pages/NFT";
import LiveStreaming from "@/pages/LiveStreaming";
import StreamingStudio from "@/pages/StreamingStudio";
import JiujitsuBenefits from "@/pages/JiujitsuBenefits";
import Careers from "@/pages/Careers";
import Whitepaper from "@/pages/Whitepaper";
import TokenSpecification from "@/pages/TokenSpecification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/operating-rules",
    element: <OperatingRules />,
  },
  {
    path: "/token-rules",
    element: <TokenRules />,
  },
  {
    path: "/tournament-rules",
    element: <TournamentRules />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/community/register",
    element: <CommunityRegistration />,
  },
  {
    path: "/discussions/:id",
    element: <DiscussionDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/nft",
    element: <NFT />,
  },
  {
    path: "/live",
    element: <LiveStreaming />,
  },
  {
    path: "/studio",
    element: <StreamingStudio />,
  },
  {
    path: "/benefits",
    element: <JiujitsuBenefits />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/whitepaper",
    element: <Whitepaper />,
  },
  {
    path: "/token-specification",
    element: <TokenSpecification />,
  },
]);