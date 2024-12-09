import { motion } from "framer-motion";

export const NFTHero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          JJFA Member Token
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          JJFAの社員権NFTを取得して、DAOの意思決定に参加し、
          コミュニティの発展に貢献しましょう。
        </motion.p>
      </div>
    </section>
  );
};