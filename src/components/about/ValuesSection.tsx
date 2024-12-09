import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Scale, Network } from "lucide-react";

export const ValuesSection = () => {
  return (
    <motion.section 
      className="py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">私たちの価値観</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <CardTitle>インクルージョン（包摂性）</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                年齢、性別、国籍、経験レベルを問わず、あらゆる人が柔術の恩恵を享受できるよう、門戸を常に開放します。
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
                トークン発行やガバナンスプロセスを明確化し、スマートコントラクト監査や定期的な報告を行うことで、コミュニティとの信頼関係を築きます。
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Network className="w-12 h-12 text-purple-500 mb-4" />
              <CardTitle>協働と共創</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                道場オーナー、指導者、選手、サポーター、テクノロジストなど、多様な関係者が対等に意見交換・連携できる場を提供します。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};