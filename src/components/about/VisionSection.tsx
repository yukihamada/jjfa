import { motion } from "framer-motion";

export const VisionSection = () => {
  return (
    <motion.section 
      className="py-20 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">ビジョン</h2>
          <p className="text-xl text-slate-600 mb-8">「柔術をすべての人へ」</p>
          <p className="text-lg text-slate-600 leading-relaxed">
            私たちは、ブラジリアン柔術が単なる競技ではなく、礼儀・敬意・謙虚さといった精神性を備えた「共通言語」であると考えています。
            JJFAは、この柔術が持つ人と人を結ぶ力を最大化し、国境・文化・世代・性別を超えて、誰もが安心して参加できるコミュニティを築き上げます。
          </p>
        </div>
      </div>
    </motion.section>
  );
};