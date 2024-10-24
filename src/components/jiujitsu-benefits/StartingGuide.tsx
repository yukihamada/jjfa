import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const StartingGuide = () => {
  const { t } = useTranslation();

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
      <CardHeader>
        <CardTitle>{t('benefits.startingGuide.title')}</CardTitle>
        <CardDescription>
          {t('benefits.startingGuide.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">{t('benefits.startingGuide.concerns.fitness.title')}</h4>
                <p className="text-sm text-slate-600">{t('benefits.startingGuide.concerns.fitness.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">{t('benefits.startingGuide.concerns.injury.title')}</h4>
                <p className="text-sm text-slate-600">{t('benefits.startingGuide.concerns.injury.description')}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">{t('benefits.startingGuide.concerns.age.title')}</h4>
                <p className="text-sm text-slate-600">{t('benefits.startingGuide.concerns.age.description')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">{t('benefits.startingGuide.concerns.athletic.title')}</h4>
                <p className="text-sm text-slate-600">{t('benefits.startingGuide.concerns.athletic.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};