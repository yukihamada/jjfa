import { SEO } from "@/components/SEO";
import { PageTitle } from "@/components/PageTitle";
import { AboutHero } from "@/components/about/AboutHero";
import { VisionSection } from "@/components/about/VisionSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { GovernanceSection } from "@/components/about/GovernanceSection";
import { CallToAction } from "@/components/about/CallToAction";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO 
        title="JJFAについて" 
        description="JJFA（Jiu-Jitsu For ALL）は、ブラジリアン柔術が持つ可能性を最大限に引き出し、世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。" 
      />
      <PageTitle title="JJFAについて" />
      <AboutHero />
      <VisionSection />
      <ValuesSection />
      <GovernanceSection />
      <CallToAction />
    </div>
  );
};

export default AboutPage;