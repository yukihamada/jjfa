import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trophy, Users, Video, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">JJFA - 柔術 for ALL</h1>
          <p className="text-xl mb-8">全ての人々に柔術の魅力を届ける</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            コミュニティに参加
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ミッション</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Trophy className="w-10 h-10 text-primary mb-4" />
              <CardTitle>JiuFight トーナメント</CardTitle>
              <CardDescription>
                全てのレベルの選手が参加できる柔術トーナメント
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-4" />
              <CardTitle>コミュニティ</CardTitle>
              <CardDescription>
                互いに学び合い、高め合うプラットフォーム
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Video className="w-10 h-10 text-primary mb-4" />
              <CardTitle>教育コンテンツ</CardTitle>
              <CardDescription>
                レベル別の技術解説と質疑応答
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="w-10 h-10 text-primary mb-4" />
              <CardTitle>グローバル展開</CardTitle>
              <CardDescription>
                国際的な交流と柔術の普及
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Token Benefits Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">JJFAトークンの特典</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>大会エントリー割引</CardTitle>
              </CardHeader>
              <CardContent>
                トークン保有者は常時早割価格でエントリーが可能です。保有数に応じて追加割引も適用されます。
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>限定コンテンツ</CardTitle>
              </CardHeader>
              <CardContent>
                トップ選手の技術動画やオンラインセミナーに参加できます。
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">お問い合わせ</h2>
        <p className="mb-4">メール: info@jjfa.com</p>
        <p className="mb-4">電話: 03-1234-5678</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline">Twitter</Button>
          <Button variant="outline">Facebook</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;