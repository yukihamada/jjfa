import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';

export const EventsSection = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {t('events.title')}
      </h2>
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader className="flex flex-row items-center gap-4">
            <Calendar className="w-10 h-10 text-slate-800" />
            <div>
              <CardTitle className="text-slate-800">JiuFight 2025</CardTitle>
              <CardDescription className="text-slate-600">
                2025年2月16日
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              {isJapanese ? (
                <>
                  場所: 大田区産業プラザPiO<br />
                  アクセス: 京急蒲田駅から徒歩3分
                </>
              ) : (
                <>
                  {t('events.location')}: PiO Ota Industrial Plaza<br />
                  {t('events.access')}: 3-minute walk from Keikyu Kamata Station
                </>
              )}
            </p>
            <a 
              href="https://jiufight.com/これ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                {t('events.viewDetails')}
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};