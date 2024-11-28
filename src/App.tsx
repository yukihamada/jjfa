import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import Index from "./pages/Index";
import Whitepaper from "./pages/Whitepaper";
import Community from "./pages/Community";
import JiujitsuBenefits from "./pages/JiujitsuBenefits";
import TrialClass from "./pages/TrialClass";
import Articles from "./pages/Articles";
import OperatingRules from "./pages/OperatingRules";
import TokenRules from "./pages/TokenRules";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Roadmap from "./pages/Roadmap";
import Profile from "./pages/Profile";
import { useState, useEffect } from "react";
import { PasswordProtection } from "./components/PasswordProtection";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const queryClient = new QueryClient();

// セッションを必要とするルート
const protectedRoutes = [
  '/community',
  '/profile',
  '/roadmap',
];

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // セッションの設定（30分）
    supabase.auth.setSession({
      expires_in: 1800 // 30分 = 1800秒
    });

    // 初期セッションチェック
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setIsLoading(false);
    };
    checkSession();

    // セッション状態の監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
        setIsAuthenticated(!!session);
        if (!session) {
          toast.error("セッションが終了しました。再度ログインしてください。");
        }
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const currentPath = window.location.pathname;
    
    if (!isAuthenticated && protectedRoutes.includes(currentPath)) {
      toast.error("このページにアクセスするにはログインが必要です");
      return <Navigate to="/" />;
    }
    
    return <>{children}</>;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <GlobalNav />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route 
                  path="/community" 
                  element={
                    <ProtectedRoute>
                      <Community />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/jiujitsu-benefits" element={<JiujitsuBenefits />} />
                <Route path="/trial-class" element={<TrialClass />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/operating-rules" element={<OperatingRules />} />
                <Route path="/token-rules" element={<TokenRules />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route 
                  path="/roadmap" 
                  element={
                    <ProtectedRoute>
                      <Roadmap />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <GlobalFooter />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;