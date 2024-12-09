import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ExternalLink, FileText, Calendar, Coins, Book } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";

interface ChallengeItem {
  text: string;
}

const Whitepaper = () => {
  const { t } = useTranslation();

  const regulations = [
    {
      title: "定款",
      description: "JJFAの組織としての基本的な枠組みを定めた規程です。",
      icon: Book,
      link: "/articles"
    },
    {
      title: "運営規程",
      description: "DAOの運営方針、意思決定プロセス、ガバナンス構造などを定めた規程です。",
      icon: FileText,
      link: "/operating-rules"
    },
    {
      title: "トークン規程",
      description: "JJFAトークンの発行・管理・利用に関する規程です。",
      icon: Coins,
      link: "/token-rules"
    },
    {
      title: "ロードマップ",
      description: "JJFAの開発・運営計画を時系列で示した計画書です。",
      icon: Calendar,
      link: "/roadmap"
    }
  ];

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

            <div className="prose prose-slate max-w-none mb-12">
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
                  {(t('whitepaper.currentState.globalSpread.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.currentIssues.title')}</h3>
                <ul className="list-disc pl-6 mb-4">
                  {(t('whitepaper.currentState.currentIssues.items', { returnObjects: true }) as string[]).map((item, index) => (
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
                  {(t('whitepaper.vision.longTermGoals.items', { returnObjects: true }) as string[]).map((item, index) => (
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
                  {(t('whitepaper.token.types.items', { returnObjects: true }) as string[]).map((item, index) => (
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
            </div>

            <div className="border-t border-slate-200 pt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">関連規程・計画書</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {regulations.map((reg) => {
                  const Icon = reg.icon;
                  return (
                    <Link 
                      key={reg.title}
                      to={reg.link}
                      className="group p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 text-slate-600" />
                        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                          {reg.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm">
                        {reg.description}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Whitepaper;