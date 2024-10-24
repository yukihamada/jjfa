import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const JiujitsuBenefitsSection = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {isJapanese ? '柔術の魅力' : 'Benefits of Jiu-Jitsu'}
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <Brain className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>{isJapanese ? '戦略的思考' : 'Strategic Thinking'}</CardTitle>
            <CardDescription>
              {isJapanese ? '体格差を技術で克服できる、フィジカルチェスと呼ばれる競技です。' : 'A sport where technique can overcome physical differences, often called physical chess.'}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-100">
          <CardHeader>
            <Heart className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>{isJapanese ? '健康的なライフスタイル' : 'Healthy Lifestyle'}</CardTitle>
            <CardDescription>
              {isJapanese ? '全身運動として効果的で、心身の健康を促進します。' : 'Effective for full-body exercise and promoting physical and mental health.'}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <CardHeader>
            <Users className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>{isJapanese ? 'コミュニティ' : 'Community'}</CardTitle>
            <CardDescription>
              {isJapanese ? '年齢や性別を問わず、共に学べる温かいコミュニティです。' : 'A warm community where people of all ages and genders can learn together.'}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 delay-300">
        <Link to="/jiujitsu-benefits">
          <Button 
            variant="outline" 
            className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
          >
            {isJapanese ? 'もっと詳しく' : 'Learn More'}
          </Button>
        </Link>
      </div>
    </section>
  );
};