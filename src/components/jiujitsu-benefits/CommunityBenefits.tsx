import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const CommunityBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Users className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.community.networkingTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.networkingList.diversity')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.networkingList.international')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.networkingList.bonds')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Trophy className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.community.eventsTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.eventsList.seminars')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.eventsList.competitions')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.community.eventsList.gatherings')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};