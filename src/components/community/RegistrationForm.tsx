import { useTranslation } from "react-i18next";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Shield, UserPlus, Users, Trophy, BookOpen, Vote } from "lucide-react";
import { motion } from "framer-motion";

const benefitItems = [
  {
    icon: Trophy,
    title: "大会参加",
    description: "JJFA公式大会・競技会への参加資格を得られます"
  },
  {
    icon: BookOpen,
    title: "トレーニング",
    description: "特別トレーニングプログラムやセミナーに参加できます"
  },
  {
    icon: Users,
    title: "コミュニティ",
    description: "JJFA会員との交流やイベントに参加できます"
  },
  {
    icon: Vote,
    title: "DAO参加",
    description: "JJFAの意思決定に参加し、未来を共に創造します"
  }
];

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

  const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-slate-800">
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
        >
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
            <CardHeader className="space-y-1">
              <div className="flex items-center space-x-2 justify-center mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <UserPlus className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                新規会員登録
              </CardTitle>
              <CardDescription className="text-center">
                JJFAコミュニティに参加して、柔術の世界を広げましょう
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: '#1e293b',
                        brandAccent: '#334155'
                      }
                    }
                  },
                  className: {
                    container: 'space-y-4',
                    button: 'bg-primary hover:bg-primary/90 text-white transition-colors',
                    anchor: 'text-primary hover:text-primary/90 transition-colors',
                    divider: 'bg-slate-200',
                    message: 'text-slate-600',
                    label: 'text-slate-700'
                  }
                }}
                providers={['google']}
                redirectTo={redirectUrl}
                view="sign_up"
                localization={{
                  variables: {
                    sign_up: {
                      email_label: t('community.form.email'),
                      password_label: t('community.form.password'),
                      button_label: "新規登録",
                      link_text: "すでにアカウントをお持ちの方",
                      password_input_placeholder: t('community.form.passwordPlaceholder'),
                      email_input_placeholder: t('community.form.emailPlaceholder'),
                      confirmation_text: "確認メールを送信しました。メールをご確認ください。",
                    },
                    sign_in: {
                      email_label: t('community.form.email'),
                      password_label: t('community.form.password'),
                      button_label: "ログイン",
                      link_text: "アカウントをお持ちでない方",
                      password_input_placeholder: t('community.form.passwordPlaceholder'),
                      email_input_placeholder: t('community.form.emailPlaceholder'),
                    },
                    forgotten_password: {
                      link_text: "パスワードをお忘れの方",
                      button_label: t('community.form.resetPassword'),
                      email_label: t('community.form.email'),
                      email_input_placeholder: t('community.form.emailPlaceholder'),
                    }
                  }
                }}
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            会員特典
          </h2>
          {benefitItems.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};