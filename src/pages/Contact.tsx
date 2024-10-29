import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('contact.title')}
        </h1>
        <p className="text-lg text-center mb-12 text-slate-600">
          {t('contact.subtitle')}
        </p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{t('contact.faq.title')}</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg p-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>{t('contact.faq.q1')}</AccordionTrigger>
              <AccordionContent>
                {t('contact.faq.a1')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>{t('contact.faq.q2')}</AccordionTrigger>
              <AccordionContent>
                {t('contact.faq.a2')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>{t('contact.faq.q3')}</AccordionTrigger>
              <AccordionContent>
                {t('contact.faq.a3')}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>{t('contact.faq.q4')}</AccordionTrigger>
              <AccordionContent>
                {t('contact.faq.a4')}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SocialLinks />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;