import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const GlobalNav = () => {
  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 p-4">
      <NavigationMenuList className="max-w-screen-xl mx-auto flex justify-between items-center">
        <NavigationMenuItem>
          <Link to="/" className="text-slate-800 hover:text-slate-600 font-bold text-xl">
            JJFA
          </Link>
        </NavigationMenuItem>

        <div className="flex gap-4">
          <NavigationMenuItem>
            <Link to="/whitepaper" className="text-slate-700 hover:text-slate-900">
              ホワイトペーパー
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#contact" className="text-slate-700 hover:text-slate-900">
              お問い合わせ
            </a>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GlobalNav;