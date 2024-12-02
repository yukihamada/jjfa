import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface NavItemsProps {
  menuItems: Array<{
    to: string;
    label: string;
    icon: LucideIcon;
  }>;
  liveStreams: number;
  onItemClick: () => void;
}

export const NavItems = ({ menuItems, liveStreams, onItemClick }: NavItemsProps) => {
  return (
    <>
      <div className="hidden lg:flex items-center gap-1 bg-slate-50 rounded-lg p-1">
        {menuItems.slice(0, 5).map((item) => {
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
              {item.to === "/live" && liveStreams > 0 && (
                <Badge variant="destructive" className="ml-1">
                  {liveStreams}
                </Badge>
              )}
            </Link>
          );
        })}
      </div>

      <Link 
        to="/contact"
        className="hidden lg:flex ml-2 bg-slate-800 text-white hover:bg-slate-700 font-medium items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors duration-200 text-sm"
        onClick={onItemClick}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Contact</span>
      </Link>
    </>
  );
};