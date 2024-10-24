import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Timer, BookOpen, Users } from "lucide-react";

export const ComingSoonSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-slate-800" />,
      title: t('comingSoon.features.0'),
    },
    {
      icon: <Users className="w-8 h-8 text-slate-800" />,
      title: t('comingSoon.features.1'),
    },
    {
      icon: <Timer className="w-8 h-8 text-slate-800" />,
      title: t('comingSoon.features.2'),
    },
  ];

  return (
    <section className="py-20 px-4 container mx-auto">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-slate-800">
            {t('comingSoon.title')}
          </CardTitle>
          <CardDescription className="text-lg">
            {t('comingSoon.description')}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                {feature.icon}
                <h3 className="font-semibold text-slate-800">{feature.title}</h3>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};