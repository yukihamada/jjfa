import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  menuItems: Array<{
    to: string;
    label: string;
    icon: any;
  }>;
  onItemClick: () => void;
}

export const MobileMenu = ({ isOpen, menuItems, onItemClick }: MobileMenuProps) => {
  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onItemClick}
      >
        <Menu className="h-6 w-6" />
      </Button>
      
      <div 
        className={`lg:hidden fixed top-16 right-0 w-56 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.to}
                to={item.to} 
                className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-3 p-2 rounded-md hover:bg-slate-50 transition-all duration-200 text-sm"
                onClick={onItemClick}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};