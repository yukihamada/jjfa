import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Trophy, ArrowRight, Activity, Dumbbell, Smile, CheckCircle2, Clock, BookOpen } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const JiujitsuBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          柔術の魅力を知る
        </h1>

        <Tabs defaultValue="health" className="w-full mb-16">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="health">健康効果</TabsTrigger>
            <TabsTrigger value="skills">総合的スキル</TabsTrigger>
            <TabsTrigger value="community">コミュニティ</TabsTrigger>
          </TabsList>

          <TabsContent value="health" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <Activity className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>科学的に実証された健康効果</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        1時間の練習で最大800kcalの消費が可能
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        基礎代謝の向上（筋肉量増加による）
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        内臓脂肪の減少（研究により実証）
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <Heart className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>医学的なメリット</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        心血管系の健康維持
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        骨密度の向上
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        認知機能の向上
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <Brain className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>メンタル面の強化</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        自己肯定感の向上
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        ストレス耐性の向上
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        集中力と判断力の向上
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <BookOpen className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>ビジネススキルとの相乗効果</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        戦略的思考力
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        リーダーシップ
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        コミュニケーション力
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <Users className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>多様な出会いの場</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        経営者から学生まで幅広い交流
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        国際的なネットワークの形成
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        年齢や性別を超えた絆づくり
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <Trophy className="w-12 h-12 text-slate-800 mb-4" />
                  <CardTitle>イベント＆コミュニティ</CardTitle>
                  <CardDescription>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        定期的な技術セミナー
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        国内外の大会参加機会
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        交流会・懇親会の開催
                      </li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader>
              <CardTitle>始める前の不安を解消！</CardTitle>
              <CardDescription>
                よくある心配と解決策
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
                    <div>
                      <h4 className="font-semibold">体力に自信がない</h4>
                      <p className="text-sm text-slate-600">段階的なプログラムで無理なく始められます</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
                    <div>
                      <h4 className="font-semibold">怪我が心配</h4>
                      <p className="text-sm text-slate-600">安全第一の指導で、初心者の怪我率は一般的なスポーツより低いことが統計で判明</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
                    <div>
                      <h4 className="font-semibold">年齢制限がある？</h4>
                      <p className="text-sm text-slate-600">6歳から70代まで、幅広い年齢層が実践中！</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
                    <div>
                      <h4 className="font-semibold">運動音痴でも大丈夫？</h4>
                      <p className="text-sm text-slate-600">基本から丁寧に指導。多くの方が3ヶ月で基礎を習得</p>
                    </div>
                  </div>
                </div>
              </div>
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