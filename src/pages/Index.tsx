import { HeroSection } from "@/components/sections/HeroSection";
import { JiujitsuBenefitsSection } from "@/components/sections/JiujitsuBenefitsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import ExternalLinks from "@/components/ExternalLinks";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { TeamSection } from "@/components/TeamSection";
import { TokenSection } from "@/components/sections/TokenSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackgroundGradient } from "@/components/BackgroundGradient";

const Index = () => {
  return (
    <div className="min-h-screen">
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