import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import { GlobalNav } from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";
import { PasswordProtection } from "./components/PasswordProtection";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setIsLoading(false);

      if (session) {
        setTimeout(() => {
          supabase.auth.signOut();
          setIsAuthenticated(false);
          toast.error("セッションが終了しました。再度ログインしてください。");
        }, 1800000);
      }
    };
    checkSession();

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
                <AppRoutes isAuthenticated={isAuthenticated} />
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