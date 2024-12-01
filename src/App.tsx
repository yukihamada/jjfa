import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import Index from "./pages/Index";
import Whitepaper from "./pages/Whitepaper";
import Community from "./pages/Community";
import CommunityRegistration from "./pages/CommunityRegistration";
import JiujitsuBenefits from "./pages/JiujitsuBenefits";
import TrialClass from "./pages/TrialClass";
import Articles from "./pages/Articles";
import OperatingRules from "./pages/OperatingRules";
import TokenRules from "./pages/TokenRules";
import TournamentRules from "./pages/TournamentRules";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import NFT from "./pages/NFT";
import LiveStreaming from "./pages/LiveStreaming";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const queryClient = new QueryClient();

// セッションを必要とするルート
const protectedRoutes = [
  '/community',
  '/profile',
  '/roadmap',
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // 一時的にtrueに設定
  const [isLoading, setIsLoading] = useState(false); // 一時的にfalseに設定

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const currentPath = window.location.pathname;
    
    if (!isAuthenticated && protectedRoutes.includes(currentPath)) {
      toast.error("このページにアクセスするにはログインが必要です");
      return <Navigate to="/community-registration" />;
    }
    
    return <>{children}</>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <GlobalNav />
              <main className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/whitepaper" element={<Whitepaper />} />
                  <Route path="/community-registration" element={<CommunityRegistration />} />
                  <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
                  <Route path="/jiujitsu-benefits" element={<JiujitsuBenefits />} />
                  <Route path="/trial-class" element={<TrialClass />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/operating-rules" element={<OperatingRules />} />
                  <Route path="/token-rules" element={<TokenRules />} />
                  <Route path="/tournament-rules" element={<TournamentRules />} />
                  <Route path="/nft" element={<NFT />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/roadmap" element={<ProtectedRoute><Roadmap /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                  <Route path="/live" element={<LiveStreaming />} />
                </Routes>
              </main>
              <GlobalFooter />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;