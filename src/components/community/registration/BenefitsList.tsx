import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { benefitItems } from "./benefitItems";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const BenefitsList = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center space-x-2">
        <Trophy className="w-6 h-6 text-amber-500" />
        <span>会員特典</span>
      </h2>
      {benefitItems.map((benefit, index) => (
        <motion.div
          key={index}
          variants={item}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-transparent transform group-hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};