import { HeroSection } from "@/components/sections/HeroSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { EventsSection } from "@/components/sections/EventsSection";
import ExternalLinks from "@/components/ExternalLinks";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { FutureVisionSection } from "@/components/sections/FutureVisionSection";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { data: session, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
    staleTime: 0,
    gcTime: 0
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (session) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="JJFA - 柔術 for ALL"
        description="JJFAは柔術の普及とコミュニティの発展を目指すプラットフォームです。年齢・性別・経験問わず、柔術を通じて人々をつなげ、より健康的で豊かなコミュニティを創造することを目指しています。"
        keywords="柔術,JJFA,Jiu-Jitsu,大会,トーナメント,コミュニティ,教育"
      />
      <BackgroundGradient />
      <HeroSection />
      <CommunitySection />
      <EventsSection />
      <ExternalLinks />
      <ComingSoonSection />
      <FutureVisionSection />
    </div>
  );
};

export default Index;