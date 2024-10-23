import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Video, Globe, Calendar } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";
import { TeamSection } from "@/components/TeamSection";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            {t('hero.title')}
          </h1>
          <p className="text-xl mb-8 text-slate-600">{t('hero.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700">
              {t('hero.joinCommunity')}
            </Button>
            <Link to="/whitepaper">
              <Button size="lg" variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
                {t('hero.whitepaper')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{t('events.title')}</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-lg transition-all">
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
                {t('events.location')}: 大田区産業プラザPiO<br />
                {t('events.access')}: 京浜急行「京急蒲田」駅より徒歩約3分
              </p>
              <a 
                href="https://jiufight.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
                  {t('events.viewDetails')}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{t('mission.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="https://jiufight.com" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-transform hover:scale-105">
              <CardHeader>
                <Trophy className="w-10 h-10 text-slate-800 mb-4" />
                <CardTitle className="text-slate-800">{t('mission.tournament.title')}</CardTitle>
                <CardDescription className="text-slate-600">
                  {t('mission.tournament.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Users className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">{t('mission.community.title')}</CardTitle>
              <CardDescription className="text-slate-600">
                {t('mission.community.description')}
              </CardDescription>
            </CardHeader>
          </Card>

          <a href="https://jjlab.jp" target="_blank" rel="noopener noreferrer">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-transform hover:scale-105">
              <CardHeader>
                <Video className="w-10 h-10 text-slate-800 mb-4" />
                <CardTitle className="text-slate-800">{t('mission.education.title')}</CardTitle>
                <CardDescription className="text-slate-600">
                  {t('mission.education.description')}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Globe className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">{t('mission.global.title')}</CardTitle>
              <CardDescription className="text-slate-600">
                {t('mission.global.description')}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <TeamSection />

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">{t('token.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">{t('token.discount.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                {t('token.discount.description')}
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">{t('token.content.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                {t('token.content.description')}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">{t('contact.title')}</h2>
        <p className="mb-4 text-slate-600">{t('contact.email')}: info@jjfa.com</p>
        <p className="mb-4 text-slate-600">{t('contact.phone')}: 03-1234-5678</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
            Twitter
          </Button>
          <Button variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
            Facebook
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;