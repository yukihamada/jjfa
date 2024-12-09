import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
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
          もしあなたが、柔術の新たな可能性を切り開くこの試みに興味を持ってくださったなら、ぜひコミュニティに参加してください。トークン保有による投票参加、道場でのトレーニング、イベントの企画や提案など、あなたの関わり方は自由です。JJFAは、共に柔術の未来を創造する仲間をお待ちしています。
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
  );
};