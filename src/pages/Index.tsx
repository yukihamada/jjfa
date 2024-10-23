import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Video, Globe } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            JJFA - 柔術 for ALL
          </h1>
          <p className="text-xl mb-8 text-slate-600">全ての人々に柔術の魅力を届ける</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700">
              コミュニティに参加
            </Button>
            <Link to="/whitepaper">
              <Button size="lg" variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
                ホワイトペーパー
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">ミッション</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">JiuFight トーナメント</CardTitle>
              <CardDescription className="text-slate-600">
                全てのレベルの選手が参加できる柔術トーナメント
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Users className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">コミュニティ</CardTitle>
              <CardDescription className="text-slate-600">
                互いに学び合い、高め合うプラットフォーム
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Video className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">教育コンテンツ</CardTitle>
              <CardDescription className="text-slate-600">
                レベル別の技術解説と質疑応答
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Globe className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">グローバル展開</CardTitle>
              <CardDescription className="text-slate-600">
                国際的な交流と柔術の普及
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Token Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">JJFAトークンの特典</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">大会エントリー割引</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                トークン保有者は常時早割価格でエントリーが可能です。保有数に応じて追加割引も適用されます。
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">限定コンテンツ</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                トップ選手の技術動画やオンラインセミナーに参加できます。
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">お問い合わせ</h2>
        <p className="mb-4 text-slate-600">メール: info@jjfa.com</p>
        <p className="mb-4 text-slate-600">電話: 03-1234-5678</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
            Twitter
          </Button>
          <Button variant="outline" className="text-slate-800 border-slate-800 hover:bg-slate-100">
            Facebook
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
