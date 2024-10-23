import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {t('contact.title')}
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="mb-4 text-slate-600 animate-in fade-in slide-in-from-bottom-4 delay-100">
          {t('contact.email')}: info@jjfa.com
        </p>
        <p className="mb-4 text-slate-600 animate-in fade-in slide-in-from-bottom-4 delay-200">
          {t('contact.phone')}: 03-1234-5678
        </p>
        <p className="mb-6 text-slate-600 animate-in fade-in slide-in-from-bottom-4 delay-300">
          〒102-0074<br />
          東京都千代田区九段南１丁目６−５<br />
          九段会館テラス
        </p>
        <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 delay-400">
          <Button 
            variant="outline" 
            className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
          >
            Twitter
          </Button>
          <Button 
            variant="outline" 
            className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
          >
            Facebook
          </Button>
        </div>
      </div>
    </section>
  );
};