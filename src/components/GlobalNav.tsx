import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const GlobalNav = () => {
  return (
    <NavigationMenu className="z-50 bg-white/90 backdrop-blur-md shadow-md w-full">
      <NavigationMenuList className="container mx-auto flex justify-between items-center p-4">
        <NavigationMenuItem>
          <Link to="/" className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2">
            <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
            <span className="hidden sm:inline text-sm text-slate-600">Jiu-Jitsu For ALL</span>
          </Link>
        </NavigationMenuItem>

        <div className="flex gap-6">
          <NavigationMenuItem>
            <Link 
              to="/whitepaper" 
              className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
            >
              ホワイトペーパー
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a 
              href="#contact" 
              className="text-slate-700 hover:text-slate-900 font-medium hover:underline decoration-2 underline-offset-4"
            >
              お問い合わせ
            </a>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GlobalNav;