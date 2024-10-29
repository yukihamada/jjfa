import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const ContactForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('contact.form.success'),
      description: t('contact.form.successMessage'),
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('contact.form.title')}</CardTitle>
        <CardDescription>
          {t('contact.subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('contact.form.name')} *</Label>
            <Input 
              id="name" 
              required 
              placeholder="山田 太郎"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('contact.form.email')} *</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="example@jjforall.com"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
            <Input 
              id="subject" 
              required 
              placeholder="お問い合わせ内容の件名"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.form.message')} *</Label>
            <Textarea 
              id="message" 
              required
              placeholder="ご質問・ご相談内容を詳しくご記入ください"
              className="bg-white min-h-[150px]"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-slate-800 text-white hover:bg-slate-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};