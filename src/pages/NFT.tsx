import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageTitle } from "@/components/PageTitle";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { useTranslation } from "react-i18next";
import { Medal, Shield, Award } from "lucide-react";

const NFT = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20"> {/* Added pt-20 for top padding */}
      <PageTitle title={t('nft.title')} />
      <BackgroundGradient />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600">
              {t('nft.description')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Medal className="w-8 h-8 text-yellow-500 mb-2" />
                <CardTitle>{t('nft.medals.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  {t('nft.medals.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-500 mb-2" />
                <CardTitle>{t('nft.membership.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  {t('nft.membership.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <Award className="w-8 h-8 text-green-500 mb-2" />
                <CardTitle>{t('nft.belt.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  {t('nft.belt.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFT;