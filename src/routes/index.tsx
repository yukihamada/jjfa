import { Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Articles from "@/pages/Articles";
import TournamentRules from "@/pages/TournamentRules";
import OperatingRules from "@/pages/OperatingRules";
import TokenRules from "@/pages/TokenRules";
import Community from "@/pages/Community";
import CommunityRegistration from "@/pages/CommunityRegistration";
import DiscussionDetail from "@/pages/DiscussionDetail";
import Profile from "@/pages/Profile";
import NFT from "@/pages/NFT";
import JiujitsuBenefits from "@/pages/JiujitsuBenefits";
import TokenSpecification from "@/pages/TokenSpecification";
import Roadmap from "@/pages/Roadmap";
import LiveStreaming from "@/pages/LiveStreaming";
import StreamingStudio from "@/pages/StreamingStudio";
import Careers from "@/pages/Careers";
import Project from "@/pages/Project";
import BasicInfo from "@/pages/profile/BasicInfo";
import Fighter from "@/pages/profile/Fighter";
import FighterStats from "@/pages/profile/FighterStats";
import Membership from "@/pages/profile/Membership";
import Settings from "@/pages/profile/Settings";
import Archives from "@/pages/profile/Archives";
import PublicProfile from "@/pages/profile/PublicProfile";

interface AppRoutesProps {
  isAuthenticated: boolean;
}

export const AppRoutes = ({ isAuthenticated }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/tournament-rules" element={<TournamentRules />} />
      <Route path="/operating-rules" element={<OperatingRules />} />
      <Route path="/token-rules" element={<TokenRules />} />
      <Route 
        path="/community" 
        element={
          isAuthenticated ? (
            <Community />
          ) : (
            <Navigate to="/community-registration" replace />
          )
        } 
      />
      <Route path="/community-registration" element={<CommunityRegistration />} />
      <Route 
        path="/community/discussion/:id" 
        element={
          isAuthenticated ? (
            <DiscussionDetail />
          ) : (
            <Navigate to="/community-registration" replace />
          )
        } 
      />
      <Route path="/profile/:username" element={<PublicProfile />} />
      <Route 
        path="/profile/*" 
        element={
          isAuthenticated ? (
            <Profile />
          ) : (
            <Navigate to="/community-registration" replace />
          )
        } 
      >
        <Route path="basic-info" element={<BasicInfo />} />
        <Route path="fighter" element={<Fighter />} />
        <Route path="fighter-stats" element={<FighterStats />} />
        <Route path="membership" element={<Membership />} />
        <Route path="settings" element={<Settings />} />
        <Route path="archives" element={<Archives />} />
        <Route index element={<Navigate to="basic-info" replace />} />
      </Route>
      <Route path="/nft" element={<NFT />} />
      <Route path="/benefits" element={<JiujitsuBenefits />} />
      <Route path="/token-specification" element={<TokenSpecification />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route 
        path="/live" 
        element={
          isAuthenticated ? (
            <LiveStreaming />
          ) : (
            <Navigate to="/community-registration" replace />
          )
        } 
      />
      <Route 
        path="/studio" 
        element={
          isAuthenticated ? (
            <StreamingStudio />
          ) : (
            <Navigate to="/community-registration" replace />
          )
        } 
      />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  );
};
