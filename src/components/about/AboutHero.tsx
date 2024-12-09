import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <motion.section 
      className="relative py-32 px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center relative z-10 max-w-3xl">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          JJFAについて
        </motion.h1>
        <motion.p 
          className="text-lg text-slate-600 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          JJFA（Jiu-Jitsu For ALL）は、ブラジリアン柔術の可能性を最大限に引き出し、
          世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。
        </motion.p>
      </div>
    </motion.section>
  );
};