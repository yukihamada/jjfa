import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavItems } from "./navigation/NavItems";
import { NavLogo } from "./navigation/NavLogo";
import { UserMenu } from "./navigation/UserMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { Home, Calendar, Users, Video } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export const GlobalNav = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const menuItems = [
    { to: "/", label: t("nav.home"), icon: Home },
    { to: "/calendar", label: t("nav.calendar"), icon: Calendar },
    { to: "/community", label: t("nav.community"), icon: Users },
    { to: "/live-streaming", label: t("nav.live"), icon: Video },
  ];

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrollDirection === "down" ? "-top-20" : "top-0",
        "transition-all duration-500"
      )}
    >
      <div className="container flex h-14 items-center justify-between">
        <NavLogo />
        <div className="hidden md:flex">
          <NavItems 
            menuItems={menuItems}
            onItemClick={handleMenuItemClick}
          />
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <MobileMenu 
            isOpen={isMobileMenuOpen}
            menuItems={menuItems}
            onItemClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
          <div className="hidden md:block">
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};