import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

export const TokenSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {t('token.title')}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-100">
          <CardHeader>
            <CardTitle className="text-slate-800">{t('token.discount.title')}</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600">
            {t('token.discount.description')}
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <CardHeader>
            <CardTitle className="text-slate-800">{t('token.content.title')}</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-600">
            {t('token.content.description')}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};