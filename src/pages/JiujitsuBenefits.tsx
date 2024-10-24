import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Trophy, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const JiujitsuBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          柔術の魅力を知る
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Brain className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>戦略的思考</CardTitle>
              <CardDescription>
                柔術は「身体のチェス」とも呼ばれ、戦略的思考力を養います。体格差を技術でカバーできる奥深いスポーツです。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Heart className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>健康的な生活</CardTitle>
              <CardDescription>
                全身運動による体力向上、柔軟性の向上、ストレス解消など、心身の健康に貢献します。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Users className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>コミュニティ</CardTitle>
              <CardDescription>
                年齢や性別、国籍を問わず、共に学び合える温かいコミュニティです。生涯の友人と出会えます。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>目標達成</CardTitle>
              <CardDescription>
                帯の昇級や大会での成績など、明確な目標設定と達成による自己成長を実感できます。
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader>
              <CardTitle>柔術を始めるには</CardTitle>
              <CardDescription>
                柔術は誰でも始められます。初心者向けのクラスも充実しており、経験豊富な指導者がサポートします。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>推奨する準備：</p>
              <ul className="list-disc list-inside space-y-2">
                <li>動きやすい服装（Tシャツ、ハーフパンツなど）</li>
                <li>水分補給用の飲み物</li>
                <li>タオル</li>
                <li>やる気と好奇心！</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/trial-class">
              <Button 
                size="lg"
                className="bg-slate-800 text-white hover:bg-slate-700"
              >
                無料体験を予約する <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JiujitsuBenefits;