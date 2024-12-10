import { Routes, Route, Navigate } from "react-router-dom";
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
import Roadmap from "@/pages/Roadmap";

interface AppRoutesProps {
  isAuthenticated: boolean;
}

export const AppRoutes = ({ isAuthenticated }: AppRoutesProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/operating-rules" element={<OperatingRules />} />
      <Route path="/token-rules" element={<TokenRules />} />
      <Route path="/tournament-rules" element={<TournamentRules />} />
      <Route path="/community" element={<Community />} />
      <Route path="/community/register" element={<CommunityRegistration />} />
      <Route path="/discussions/:id" element={<DiscussionDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="/live" element={<LiveStreaming />} />
      <Route path="/studio" element={<StreamingStudio />} />
      <Route path="/benefits" element={<JiujitsuBenefits />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/token-specification" element={<TokenSpecification />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  );
};