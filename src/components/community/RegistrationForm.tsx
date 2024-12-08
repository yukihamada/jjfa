import { useTranslation } from "react-i18next";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Shield, UserPlus, Users, Trophy, BookOpen, Vote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefitItems = [
  {
    icon: Trophy,
    title: "大会参加",
    description: "JJFA公式大会・競技会への参加資格を得られます",
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: BookOpen,
    title: "トレーニング",
    description: "特別トレーニングプログラムやセミナーに参加できます",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "コミュニティ",
    description: "JJFA会員との交流やイベントに参加できます",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Vote,
    title: "DAO参加",
    description: "JJFAの意思決定に参加し、未来を共に創造します",
    gradient: "from-green-500 to-emerald-500"
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
            <Card className="relative backdrop-blur-sm bg-white/80 shadow-xl border-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-2 justify-center mb-2">
                  <Shield className="w-6 h-6 text-violet-500" />
                  <UserPlus className="w-6 h-6 text-fuchsia-500" />
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
                          brand: '#8B5CF6',
                          brandAccent: '#7C3AED'
                        }
                      }
                    },
                    className: {
                      container: 'space-y-4',
                      button: 'bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
                      anchor: 'text-violet-600 hover:text-fuchsia-600 transition-colors',
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
        </div>
      </div>
    </div>
  );
};