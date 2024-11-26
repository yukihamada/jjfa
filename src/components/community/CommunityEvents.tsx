import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const CommunityEvents = () => {
  const { t } = useTranslation();

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
            {t('community.events.title')}
          </motion.h2>
          
          <motion.div 
            variants={container}
            className="grid gap-6 md:grid-cols-2"
          >
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">{t('community.events.tournament.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.tournament.date')}</p>
              <p>{t('community.events.tournament.description')}</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">{t('community.events.camp.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.camp.date')}</p>
              <p>{t('community.events.camp.description')}</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">{t('community.events.seminar.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.seminar.date')}</p>
              <p>{t('community.events.seminar.description')}</p>
            </motion.div>
            
            <motion.div 
              variants={item}
              className="border p-4 rounded-lg"
            >
              <h4 className="font-semibold">{t('community.events.openmat.title')}</h4>
              <p className="text-sm text-gray-500">{t('community.events.openmat.date')}</p>
              <p>{t('community.events.openmat.description')}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};