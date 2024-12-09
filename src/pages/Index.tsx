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

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="JJFA - 柔術 for ALL"
        description="JJFAは柔術の普及とコミュニティの発展を目指すプラットフォームです。トーナメント運営、教育コンテンツの提供、グローバルなコミュニティ作りを通じて、柔術の魅力を全ての人々に届けます。"
      />
      <BackgroundGradient />
      <main>
        <HeroSection />
        <JiujitsuBenefitsSection />
        <EventsSection />
        <ExternalLinks />
        <ComingSoonSection />
        <TeamSection />
        <TokenSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;