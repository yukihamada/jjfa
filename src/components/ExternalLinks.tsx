import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExternalLinks = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">{t('services.title')}</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-slate-800">{t('services.jiufight.title')}</CardTitle>
            <CardDescription>
              {t('services.jiufight.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a 
              href="https://jiufight.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full text-slate-800 border-slate-800 hover:bg-slate-100"
              >
                Visit Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-slate-800">{t('services.jiujitsulab.title')}</CardTitle>
            <CardDescription>
              {t('services.jiujitsulab.description')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a 
              href="https://jiujitsu-lab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full text-slate-800 border-slate-800 hover:bg-slate-100"
              >
                Visit Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExternalLinks;