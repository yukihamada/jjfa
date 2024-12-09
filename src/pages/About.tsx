import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Globe, 
  Users, 
  Scale, 
  Building, 
  Trophy,
  BookOpen,
  Network,
  Heart,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const { t } = useTranslation();
  
  const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            {...fadeInUpVariants}
          >
            JJFA（Jiu-Jitsu For ALL）
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            {...fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            ブラジリアン柔術が持つ可能性を最大限に引き出し、世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。
          </motion.p>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ビジョン</h2>
            <p className="text-xl text-gray-600">"柔術をすべての人へ"</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>インクルージョン</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  年齢、性別、国籍、経験レベルを問わず、あらゆる人が柔術の恩恵を享受できる環境を
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Scale className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>透明性と信頼</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  トークン発行やガバナンスプロセスを明確化し、コミュニティとの信頼関係を構築
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>協働と共創</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  多様な関係者が対等に意見交換・連携できる場を提供
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Initiatives Section */}
      <motion.section 
        className="py-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">主な取り組み</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Building className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>道場サポート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">資金援助、ノウハウ共有を通じた新規道場支援</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Trophy className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>大会支援</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">大会・イベントの開催支援とコミュニティ活性化</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle>教育支援</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">オンライン教育コンテンツを通じた技術共有</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* DAO Governance Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Network className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">DAOによるガバナンス</h2>
            <p className="text-lg text-gray-600 mb-8">
              JJFAはDAO（分散型自律組織）の仕組みを取り入れ、トークン保有者がプロジェクトの方針や資金配分、開発計画などに投票で参加できる「参加型ガバナンス」を実現します。
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link to="/whitepaper" className="inline-flex items-center">
                ホワイトペーパーを読む
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">行動を起こそう</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            柔術の新たな可能性を切り開くこの試みに、あなたも参加してみませんか？
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link to="/community">
                コミュニティに参加
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white">
              <Link to="/contact">
                お問い合わせ
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;