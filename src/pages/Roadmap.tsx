import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Milestone } from "lucide-react";

const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <PageTitle title={t('roadmap.title')} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-12 text-slate-800">
              {t('roadmap.title')}
            </h1>

            <div className="space-y-12">
              {/* 2024年11月-12月 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Milestone className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-slate-800">{t('roadmap.phase1.title')}</h2>
                </div>
                <div className="ml-12 mt-4 space-y-2">
                  <ul className="list-disc space-y-2 text-slate-600">
                    <li>{t('roadmap.phase1.registration')}</li>
                    <li>{t('roadmap.phase1.infrastructure')}</li>
                    <li>{t('roadmap.phase1.whitepaper')}</li>
                  </ul>
                </div>
              </div>

              {/* 2025年1月 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Milestone className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-slate-800">{t('roadmap.phase2.title')}</h2>
                </div>
                <div className="ml-12 mt-4 space-y-2">
                  <ul className="list-disc space-y-2 text-slate-600">
                    <li>{t('roadmap.phase2.dao')}</li>
                    <li>{t('roadmap.phase2.funding')}</li>
                  </ul>
                </div>
              </div>

              {/* 2025年2月 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Milestone className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-slate-800">{t('roadmap.phase3.title')}</h2>
                </div>
                <div className="ml-12 mt-4 space-y-2">
                  <ul className="list-disc space-y-2 text-slate-600">
                    <li>{t('roadmap.phase3.token')}</li>
                    <li>{t('roadmap.phase3.tournament')}</li>
                  </ul>
                </div>
              </div>

              {/* 2025年2月16日 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Milestone className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-slate-800">{t('roadmap.phase4.title')}</h2>
                </div>
                <div className="ml-12 mt-4 space-y-2">
                  <ul className="list-disc space-y-2 text-slate-600">
                    <li>{t('roadmap.phase4.event')}</li>
                    <li>{t('roadmap.phase4.records')}</li>
                  </ul>
                </div>
              </div>

              {/* 2025年3月以降 */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Milestone className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-slate-800">{t('roadmap.phase5.title')}</h2>
                </div>
                <div className="ml-12 mt-4 space-y-2">
                  <ul className="list-disc space-y-2 text-slate-600">
                    <li>{t('roadmap.phase5.management')}</li>
                    <li>{t('roadmap.phase5.blockchain')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;