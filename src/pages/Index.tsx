import { HeroSection } from "@/components/sections/HeroSection";
import { JiujitsuBenefitsSection } from "@/components/sections/JiujitsuBenefitsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import ExternalLinks from "@/components/ExternalLinks";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { TeamSection } from "@/components/TeamSection";
import { TokenSection } from "@/components/sections/TokenSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  if (session) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="JJFA - 柔術 for ALL"
        description="JJFAは柔術の普及とコミュニティの発展を目指すプラットフォームです。トーナメント運営、教育コンテンツの提供、グローバルなコミュニティ作りを通じて、柔術の魅力を全ての人々に届けます。"
        keywords="柔術,JJFA,Jiu-Jitsu,大会,トーナメント,コミュニティ,教育,MASTER NFT,VOTE Token,BJJ Token,DAO"
      />
      <BackgroundGradient />
      <HeroSection />
      <JiujitsuBenefitsSection />
      <EventsSection />
      <ExternalLinks />
      <ComingSoonSection />
      <TeamSection />
      <TokenSection />
      <ContactSection />
    </div>
  );
};

export default Index;