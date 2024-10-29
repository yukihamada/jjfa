import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/PageTitle";

const Whitepaper = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <PageTitle title={t('whitepaper.title')} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-4">{t('whitepaper.title')}</h1>
            <p className="mb-4">{t('whitepaper.intro.backgroundText')}</p>
            <h2 className="text-xl font-bold mb-2">{t('whitepaper.intro.overview')}</h2>
            <p>{t('whitepaper.intro.overviewText')}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Whitepaper;
