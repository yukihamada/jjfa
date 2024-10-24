import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalNav from "./components/GlobalNav";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <GlobalNav />
        <main className="min-h-screen pt-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/community" element={<Community />} />
            <Route path="/jiujitsu-benefits" element={<JiujitsuBenefits />} />
            <Route path="/trial-class" element={<TrialClass />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/operating-rules" element={<OperatingRules />} />
            <Route path="/token-rules" element={<TokenRules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;