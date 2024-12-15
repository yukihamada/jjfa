import { Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Community from "@/pages/Community";
import CommunityRegistration from "@/pages/CommunityRegistration";
import DiscussionDetail from "@/pages/DiscussionDetail";
import Profile from "@/pages/Profile";
import NFT from "@/pages/NFT";
import JiujitsuBenefits from "@/pages/JiujitsuBenefits";
import LiveStreaming from "@/pages/LiveStreaming";
import StreamingStudio from "@/pages/StreamingStudio";
import TokenRules from "@/pages/TokenRules";
import OperatingRules from "@/pages/OperatingRules";
import TournamentRules from "@/pages/TournamentRules";
import TokenSpecification from "@/pages/TokenSpecification";
import Articles from "@/pages/Articles";
import Careers from "@/pages/Careers";
import Project from "@/pages/Project";
import Whitepaper from "@/pages/Whitepaper";
import Admin from "@/pages/Admin";
import BasicInfo from "@/pages/profile/BasicInfo";
import Fighter from "@/pages/profile/Fighter";
import FighterStats from "@/pages/profile/FighterStats";
import Membership from "@/pages/profile/Membership";
import Settings from "@/pages/profile/Settings";
import Archives from "@/pages/profile/Archives";
import PublicProfile from "@/pages/profile/PublicProfile";
import ProgressDetail from "@/pages/progress/ProgressDetail";

interface AppRoutesProps {
  isAuthenticated: boolean;
}

export const AppRoutes = ({ isAuthenticated }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/nft" element={<NFT />} />
      <Route path="/benefits" element={<JiujitsuBenefits />} />
      <Route path="/live" element={<LiveStreaming />} />
      <Route path="/streaming-studio" element={<StreamingStudio />} />
      <Route path="/token-specification" element={<TokenSpecification />} />
      <Route path="/tournament-rules" element={<TournamentRules />} />
      <Route path="/operating-rules" element={<OperatingRules />} />
      <Route path="/token-rules" element={<TokenRules />} />
      <Route path="/whitepaper" element={<Whitepaper />} />
      <Route path="/admin" element={<Admin />} />
      <Route 
        path="/community" 
        element={
          isAuthenticated ? <Community /> : <Navigate to="/community-registration" />
        } 
      />
      <Route path="/community-registration" element={<CommunityRegistration />} />
      <Route 
        path="/discussion/:id" 
        element={
          isAuthenticated ? <DiscussionDetail /> : <Navigate to="/community-registration" />
        } 
      />
      <Route 
        path="/profile" 
        element={
          isAuthenticated ? <Profile /> : <Navigate to="/community-registration" />
        }
      >
        <Route index element={<BasicInfo />} />
        <Route path="fighter" element={<Fighter />} />
        <Route path="fighter-stats" element={<FighterStats />} />
        <Route path="membership" element={<Membership />} />
        <Route path="settings" element={<Settings />} />
        <Route path="archives" element={<Archives />} />
      </Route>
      <Route path="/profile/:id" element={<PublicProfile />} />
      <Route path="/progress/:id" element={<ProgressDetail />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
};