import AnimatedBackground from "@/components/AnimatedBackground";
import { RegistrationForm } from "@/components/community/RegistrationForm";
import { CommunityEvents } from "@/components/community/CommunityEvents";
import { CommunityBenefits } from "@/components/community/CommunityBenefits";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Join Our Community
        </h1>
        <p className="text-lg text-center mb-12 text-slate-600">
          Share the passion for Jiu-Jitsu in the JJFA community
        </p>

        <div className="max-w-4xl mx-auto">
          <RegistrationForm />
          <CommunityBenefits />
          <CommunityEvents />
        </div>
      </div>
    </div>
  );
};

export default Community;