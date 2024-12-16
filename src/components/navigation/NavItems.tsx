import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface NavItemsProps {
  menuItems: Array<{
    to: string;
    label: string;
    icon?: LucideIcon;  // Made icon optional with ?
  }>;
  onItemClick: () => void;
}

export const NavItems = ({ menuItems, onItemClick }: NavItemsProps) => {
  return (
    <>
      <div className="hidden lg:flex items-center gap-1 bg-slate-50 rounded-lg p-1">
        {menuItems.map((item) => {
          return (
            <Link 
              key={item.to}
              to={item.to} 
              className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-white transition-all duration-200 text-sm selection:bg-slate-100 selection:text-slate-900"
              onClick={onItemClick}
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};