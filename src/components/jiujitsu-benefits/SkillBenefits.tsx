import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const SkillBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Brain className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.skills.mentalTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.mentalList.confidence')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.mentalList.stress')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.mentalList.focus')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <BookOpen className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>{t('benefits.skills.businessTitle')}</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.businessList.strategy')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.businessList.leadership')}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                {t('benefits.skills.businessList.communication')}
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};