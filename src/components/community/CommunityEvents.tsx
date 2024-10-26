import { motion } from "framer-motion";

export const CommunityEvents = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={item}
            className="text-3xl font-bold text-center mb-12"
          >
            イベント
          </motion.h2>
          
          <motion.div 
            variants={container}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">月例トーナメント</h4>
              <p className="text-sm text-gray-500">毎月第3土曜日</p>
              <p>白帯から黒帯まで参加可能な公式トーナメント</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">ハワイ合宿</h4>
              <p className="text-sm text-gray-500">2025年2月28日 - 3月13日</p>
              <p>世界チャンピオンと出稽古強化トレーニング</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">セミナー</h4>
              <p className="text-sm text-gray-500">毎週日曜日</p>
              <p>様々な技術を学べるテクニカルセミナー</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">オープンマット</h4>
              <p className="text-sm text-gray-500">毎週土曜日</p>
              <p>自由に練習できる時間帯を提供</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};