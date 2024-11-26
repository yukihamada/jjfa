import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

export const CommunityBenefits = () => {
  const { t } = useTranslation();

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>{t('community.benefits.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <Gift className="h-5 w-5 mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold">{t('community.benefits.exclusive.title')}</h4>
              <p>{t('community.benefits.exclusive.description')}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CalendarDays className="h-5 w-5 mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold">{t('community.benefits.events.title')}</h4>
              <p>{t('community.benefits.events.description')}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};