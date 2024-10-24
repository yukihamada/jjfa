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
    "TypeScript/React の深い理解と実務経験",
    "AI/機械学習の実装経験：自然言語処理、画像認識など",
    "ブロックチェーン技術（EthereumやEVM互換チェーンの知識）",
    "Web3.js/Ethers.js の実務経験",
    "スマートコントラクト開発（Solidity）",
    "API設計：RESTfulおよびGraphQL",
    "AWS/クラウドインフラ の設定・管理経験",
  ];

  const preferredSkills = [
    "Solidity での高度なコントラクト設計・開発経験",
    "Next.js を用いた高性能なWebアプリ開発",
    "GraphQL の深い知識と実装スキル",
    "CI/CD の導入・管理経験",
    "コンテナ技術（Docker、Kubernetes）",
    "アジャイル開発経験：スクラムマスター経験があれば尚可",
    "オープンソースへの貢献経験",
  ];

  const responsibilities = [
    "Web3プロダクトの設計・開発：分散型プラットフォームの構築",
    "AIを活用した開発効率化の推進：自動化、パフォーマンス改善",
    "ブロックチェーン関連機能の実装：トークンエコノミーやデジタル資産管理",
    "技術選定・アーキテクチャ設計：最新の技術トレンドを取り入れた設計",
    "チーム開発・コードレビュー：チームと協力し高品質なコードを維持",
    "技術文書の作成・管理：知識共有とドキュメント管理",
  ];

  const benefits = [
    "リモートワーク可能：自由な働き方を支援",
    "フレックスタイム制：ライフスタイルに合わせて柔軟な勤務時間",
    "書籍購入支援：スキルアップのための書籍代をサポート",
    "カンファレンス参加支援：国内外の技術イベント参加をサポート",
    "最新技術スタック：常に最前線の技術環境を提供",
    "JJFAトークン付与：プロジェクトの成功と共に報酬を受け取るチャンス",
    "柔術練習環境の提供：JJFA専用のトレーニング施設を利用可能",
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
              <CardDescription className="text-base mt-2">
                {isJapanese 
                  ? "Web3とAIを活用した次世代柔術コミュニティプラットフォームの開発に挑戦し、共に新たな柔術の価値を生み出しましょう。" 
                  : "Join us in developing a next-generation Jiu-Jitsu community platform utilizing Web3 and AI, creating new value in the world of Jiu-Jitsu."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {isJapanese ? "必須スキル" : "Required Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {isJapanese ? "歓迎スキル" : "Preferred Skills"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {preferredSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">
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
                <h3 className="font-semibold text-lg mb-4">
                  {isJapanese ? "福利厚生" : "Benefits"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <Badge key={benefit} variant="outline" className="text-sm py-1">
                      {benefit}
                    </Badge>
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