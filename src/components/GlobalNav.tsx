import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const GlobalNav = () => {
  return (
    <div className="w-full">
      <NavigationMenu className="z-50 bg-white/90 backdrop-blur-md shadow-md w-full">
        <NavigationMenuList className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 gap-4 sm:gap-0">
          <NavigationMenuItem>
            <Link to="/" className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2">
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
            </Link>
          </NavigationMenuItem>

          <div className="flex gap-4">
            <NavigationMenuItem>
              <Link 
                to="/whitepaper" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4 whitespace-nowrap"
              >
                ホワイトペーパー
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a 
                href="#contact" 
                className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4 whitespace-nowrap"
              >
                お問い合わせ
              </a>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default GlobalNav;