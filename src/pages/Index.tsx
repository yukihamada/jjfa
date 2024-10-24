import AnimatedBackground from "@/components/AnimatedBackground";
import { HeroSection } from "@/components/sections/HeroSection";
import { JiujitsuBenefitsSection } from "@/components/sections/JiujitsuBenefitsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import ExternalLinks from "@/components/ExternalLinks";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { TeamSection } from "@/components/TeamSection";
import { TokenSection } from "@/components/sections/TokenSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      <div className="pt-16">
        <HeroSection />
        <JiujitsuBenefitsSection />
        <EventsSection />
        <ExternalLinks />
        <ComingSoonSection />
        <TeamSection />
        <TokenSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;