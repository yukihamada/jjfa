import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const FighterStatsCard = () => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader>
        <CardTitle className="text-xl font-bold">
          {t('profile.techniques.title', 'Techniques Statistics')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          {t('profile.techniques.comingSoon', 'Technique tracking coming soon...')}
        </p>
      </CardContent>
    </Card>
  );
};