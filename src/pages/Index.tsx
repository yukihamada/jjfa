import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Video, Globe, User, Briefcase } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
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

      {/* Team Section */}
      <section className="py-20 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">チームメンバー</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <User className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">濱田優貴</CardTitle>
              <CardDescription className="text-slate-600">
                東京理科大学在学中に起業し、その後メルカリに参画して取締役CPOとして活躍。プロダクトの全体管理や技術分野のリードを行い、同社の成長に貢献。現在は令和トラベルやキャスターなどの社外取締役として、スタートアップの成長支援を続けています。新しいビジネスのデザインに情熱を持ち、常にテクノロジーでの社会問題解決を目指しています。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">村田良蔵</CardTitle>
              <CardDescription className="text-slate-600">
                ブラジリアン柔術の世界チャンピオンで、日本人初のSJJIF世界選手権での優勝者。北海道を拠点に柔術の普及と指導に力を注ぎ、安全で効果的な技術を通じて、多くの初心者から上級者までをサポートしています。彼の指導スタイルは理論に基づいており、実戦的でありながら生徒に対して丁寧なアプローチを心がけています。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Globe className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">堤達生</CardTitle>
              <CardDescription className="text-slate-600">
                ベンチャーキャピタル「STRIVE」の代表パートナーで、スタートアップ企業の成長を支援するエキスパート。特にアーリーステージの投資に注力し、日本や東南アジア、インドなどでの企業支援に取り組んでいます。彼の理念は、「起業家と共に汗をかき、共に戦う」という姿勢で、社会的な課題解決を目指しています。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">立石修也</CardTitle>
              <CardDescription className="text-slate-600">
                YAWARA柔術アカデミー所属の柔術家。慶應義塾大学経済学部卒業後、2022年から本格的に柔術の世界に参入。わずか2年弱の競技歴ながら、SJJIF世界選手権青帯の部で優勝するなど急成長を遂げています。柔術を「ボディチェス」と表現し、戦略的なスポーツとしての魅力を伝える活動も行っています。2024年には再び世界選手権で優勝を果たし、その実力が注目されています。
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Briefcase className="w-10 h-10 text-slate-800 mb-4" />
              <CardTitle className="text-slate-800">粟田健太郎</CardTitle>
              <CardDescription className="text-slate-600">
                ライフタイムベンチャーズの代表パートナー。横浜や沖縄を拠点に、プレシードやシード段階のスタートアップ企業への投資に特化。OIST（沖縄科学技術大学院大学）との連携で「OIST-Lifetime Ventures Fund」を設立し、科学技術を活用したスタートアップのエコシステム構築に取り組んでいます。資金提供に加え、事業計画策定や初期の顧客開拓、チームビルディングなど、幅広いサポートを提供しています。
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