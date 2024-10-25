import { Link } from "react-router-dom";
import { Menu, Home, Users, Star, FileText, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    { to: "/", label: t('nav.home'), icon: Home },
    { to: "/community", label: t('nav.community'), icon: Users },
    { to: "/jiujitsu-benefits", label: t('nav.benefits'), icon: Star },
    { to: "/whitepaper", label: t('nav.whitepaper'), icon: FileText },
    { to: "/contact", label: t('nav.contact'), icon: MessageCircle },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="bg-white/90 backdrop-blur-md shadow-md w-full transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2 transition-transform duration-300 hover:scale-105"
              onClick={handleMenuClick}
            >
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1">
                {menuItems.slice(0, 4).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={item.to}
                      to={item.to} 
                      className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white transition-all duration-200"
                      onClick={handleMenuClick}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              <Link 
                to="/contact"
                className="ml-2 bg-slate-800 text-white hover:bg-slate-700 font-medium flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-colors duration-200"
                onClick={handleMenuClick}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav.contact')}</span>
              </Link>
            </nav>

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

        <div 
          className={`lg:hidden fixed top-16 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col p-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2 hover:bg-slate-50 p-2 rounded-md"
                  onClick={handleMenuClick}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;
