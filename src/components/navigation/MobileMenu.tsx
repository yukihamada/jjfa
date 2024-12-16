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
    <div className="md:hidden relative" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="relative z-50"
        onClick={onItemClick}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {isOpen ? (
          <X className="h-5 w-5 transition-transform duration-200" />
        ) : (
          <Menu className="h-5 w-5 transition-transform duration-200" />
        )}
      </Button>
      
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onItemClick}
      />
      
      <div 
        className={cn(
          "fixed top-0 right-0 z-40 h-[100dvh] w-3/4 max-w-xs bg-background shadow-lg transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-6 pt-20">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.to}
                to={item.to} 
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={onItemClick}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};