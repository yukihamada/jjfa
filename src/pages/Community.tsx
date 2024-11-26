import { RegistrationForm } from "@/components/community/RegistrationForm";
import { CommunityEvents } from "@/components/community/CommunityEvents";
import { CommunityBenefits } from "@/components/community/CommunityBenefits";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";

const Community = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title={t('community.title')} />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('community.joinTitle')}
        </h1>
        <p className="text-lg text-center mb-12 text-slate-600">
          {t('community.joinSubtitle')}
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