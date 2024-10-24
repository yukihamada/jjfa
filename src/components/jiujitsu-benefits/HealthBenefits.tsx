import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const HealthBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Activity className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.health.scientificTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.scientificList.calories')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.scientificList.metabolism')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.scientificList.fat')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Heart className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.health.medicalTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.medicalList.cardio')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.medicalList.bone')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.health.medicalList.cognitive')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};