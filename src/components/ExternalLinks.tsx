import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const ExternalLinks = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        {isJapanese ? 'サービス一覧' : 'Our Services'}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-slate-800">JiuFight</CardTitle>
            <CardDescription>
              {isJapanese 
                ? '選手と主催者の両方にとって使いやすい、効率的な大会エントリーと管理プラットフォーム。'
                : 'Streamlined tournament entry and management platform. A user-friendly tournament management system for both athletes and organizers.'}
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
                {isJapanese ? 'ウェブサイトへ' : 'Visit Website'}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-slate-800">JiuJitsu Lab</CardTitle>
            <CardDescription>
              {isJapanese
                ? '柔術の技術解説と最新情報。全てのレベルの練習者のための総合的な情報プラットフォーム。'
                : 'Technical explanations and latest updates in Jiu-Jitsu. A comprehensive information platform for practitioners of all levels.'}
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
                {isJapanese ? 'ウェブサイトへ' : 'Visit Website'}
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