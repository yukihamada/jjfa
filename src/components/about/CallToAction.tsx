import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CallToAction = () => {
  return (
    <motion.section 
      className="py-20 px-4 bg-purple-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-white">行動を起こそう</h2>
        <p className="text-lg mb-8 text-white/90">
          柔術の新たな可能性を切り開くこの試みに、あなたも参加してみませんか？
          トークン保有による投票参加、道場でのトレーニング、イベントの企画など、
          あなたの関わり方は自由です。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="secondary" size="lg">
            <Link to="/community">
              コミュニティに参加
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            <Link to="/contact">
              お問い合わせ
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};