import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, LineChart } from "lucide-react";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        {t('contact.title')}
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="mb-4 text-slate-600 animate-in fade-in slide-in-from-bottom-4 delay-100">
          {t('contact.email')}
        </p>
        <p className="mb-6 text-slate-600 animate-in fade-in slide-in-from-bottom-4 delay-300">
          {t('contact.address')}
        </p>
        <div className="flex justify-center gap-6 animate-in fade-in slide-in-from-bottom-4 delay-400">
          <a 
            href="https://x.com/JJFA_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>X</span>
            </Button>
          </a>
          <a 
            href="https://github.com/yukihamada/jjfa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Button>
          </a>
          <a 
            href="https://line.me/ti/p/@jjfa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <LineChart className="w-4 h-4" />
              <span>LINE</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};