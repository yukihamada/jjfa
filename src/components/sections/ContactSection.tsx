import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">{t('contact.title')}</CardTitle>
            <CardDescription className="text-center text-lg">
              Get in touch with us
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t('contact.email')}</h3>
              <p className="text-slate-600">contact@jjfa.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{t('contact.phone')}</h3>
              <p className="text-slate-600">+81 (0)3-1234-5678</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};