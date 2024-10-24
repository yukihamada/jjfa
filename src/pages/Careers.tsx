import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const requiredSkills = [
    "TypeScript/React",
    "AI/機械学習の実装経験",
    "ブロックチェーン技術",
    "Web3.js/Ethers.js",
    "スマートコントラクト開発",
    "API設計",
    "AWS/クラウドインフラ",
  ];

  const preferredSkills = [
    "Solidity",
    "Next.js",
    "GraphQL",
    "CI/CD",
    "コンテナ技術",
    "アジャイル開発経験",
    "オープンソースへの貢献経験",
  ];

  const responsibilities = [
    "Web3プロダクトの設計・開発",
    "AIを活用した開発効率化の推進",
    "ブロックチェーン関連機能の実装",
    "技術選定・アーキテクチャ設計",
    "チーム開発・コードレビュー",
    "技術文書の作成・管理",
  ];

  const benefits = [
    "リモートワーク可能",
    "フレックスタイム制",
    "書籍購入支援",
    "カンファレンス参加支援",
    "最新技術スタック",
    "JJFAトークン付与",
    "柔術練習環境の提供",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
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
                {isJapanese ? "シニアフルスタックエンジニア" : "Senior Full-Stack Engineer"}
              </CardTitle>
              <CardDescription>
                {isJapanese 
                  ? "Web3とAIを活用した柔術コミュニティプラットフォームの開発" 
                  : "Development of Jiu-Jitsu community platform utilizing Web3 and AI"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">
                  {isJapanese ? "必須スキル" : "Required Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((skill) => (
                    <Badge key={skill} variant="default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {isJapanese ? "歓迎スキル" : "Preferred Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {preferredSkills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {isJapanese ? "主な責任" : "Responsibilities"}
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  {responsibilities.map((item) => (
                    <li key={item} className="text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">
                  {isJapanese ? "福利厚生" : "Benefits"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <Badge key={benefit} variant="outline">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto">
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