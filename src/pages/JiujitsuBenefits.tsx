import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { PageTitle } from "@/components/PageTitle";
import { HealthBenefits } from "@/components/jiujitsu-benefits/HealthBenefits";
import { SkillBenefits } from "@/components/jiujitsu-benefits/SkillBenefits";
import { CommunityBenefits } from "@/components/jiujitsu-benefits/CommunityBenefits";
import { StartingGuide } from "@/components/jiujitsu-benefits/StartingGuide";

const JiujitsuBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title={t('benefits.title')} />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {t('benefits.title')}
        </h1>

        <div className="max-w-6xl mx-auto">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">{t('benefits.health.title')}</h2>
            <HealthBenefits />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">{t('benefits.skills.title')}</h2>
            <SkillBenefits />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">{t('benefits.community.title')}</h2>
            <CommunityBenefits />
          </section>

          <div className="max-w-4xl mx-auto">
            <StartingGuide />

            <div className="text-center">
              <Link to="/trial-class">
                <Button 
                  size="lg"
                  className="bg-slate-800 text-white hover:bg-slate-700"
                >
                  {t('benefits.bookTrial')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JiujitsuBenefits;
