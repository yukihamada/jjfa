import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const GlobalNav = () => {
  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 p-4">
      <NavigationMenuList className="max-w-screen-xl mx-auto flex justify-between items-center">
        <NavigationMenuItem>
          <Link to="/" className="text-white hover:text-white/80 font-bold text-xl">
            JJFA
          </Link>
        </NavigationMenuItem>

        <div className="flex gap-4">
          <NavigationMenuItem>
            <Link to="/whitepaper" className="text-white/90 hover:text-white">
              ホワイトペーパー
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#contact" className="text-white/90 hover:text-white">
              お問い合わせ
            </a>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GlobalNav;