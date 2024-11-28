import { useTranslation } from "react-i18next";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-bottom-4">
      <CardHeader className="space-y-2">
        <CardTitle className="text-2xl font-bold text-center text-slate-800">
          {t('community.joinTitle')}
        </CardTitle>
        <CardDescription className="text-center text-slate-600">
          {t('community.joinSubtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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
                button: 'bg-slate-800 hover:bg-slate-700 text-white',
                anchor: 'text-slate-600 hover:text-slate-800',
                divider: 'bg-slate-200',
                message: 'text-slate-600',
                label: 'text-slate-700'
              }
            }}
            providers={['google']}
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
        </div>
      </CardContent>
    </Card>
  );
};