import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Github, ExternalLink, LineChart } from "lucide-react";

const GlobalFooter = () => {
  const { t } = useTranslation();

  const menuGroups = [
    {
      title: t('footer.about'),
      links: [
        { to: "/", label: t('nav.home') },
        { to: "/whitepaper", label: t('nav.whitepaper') },
        { to: "/roadmap", label: t('nav.roadmap') },
        { to: "/operating-rules", label: t('nav.operatingRules') },
        { to: "/token-rules", label: t('nav.tokenRules') },
        { to: "/tournament-rules", label: "大会ルール" },
      ]
    },
    {
      title: t('footer.community'),
      links: [
        { to: "/community", label: t('nav.community') },
        { to: "/jiujitsu-benefits", label: t('nav.benefits') },
        { to: "/articles", label: t('nav.articles') },
      ]
    },
    {
      title: t('footer.company'),
      links: [
        { to: "/careers", label: t('nav.careers') },
        { to: "/contact", label: t('nav.contact') },
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold mb-4 text-slate-300">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 JJFA. All rights reserved.
            </div>
            <div className="flex gap-6 items-center">
              <a 
                href="https://x.com/JJFA_official" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>X</span>
              </a>
              <a 
                href="https://github.com/yukihamada/jjfa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://line.me/ti/p/@jjfa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
              >
                <LineChart className="w-4 h-4" />
                <span>LINE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;