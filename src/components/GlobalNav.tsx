import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-md w-full transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* 左側: ロゴ */}
            <Link 
              to="/" 
              className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
            </Link>

            {/* 中央: メインナビゲーション */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link 
                to="/whitepaper" 
                className="text-slate-700 hover:text-slate-900 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-slate-800 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {t('nav.whitepaper')}
              </Link>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 font-medium relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-slate-800 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {t('nav.contact')}
              </a>
            </nav>

            {/* 右側: 言語切り替えとモバイルメニューボタン */}
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-md transition-colors duration-300 ease-in-out"
                aria-label="Toggle menu"
              >
                <Menu className={`h-6 w-6 text-slate-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* モバイルナビゲーション */}
        <div 
          className={`lg:hidden fixed top-16 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col p-4 gap-4">
            <Link 
              to="/whitepaper" 
              className="text-slate-700 hover:text-slate-900 font-medium transform transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.whitepaper')}
            </Link>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-slate-900 font-medium transform transition-all duration-300 hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;