import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavLogo = () => {
  const { t } = useTranslation();
  
  return (
    <Link 
      to="/" 
      className="text-slate-800 hover:text-slate-600 font-bold text-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105 min-w-0"
      aria-label="JJFA ホームページ"
    >
      <div className="flex items-center gap-2">
        <span className="bg-slate-800 text-white px-2 py-1 rounded text-sm font-bold tracking-wider">JJFA</span>
        <span className="hidden sm:inline text-xs text-slate-600 truncate whitespace-nowrap">
          {t('hero.title')}
        </span>
      </div>
    </Link>
  );
};