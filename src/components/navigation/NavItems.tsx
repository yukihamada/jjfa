import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavItemsProps {
  menuItems: Array<{
    to: string;
    label: string;
    icon: LucideIcon;
  }>;
  onItemClick: () => void;
}

export const NavItems = ({ menuItems, onItemClick }: NavItemsProps) => {
  return (
    <>
      <div className="hidden lg:flex items-center gap-1 bg-slate-50 rounded-lg p-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.to}
              to={item.to} 
              className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-white transition-all duration-200 text-sm"
              onClick={onItemClick}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};