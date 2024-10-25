import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Mail, Brain, Users, MessageSquare, Dumbbell, Bot, Code, Sparkles, Clock, BookOpen, Calculator, Globe, Bitcoin } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "@/components/BackgroundGradient";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const positions = [
    {
      title: isJapanese ? "フルスタックエンジニア" : "Full-Stack Engineer",
      description: isJapanese 
        ? "AIとWeb3を活用して、柔術の新しい価値を共に創造しましょう。経験よりもあなたの可能性を重視します。" 
        : "Let's create new value in Jiu-Jitsu using AI and Web3. We value your potential more than experience.",
      skills: [
        {
          icon: <Bot className="w-4 h-4" />,
          skill: "AIツールの効果的な活用能力：GitHub Copilot, ChatGPT等の実践的な活用経験",
        },
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
      ]
    },
    {
      title: isJapanese ? "税務・国際税務スペシャリスト" : "Tax & International Tax Specialist",
      description: isJapanese 
        ? "Web3時代における新しい税務・会計の枠組みを共に創造していきましょう。国際的な税務知識とブロックチェーンへの関心がある方を募集しています。" 
        : "Help us create new tax and accounting frameworks for the Web3 era. We're looking for someone with international tax knowledge and interest in blockchain.",
      skills: [
        {
          icon: <Calculator className="w-4 h-4" />,
          skill: "税理士資格保持者または税務実務経験3年以上",
        },
        {
          icon: <Globe className="w-4 h-4" />,
          skill: "国際税務の知識・経験（特にアジア圏）",
        },
        {
          icon: <Bitcoin className="w-4 h-4" />,
          skill: "暗号資産・NFTに関する税務知識",
        },
        {
          icon: <Brain className="w-4 h-4" />,
          skill: "Web3における新しい税務フレームワークへの関心",
        }
      ]
    },
    {
      title: isJapanese ? "ブロックチェーンスペシャリスト" : "Blockchain Specialist",
      description: isJapanese 
        ? "スマートコントラクトの開発からトークンエコノミーの設計まで、Web3技術を活用したJJFAの未来を共に創造しましょう。" 
        : "From smart contract development to token economy design, help us shape JJFA's future with Web3 technology.",
      skills: [
        {
          icon: <Code className="w-4 h-4" />,
          skill: "Solidity開発経験",
        },
        {
          icon: <Bitcoin className="w-4 h-4" />,
          skill: "トークンエコノミー設計の知識・経験",
        },
        {
          icon: <Brain className="w-4 h-4" />,
          skill: "DAO運営への深い理解",
        },
        {
          icon: <Users className="w-4 h-4" />,
          skill: "コミュニティマネジメントの経験",
        }
      ]
    }
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
      benefit: "最新技術：最先端のツールを活用した開発環境",
    },
    {
      icon: <Dumbbell className="w-4 h-4" />,
      benefit: "柔術練習環境：JJFA専用のトレーニング施設利用可能",
    }
  ];

  return (
    <div className="min-h-screen">
      <BackgroundGradient />
      
      <div className="container mx-auto py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {isJapanese ? "採用情報" : "Career Opportunities"}
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              {isJapanese 
                ? "JJFAで柔術の未来を共に創っていきませんか？" 
                : "Join us in shaping the future of Jiu-Jitsu"}
            </p>
          </div>

          <div className="space-y-8">
            {positions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{position.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {position.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      {isJapanese ? "求める経験・スキル" : "Required Skills"}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {position.skills.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                          {item.icon}
                          <span>{item.skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {index === 0 && (
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        {isJapanese ? "福利厚生" : "Benefits"}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {benefits.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg">
                            {item.icon}
                            <span>{item.benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <Link to="/contact">
                      <Button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700">
                        <Mail className="mr-2 h-4 w-4" />
                        {isJapanese ? "応募する" : "Apply Now"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;