import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Database, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ComingSoonSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {t('comingSoon.title')}
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-100">
        {t('comingSoon.description')}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Building2 className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>{t('comingSoon.dojo.title')}</CardTitle>
            <CardDescription>
              {t('comingSoon.dojo.description')}
              <ul className="mt-4 space-y-2 text-left">
                <li>・ {t('comingSoon.dojo.features.members')}</li>
                <li>・ {t('comingSoon.dojo.features.schedule')}</li>
                <li>・ {t('comingSoon.dojo.features.attendance')}</li>
                <li>・ {t('comingSoon.dojo.features.payment')}</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-300">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Database className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>{t('comingSoon.blockchain.title')}</CardTitle>
            <CardDescription>
              {t('comingSoon.blockchain.description')}
              <ul className="mt-4 space-y-2 text-left">
                <li>・ {t('comingSoon.blockchain.features.belt')}</li>
                <li>・ {t('comingSoon.blockchain.features.tournament')}</li>
                <li>・ {t('comingSoon.blockchain.features.nft')}</li>
                <li>・ {t('comingSoon.blockchain.features.verification')}</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};