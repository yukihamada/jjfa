import { RegistrationForm } from "@/components/community/RegistrationForm";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Award, BookOpen } from "lucide-react";

const Community = () => {
  const { t } = useTranslation();

  const benefits = [
    { icon: Trophy, title: t('community.benefits.tournament.title'), description: t('community.benefits.tournament.description') },
    { icon: BookOpen, title: t('community.benefits.training.title'), description: t('community.benefits.training.description') },
    { icon: Users, title: t('community.benefits.community.title'), description: t('community.benefits.community.description') },
    { icon: Award, title: t('community.benefits.ranking.title'), description: t('community.benefits.ranking.description') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title={t('community.title')} />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {t('community.joinTitle')}
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                {t('community.joinSubtitle')}
              </p>
              <RegistrationForm />
            </div>
            <div>
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800">
                    {t('community.benefits.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-slate-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800">{benefit.title}</h3>
                          <p className="text-slate-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;