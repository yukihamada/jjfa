
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[500px] flex items-center justify-center px-4 py-16">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          JJFA - 柔術 for ALL
        </h1>
        <p className="text-2xl mb-6 text-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          柔術の素晴らしさをすべての人へ
        </p>
        <div className="prose prose-lg max-w-2xl mx-auto mb-8 text-slate-600">
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            JJFA（Jiu-Jitsu for All）は、年齢・性別・経験を問わず誰でもブラジリアン柔術を楽しめることを目指した取り組みです。柔術は「身体を使ったチェス」と例えられるほど戦略性が高く、力任せではなく技術や工夫で相手を制する奥深さがあります。難しい技術や強い力は必要ないので、経験の有無や年齢・性別を問わず、どなたでも楽しく始められます。
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Link to="/whitepaper">
            <Button size="lg" variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105">
              ホワイトペーパーを見る
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
