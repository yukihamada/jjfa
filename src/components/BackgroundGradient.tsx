import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgb(248 250 252), rgba(239 246 255, 0.3), rgba(245 243 255, 0.2))",
            "linear-gradient(to bottom right, rgba(245 243 255, 0.2), rgb(248 250 252), rgba(239 246 255, 0.3))",
            "linear-gradient(to bottom right, rgba(239 246 255, 0.3), rgba(245 243 255, 0.2), rgb(248 250 252))",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};