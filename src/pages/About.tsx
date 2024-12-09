import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Users, Shield, Heart, BookOpen } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="JJFAについて" 
        description="JJFAは、ブラジリアン柔術が持つ可能性を最大限に引き出し、世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">JJFAについて</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            JJFA（Jiu-Jitsu For ALL）は、ブラジリアン柔術が持つ可能性を最大限に引き出し、世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。私たちはWeb3技術とトークンエコノミーを活用し、多様な背景を持つ参加者が対等に交流・協力できる、新しい柔術コミュニティの在り方を模索しています。
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">JJFAのビジョン</h2>
          <div className="bg-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">「柔術をすべての人へ」</h3>
            <p className="text-lg text-gray-700">
              私たちは、ブラジリアン柔術が単なる競技ではなく、礼儀・敬意・謙虚さといった精神性を備えた「共通言語」であると考えています。JJFAは、この柔術が持つ人と人を結ぶ力を最大化し、国境・文化・世代・性別を超えて、誰もが安心して参加できるコミュニティを築き上げます。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">ミッションと目指す方向性</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">柔術普及への貢献</h3>
              <p className="text-gray-600">
                新規道場のサポート、地域大会の活性化、オンライン教育コンテンツの拡充を通じて、より多くの人が柔術に触れる機会を提供します。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">公平な価値分配</h3>
              <p className="text-gray-600">
                Web3技術を用いて、初期から柔術界に貢献してきたサポーターや小規模道場、現役選手が正当な報酬と評価を得られる仕組みを整えます。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">持続的なコミュニティ形成</h3>
              <p className="text-gray-600">
                情報・技術の共有を促進し、DAO（分散型自律組織）によるガバナンスモデルでコミュニティ全体が重要な意思決定に参加できる体制を確立します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">私たちの価値観</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">インクルージョン（包摂性）</h3>
              <p className="text-gray-600">
                年齢、性別、国籍、経験レベルを問わず、あらゆる人が柔術の恩恵を享受できるよう、門戸を常に開放します。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">透明性と信頼</h3>
              <p className="text-gray-600">
                トークン発行やガバナンスプロセスを明確化し、スマートコントラクト監査や定期的な報告を行うことで、コミュニティとの信頼関係を築きます。
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">協働と共創</h3>
              <p className="text-gray-600">
                道場オーナー、指導者、選手、サポーター、テクノロジストなど、多様な関係者が対等に意見交換・連携できる場を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">行動を起こそう</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            もしあなたが、柔術の新たな可能性を切り開くこの試みに興味を持ってくださったなら、ぜひコミュニティに参加してください。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link to="/community">
                <Users className="mr-2 h-4 w-4" />
                コミュニティに参加
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/whitepaper">
                <BookOpen className="mr-2 h-4 w-4" />
                ホワイトペーパーを読む
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;