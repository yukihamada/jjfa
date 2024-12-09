import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <motion.section 
      className="relative py-20 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          JJFAについて
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          JJFA（Jiu-Jitsu For ALL）は、ブラジリアン柔術が持つ可能性を最大限に引き出し、世界中の人々が公平かつ持続的にこのスポーツと文化を楽しめるエコシステムを創出する組織です。私たちはWeb3技術とトークンエコノミーを活用し、多様な背景を持つ参加者が対等に交流・協力できる、新しい柔術コミュニティの在り方を模索しています。
        </motion.p>
      </div>
    </motion.section>
  );
};