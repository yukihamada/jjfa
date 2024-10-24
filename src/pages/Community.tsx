import AnimatedBackground from "@/components/AnimatedBackground";
import { RegistrationForm } from "@/components/community/RegistrationForm";
import { CommunityEvents } from "@/components/community/CommunityEvents";
import { CommunityBenefits } from "@/components/community/CommunityBenefits";

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <AnimatedBackground />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          コミュニティに参加する
        </h1>
        <p className="text-lg text-center mb-12 text-slate-600">
          JJFAコミュニティで柔術の魅力を共有しましょう
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