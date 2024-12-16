import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FileText, Book, Coins, Calendar } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";

const Whitepaper = () => {
  const { t } = useTranslation();

  const documents = [
    {
      title: "定款",
      description: "組織としての基本的な枠組みを定めた規程です。",
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
      description: "トークンの発行・管理・利用に関する規程です。",
      icon: Coins,
      link: "/token-rules"
    },
    {
      title: "トークン技術仕様書",
      description: "トークンの技術的な仕様と実装詳細を説明した文書です。",
      icon: FileText,
      link: "/token-specification"
    },
    {
      title: "ロードマップ",
      description: "開発・運営計画を時系列で示した計画書です。",
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

            <div className="prose prose-slate max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.intro.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.background')}</h3>
                <p className="mb-4">{t('whitepaper.intro.backgroundText')}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.web3.title')}</h3>
                  <p className="mb-4">{t('whitepaper.intro.web3.description')}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold mb-2">{t('whitepaper.intro.web3.comparison.title')}</h4>
                    <ul className="list-disc pl-6 mb-4">
                      {(t('whitepaper.intro.web3.comparison.items', { returnObjects: true }) as string[] || []).map((item: string, index: number) => (
                        <li key={index} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="mb-4">{t('whitepaper.intro.web3.example')}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.intro.organizations.title')}</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {(t('whitepaper.intro.organizations.items', { returnObjects: true }) as string[] || []).map((item: string, index: number) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.currentState.title')}</h2>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.marketSize.title')}</h3>
                  <p className="mb-4">{t('whitepaper.currentState.marketSize.description')}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.issues.title')}</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {(t('whitepaper.currentState.issues.items', { returnObjects: true }) as string[] || []).map((item: string, index: number) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.currentState.growth.title')}</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {(t('whitepaper.currentState.growth.items', { returnObjects: true }) as string[] || []).map((item: string, index: number) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.vision.title')}</h2>
                <h3 className="text-xl font-semibold mb-2">{t('whitepaper.vision.mission')}</h3>
                <p className="mb-4">{t('whitepaper.vision.description')}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{t('whitepaper.vision.strategy.title')}</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {(t('whitepaper.vision.strategy.items', { returnObjects: true }) as string[] || []).map((item: string, index: number) => (
                      <li key={index} className="mb-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.conclusion.title')}</h2>
                <p className="mb-4">{t('whitepaper.conclusion.content')}</p>
                <p className="mb-4">{t('whitepaper.conclusion.callToAction')}</p>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">関連ドキュメント</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documents.map((doc) => {
                    const Icon = doc.icon;
                    return (
                      <Link 
                        key={doc.title}
                        to={doc.link}
                        className="group p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-6 h-6 text-slate-600" />
                          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                            {doc.title}
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm">
                          {doc.description}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </section>

              <section className="border-t border-slate-200 pt-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">{t('whitepaper.contact.title')}</h2>
                <ul className="list-none space-y-2">
                  <li>{t('whitepaper.contact.website')}</li>
                  <li>{t('whitepaper.contact.email')}</li>
                  <li>{t('whitepaper.contact.address')}</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Whitepaper;