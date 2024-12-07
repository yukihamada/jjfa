import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";

const Whitepaper = () => {
  const { t } = useTranslation();

  const getTranslatedArray = (key: string): string[] => {
    const items = t(key, { returnObjects: true });
    return Array.isArray(items) ? items : [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <PageTitle title={t('whitepaper.title')} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{t('whitepaper.title')}</h1>
              <p className="text-xl text-slate-600">{t('whitepaper.subtitle')}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link 
                to="/articles" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t('whitepaper.links.articles')}
              </Link>
              <Link 
                to="/operating-rules" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t('whitepaper.links.operatingRules')}
              </Link>
              <Link 
                to="/token-rules" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t('whitepaper.links.tokenRules')}
              </Link>
              <Link 
                to="/roadmap" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t('whitepaper.links.roadmap')}
              </Link>
            </div>

            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.intro.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.background')}</h3>
                <p className="mb-4">{t('whitepaper.intro.backgroundText')}</p>
                
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.overview')}</h3>
                <p className="mb-4">{t('whitepaper.intro.overviewText')}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.currentState.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.globalSpread.title')}</h3>
                <ul className="list-disc pl-6 mb-4">
                  {getTranslatedArray('whitepaper.currentState.globalSpread.items').map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.currentIssues.title')}</h3>
                <ul className="list-disc pl-6 mb-4">
                  {getTranslatedArray('whitepaper.currentState.currentIssues.items').map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.vision.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.vision.overview.title')}</h3>
                <p className="mb-4">{t('whitepaper.vision.overview.description')}</p>

                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.vision.mission.title')}</h3>
                <p className="mb-4">{t('whitepaper.vision.mission.description')}</p>

                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.vision.longTermGoals.title')}</h3>
                <ul className="list-disc pl-6 mb-4">
                  {getTranslatedArray('whitepaper.vision.longTermGoals.items').map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.token.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.token.purpose.title')}</h3>
                <p className="mb-4">{t('whitepaper.token.purpose.description')}</p>

                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.token.types.title')}</h3>
                <p className="mb-4">{t('whitepaper.token.types.description')}</p>
                <ul className="list-disc pl-6 mb-4">
                  {getTranslatedArray('whitepaper.token.types.items').map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mb-4">{t('whitepaper.token.types.additionalInfo')}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.governance.title')}</h2>
                <p className="mb-4">{t('whitepaper.governance.description')}</p>
                <p className="mb-4">{t('whitepaper.governance.additionalInfo')}</p>
              </section>

              <section className="border-t border-slate-200 pt-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.contact.title')}</h2>
                <ul className="list-none space-y-2">
                  <li>{t('whitepaper.contact.website')}</li>
                  <li>{t('whitepaper.contact.email')}</li>
                  <li>{t('whitepaper.contact.address')}</li>
                </ul>
              </section>

              <section className="mt-8 text-sm text-slate-600">
                <h2 className="text-lg font-bold mb-2">{t('whitepaper.disclaimer.title')}</h2>
                <p>{t('whitepaper.disclaimer.content')}</p>
              </section>

              <section className="mt-8 p-6 bg-slate-50 rounded-lg">
                <p className="text-slate-700">{t('whitepaper.footer.text')}</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Whitepaper;