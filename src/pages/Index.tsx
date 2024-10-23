import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Video, Globe } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/95 relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            JJFA - 柔術 for ALL
          </h1>
          <p className="text-xl mb-8 text-gray-300">全ての人々に柔術の魅力を届ける</p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            コミュニティに参加
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">ミッション</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-10 h-10 text-white mb-4" />
              <CardTitle className="text-white">JiuFight トーナメント</CardTitle>
              <CardDescription className="text-gray-300">
                全てのレベルの選手が参加できる柔術トーナメント
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Users className="w-10 h-10 text-white mb-4" />
              <CardTitle className="text-white">コミュニティ</CardTitle>
              <CardDescription className="text-gray-300">
                互いに学び合い、高め合うプラットフォーム
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Video className="w-10 h-10 text-white mb-4" />
              <CardTitle className="text-white">教育コンテンツ</CardTitle>
              <CardDescription className="text-gray-300">
                レベル別の技術解説と質疑応答
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Globe className="w-10 h-10 text-white mb-4" />
              <CardTitle className="text-white">グローバル展開</CardTitle>
              <CardDescription className="text-gray-300">
                国際的な交流と柔術の普及
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Token Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">JJFAトークンの特典</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">大会エントリー割引</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                トークン保有者は常時早割価格でエントリーが可能です。保有数に応じて追加割引も適用されます。
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">限定コンテンツ</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                トップ選手の技術動画やオンラインセミナーに参加できます。
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">お問い合わせ</h2>
        <p className="mb-4 text-gray-300">メール: info@jjfa.com</p>
        <p className="mb-4 text-gray-300">電話: 03-1234-5678</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Twitter
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Facebook
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;