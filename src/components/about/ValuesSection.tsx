import { motion } from "framer-motion";
import { Users, Scale, Network } from "lucide-react";

export const ValuesSection = () => {
  return (
    <motion.section 
      className="py-20 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">私たちの価値観</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-slate-800">インクルージョン</h3>
            <p className="text-slate-600">
              年齢、性別、国籍、経験レベルを問わず、あらゆる人が柔術の恩恵を享受できる環境を作ります。
            </p>
          </div>
          <div className="text-center">
            <Scale className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-slate-800">透明性と信頼</h3>
            <p className="text-slate-600">
              トークン発行やガバナンスプロセスを明確化し、コミュニティとの信頼関係を築きます。
            </p>
          </div>
          <div className="text-center">
            <Network className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-slate-800">協働と共創</h3>
            <p className="text-slate-600">
              道場オーナー、指導者、選手、サポーターなど、多様な関係者が対等に連携できる場を提供します。
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};