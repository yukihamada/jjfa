import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const VisionSection = () => {
  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">JJFAのビジョン</h2>
          <p className="text-xl text-gray-600 mb-8">「柔術をすべての人へ」</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            私たちは、ブラジリアン柔術が単なる競技ではなく、礼儀・敬意・謙虚さといった精神性を備えた「共通言語」であると考えています。JJFAは、この柔術が持つ人と人を結ぶ力を最大化し、国境・文化・世代・性別を超えて、誰もが安心して参加できるコミュニティを築き上げます。
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>柔術普及への貢献</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                新規道場のサポート、地域大会の活性化、オンライン教育コンテンツの拡充を通じて、より多くの人が柔術に触れる機会を提供します。
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>公平な価値分配</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Web3技術を用いて、初期から柔術界に貢献してきたサポーターや小規模道場、現役選手が正当な報酬と評価を得られる仕組みを整えます。
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>持続的なコミュニティ形成</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                情報・技術の共有を促進し、DAO（分散型自律組織）によるガバナンスモデルでコミュニティ全体が重要な意思決定に参加できる体制を確立します。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};