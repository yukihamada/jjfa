import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <NavigationMenu className="z-50 bg-white/90 backdrop-blur-md shadow-md w-full">
        <NavigationMenuList className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
          <NavigationMenuItem>
            <Link to="/" className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2">
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
            </Link>
          </NavigationMenuItem>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto mt-4 lg:mt-0 lg:mr-12`}>
            <NavigationMenuItem>
              <Link 
                to="/whitepaper" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4 whitespace-nowrap py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                ホワイトペーパー
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4 whitespace-nowrap py-2 lg:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <LanguageSelector />
            </NavigationMenuItem>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-md absolute right-4 top-4"
          >
            <Menu className="h-6 w-6 text-slate-600" />
          </button>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default GlobalNav;