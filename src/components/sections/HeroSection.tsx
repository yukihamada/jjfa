import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-4 py-20">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          JJFA - 柔術 for ALL
        </h1>
        <p className="text-2xl mb-8 text-slate-600 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          すべての人に柔術の力と可能性を
        </p>
        <div className="prose prose-lg max-w-3xl mx-auto mb-12 text-slate-600">
          <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            JJFA（Jiu-Jitsu for All）は、年齢・性別・経験問わず、柔術を通じて人々をつなげ、より健康的で豊かなコミュニティを創造することを目指しています。私たちは、柔術が「フィジカルチェス」と呼ばれるほど高度な戦略性を備え、技術によって体格差を超える素晴らしい競技であることを、より多くの方々に知っていただきたいと考えています。
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <Link to="/community">
            <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              コミュニティに参加
            </Button>
          </Link>
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