import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
});

type FormValues = z.infer<typeof formSchema>;

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    try {
      // Show loading toast
      toast.loading("Sending registration...");

      // First, insert into community_registrations
      const { error: dbError } = await supabase
        .from('community_registrations')
        .insert({
          name: values.name,
          email: values.email,
          status: 'pending'
        });

      if (dbError) {
        console.error("Database error:", dbError);
        toast.error(t('community.form.error.database'));
        return;
      }

      // Then, invoke the welcome email function
      const { error: emailError, data } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email: values.email,
          name: values.name,
          host: window.location.origin
        }
      });

      if (emailError) {
        console.error("Email error:", emailError);
        toast.error(t('community.form.error.email'));
        return;
      }

      // If everything succeeded
      toast.success(t('community.form.success.title'), {
        description: t('community.form.success.description')
      });

      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(t('community.form.error.title'), {
        description: t('community.form.error.description')
      });
    }
  }

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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label 
              htmlFor="name" 
              className="text-sm font-medium text-slate-700"
            >
              {t('community.form.name')}
            </Label>
            <Input
              id="name"
              {...form.register("name")}
              className={`w-full transition-all duration-200 focus:ring-2 focus:ring-slate-400 ${
                form.formState.errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200'
              }`}
              placeholder="山田 太郎"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label 
              htmlFor="email" 
              className="text-sm font-medium text-slate-700"
            >
              {t('community.form.email')}
            </Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              className={`w-full transition-all duration-200 focus:ring-2 focus:ring-slate-400 ${
                form.formState.errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200'
              }`}
              placeholder="example@email.com"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 animate-in fade-in slide-in-from-top-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-slate-800 hover:bg-slate-700 text-white transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t('community.form.submitting')}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <Send className="w-4 h-4" />
                <span>{t('community.form.submit')}</span>
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};