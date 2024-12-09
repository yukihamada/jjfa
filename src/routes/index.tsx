import { Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
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
import StreamingStudio from "@/pages/StreamingStudio";
import DiscussionDetail from "@/pages/DiscussionDetail";
import BasicInfo from "@/pages/profile/BasicInfo";
import Membership from "@/pages/profile/Membership";
import Fighter from "@/pages/profile/Fighter";
import FighterStats from "@/pages/profile/FighterStats";
import Settings from "@/pages/profile/Settings";
import { useOutletContext } from "react-router-dom";

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
      <Route path="/about" element={<About />} />
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
      <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>}>
        <Route index element={<OutletBasicInfo />} />
        <Route path="membership" element={<OutletMembership />} />
        <Route path="fighter" element={<OutletFighter />} />
        <Route path="techniques" element={<FighterStats />} />
        <Route path="settings" element={<OutletSettings />} />
      </Route>
      <Route path="/live" element={<LiveStreaming />} />
      <Route path="/live/:streamId" element={<LiveStreaming />} />
      <Route path="/studio/:streamKey" element={<StreamingStudio />} />
      <Route path="/studio" element={<StreamingStudio />} />
    </Routes>
  );
};

// Wrapper components to handle outlet context
const OutletBasicInfo = () => {
  const { user, profile, onPhotoUpdate } = useOutletContext<any>();
  return <BasicInfo user={user} profile={profile} onPhotoUpdate={onPhotoUpdate} />;
};

const OutletMembership = () => {
  const { member, onPurchaseNFT } = useOutletContext<any>();
  return <Membership member={member} onPurchaseNFT={onPurchaseNFT} />;
};

const OutletFighter = () => {
  const { fighter, onFighterUpdate } = useOutletContext<any>();
  return <Fighter fighter={fighter} onRegistrationSuccess={onFighterUpdate} />;
};

const OutletSettings = () => {
  const { user } = useOutletContext<any>();
  return <Settings userEmail={user?.email} />;
};