import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AuthForm } from "./registration/AuthForm";
import { BenefitsList } from "./registration/BenefitsList";

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="w-full max-w-6xl mx-auto px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-slate-600 font-medium">新しい柔術の世界へようこそ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            {t('community.joinTitle')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('community.joinSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100/50 to-fuchsia-100/50 rounded-2xl blur-3xl" />
            <AuthForm />
          </motion.div>

          <BenefitsList />
        </div>
      </div>
    </div>
  );
};