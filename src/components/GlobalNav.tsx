import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-md w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2">
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link 
                to="/whitepaper" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
              >
                ホワイトペーパー
              </Link>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
              >
                お問い合わせ
              </a>
              <LanguageSelector />
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg">
            <nav className="flex flex-col p-4 gap-4">
              <Link 
                to="/whitepaper" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                ホワイトペーパー
              </Link>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
              <LanguageSelector />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default GlobalNav;