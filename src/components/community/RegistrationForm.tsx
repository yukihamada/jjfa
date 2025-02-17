import { useTranslation } from "react-i18next";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/profile');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  return (
    <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-bottom-4">
      <CardContent className="pt-6">
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
            redirectTo={redirectUrl}
            view="sign_up"
            localization={{
              variables: {
                sign_up: {
                  email_label: t('community.form.email'),
                  password_label: t('community.form.password'),
                  button_label: "無料会員登録",
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
          <div className="text-center text-sm text-slate-600">
            <Link to="/terms-of-service" className="hover:text-slate-800 underline">
              利用規約
            </Link>
            {" "}をご確認の上、登録してください。
          </div>
        </div>
      </CardContent>
    </Card>
  );
};