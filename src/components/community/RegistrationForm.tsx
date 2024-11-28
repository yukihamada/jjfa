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
              }
            }}
            providers={["google"]}
            redirectTo={`${window.location.origin}/dashboard`}
            localization={{
              variables: {
                sign_up: {
                  email_label: t('community.form.email'),
                  password_label: t('community.form.password'),
                  button_label: t('community.form.signUp'),
                  link_text: t('community.form.haveAccount'),
                  password_input_placeholder: t('community.form.passwordPlaceholder'),
                  email_input_placeholder: t('community.form.emailPlaceholder'),
                },
                sign_in: {
                  email_label: t('community.form.email'),
                  password_label: t('community.form.password'),
                  button_label: t('community.form.signIn'),
                  link_text: t('community.form.noAccount'),
                  password_input_placeholder: t('community.form.passwordPlaceholder'),
                  email_input_placeholder: t('community.form.emailPlaceholder'),
                },
                forgotten_password: {
                  link_text: t('community.form.forgotPassword'),
                  button_label: t('community.form.resetPassword'),
                }
              }
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};