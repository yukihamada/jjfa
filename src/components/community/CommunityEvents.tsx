import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const CommunityEvents = () => {
  const { t } = useTranslation();

  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-6 w-6" />
          {t('community.events.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <Calendar className="w-full md:w-1/2" mode="single" />
          <div className="space-y-4 w-full md:w-1/2">
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">{t('events.upcoming.jiufight.title')}</h4>
              <p className="text-sm text-gray-500">{t('events.upcoming.jiufight.date')}</p>
              <p>{t('events.upcoming.jiufight.location')}</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">{t('community.events.upcoming.camp.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.upcoming.camp.date')}</p>
              <p>{t('community.events.upcoming.camp.description')}</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">{t('community.events.upcoming.seminar.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.upcoming.seminar.date')}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};