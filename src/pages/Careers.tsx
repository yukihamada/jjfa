import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Mail, Brain, Users, MessageSquare, Dumbbell, Bot, Code, Sparkles, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { PageTitle } from "@/components/PageTitle";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const coreSkills = [
    {
      icon: <Bot className="w-4 h-4" />,
      skill: "AIツールの効果的な活用能力：GitHub Copilot, ChatGPT等の実践的な活用経験",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      skill: "優れたコミュニケーション能力：チームでの協力や知識共有に積極的",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      skill: "高い忍耐力と学習意欲：新しい技術への適応と継続的な成長",
    },
    {
      icon: <Dumbbell className="w-4 h-4" />,
      skill: "柔術経験歓迎：実践的な理解があれば更に活かせます",
    }
  ];

  const technicalSkills = [
    {
      icon: <Code className="w-4 h-4" />,
      skill: "TypeScript/Reactの基本的な理解",
    },
    {
      icon: <Brain className="w-4 h-4" />,
      skill: "AI/機械学習への興味と基礎知識",
    },
    {
      icon: <Sparkles className="w-4 h-4" />,
      skill: "Web3技術への関心とブロックチェーンの基礎理解",
    }
  ];

  const responsibilities = [
    "AIを活用した開発効率の最適化と自動化の推進",
    "チームメンバーとの積極的なコラボレーションと知識共有",
    "ユーザー体験を重視したWeb3機能の実装",
    "柔術コミュニティのためのプラットフォーム開発"
  ];

  const benefits = [
    {
      icon: <Users className="w-4 h-4" />,
      benefit: "フレックスタイム制：ライフスタイルに合わせた柔軟な勤務",
    },
    {
      icon: <BookOpen className="w-4 h-4" />,
      benefit: "学習支援：書籍購入、カンファレンス参加のサポート",
    },
    {
      icon: <Bot className="w-4 h-4" />,
      benefit: "最新AI技術：最先端のAIツールを活用した開発環境",
    },
    {
      icon: <Dumbbell className="w-4 h-4" />,
      benefit: "柔術練習環境：JJFA専用のトレーニング施設利用可能",
    }
  ];

  return (
    <div className="min-h-screen">
      <BackgroundGradient />
      <PageTitle title={isJapanese ? "採用情報" : "Careers"} />
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isJapanese ? "エンジニア募集" : "Engineering Positions"}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {isJapanese 
                ? "JJFAで柔術の未来を共に創っていきませんか？" 
                : "Join us in shaping the future of Jiu-Jitsu"}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {isJapanese ? "フルスタックエンジニア" : "Full-Stack Engineer"}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {isJapanese 
                  ? "AIとWeb3を活用して、柔術の新しい価値を共に創造しましょう。経験よりもあなたの可能性を重視します。" 
                  : "Let's create new value in Jiu-Jitsu using AI and Web3. We value your potential more than experience."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  {isJapanese ? "重視するスキル" : "Core Skills"}
                </h3>
                <div className="space-y-3">
                  {coreSkills.map((item) => (
                    <div key={item.skill} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                      {item.icon}
                      <span>{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  {isJapanese ? "技術スキル" : "Technical Skills"}
                </h3>
                <div className="space-y-3">
                  {technicalSkills.map((item) => (
                    <div key={item.skill} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                      {item.icon}
                      <span>{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  {isJapanese ? "主な責任" : "Responsibilities"}
                </h3>
                <ul className="list-disc pl-5 space-y-3">
                  {responsibilities.map((item) => (
                    <li key={item} className="text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {isJapanese ? "福利厚生" : "Benefits"}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((item) => (
                    <div key={item.benefit} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                      {item.icon}
                      <span>{item.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700">
                    <Mail className="mr-2 h-4 w-4" />
                    {isJapanese ? "応募する" : "Apply Now"}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;
