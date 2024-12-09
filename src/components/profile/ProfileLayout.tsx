import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  User, 
  Shield, 
  Award, 
  Settings, 
  Swords,
  UserCircle 
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    {
      icon: UserCircle,
      label: "基本情報",
      path: "/profile",
    },
    {
      icon: Shield,
      label: "会員情報",
      path: "/profile/membership",
    },
    {
      icon: Swords,
      label: "選手情報",
      path: "/profile/fighter",
    },
    {
      icon: Award,
      label: "技術",
      path: "/profile/techniques",
    },
    {
      icon: Settings,
      label: "設定",
      path: "/profile/settings",
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold mb-8">プロフィール設定</h1>
      
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 shrink-0">
          <ScrollArea className="h-[calc(100vh-12rem)]">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Button
                    key={item.path}
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-2",
                      isActive && "bg-secondary"
                    )}
                    onClick={() => navigate(item.path)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-[calc(100vh-12rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};