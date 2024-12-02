import { Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import Whitepaper from "@/pages/Whitepaper";
import Community from "@/pages/Community";
import CommunityRegistration from "@/pages/CommunityRegistration";
import JiujitsuBenefits from "@/pages/JiujitsuBenefits";
import Articles from "@/pages/Articles";
import OperatingRules from "@/pages/OperatingRules";
import TokenRules from "@/pages/TokenRules";
import TournamentRules from "@/pages/TournamentRules";
import NFT from "@/pages/NFT";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import Roadmap from "@/pages/Roadmap";
import Profile from "@/pages/Profile";
import LiveStreaming from "@/pages/LiveStreaming";
import DiscussionDetail from "@/pages/DiscussionDetail";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute = ({ children, isAuthenticated }: ProtectedRouteProps) => {
  const currentPath = window.location.pathname;
  const protectedRoutes = ['/community', '/profile', '/roadmap'];
  
  if (!isAuthenticated && protectedRoutes.includes(currentPath)) {
    return <Navigate to="/community-registration" />;
  }
  
  return <>{children}</>;
};

export const AppRoutes = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/community-registration" element={<CommunityRegistration />} />
      <Route path="/community" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Community /></ProtectedRoute>} />
      <Route path="/community/discussion/:id" element={<ProtectedRoute isAuthenticated={isAuthenticated}><DiscussionDetail /></ProtectedRoute>} />
      <Route path="/jiujitsu-benefits" element={<JiujitsuBenefits />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/operating-rules" element={<OperatingRules />} />
      <Route path="/token-rules" element={<TokenRules />} />
      <Route path="/tournament-rules" element={<TournamentRules />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/roadmap" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Roadmap /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />
      <Route path="/live" element={<LiveStreaming />} />
      <Route path="/live/:streamId" element={<LiveStreaming />} />
    </Routes>
  );
};