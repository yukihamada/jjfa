import { motion } from "framer-motion";

export const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgb(241 245 249), rgb(255 255 255), rgb(248 250 252))",
            "linear-gradient(to bottom right, rgb(248 250 252), rgb(241 245 249), rgb(255 255 255))",
            "linear-gradient(to bottom right, rgb(255 255 255), rgb(248 250 252), rgb(241 245 249))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};