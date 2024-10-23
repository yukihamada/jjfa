import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t('hero.title')}
        </h1>
        <p className="text-xl mb-8 text-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Link to="/community">
            <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              {t('hero.joinCommunity')}
            </Button>
          </Link>
          <Link to="/whitepaper">
            <Button size="lg" variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
              {t('hero.whitepaper')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};