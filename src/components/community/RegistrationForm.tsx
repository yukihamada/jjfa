import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
});

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase
        .from('community_registrations')
        .insert([values]);

      if (error) throw error;

      const { error: emailError } = await supabase.functions.invoke('send-welcome-email', {
        body: { 
          email: values.email,
          name: values.name,
          host: window.location.origin
        }
      });

      if (emailError) throw emailError;

      toast.toast({
        title: t('community.form.success.title'),
        description: t('community.form.success.description'),
        variant: "default",
      });

      form.reset();
    } catch (error) {
      toast.toast({
        title: t('community.form.error.title'),
        description: t('community.form.error.description'),
        variant: "destructive",
      });
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          {t('community.form.name')}
        </label>
        <input
          id="name"
          {...form.register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {form.formState.errors.name && <p className="text-red-600">{form.formState.errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          {t('community.form.email')}
        </label>
        <input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        {form.formState.errors.email && <p className="text-red-600">{form.formState.errors.email.message}</p>}
      </div>
      <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500">
        {t('community.form.submit')}
      </button>
    </form>
  );
};
