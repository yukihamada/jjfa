import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onItemClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onItemClick]);

  return (
    <div className="lg:hidden" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onItemClick}
      >
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
        ) : (
          <Menu className="h-6 w-6 transition-transform duration-300" />
        )}
      </Button>
      
      <div 
        className={cn(
          "lg:hidden fixed top-16 right-0 w-56 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out",
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
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