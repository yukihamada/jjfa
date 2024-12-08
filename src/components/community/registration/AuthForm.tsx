import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, UserPlus } from "lucide-react";
import { useTranslation } from "react-i18next";

export const AuthForm = () => {
  const { t } = useTranslation();
  const redirectUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

  return (
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
  );
};