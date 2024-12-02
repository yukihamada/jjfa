import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./navigation/MobileMenu";
import { NavItems } from "./navigation/NavItems";
import { NavLogo } from "./navigation/NavLogo";
import { UserMenu } from "./navigation/UserMenu";
import { Home, Users, Star, FileText, Video, MessageCircle } from "lucide-react";

export const GlobalNav = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();

  const navItems = [
    {
      label: t("nav.home"),
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      label: t("nav.community"),
      href: "/community",
      icon: <Users className="w-4 h-4" />,
    },
    {
      label: t("nav.benefits"),
      href: "/jiujitsu-benefits",
      icon: <Star className="w-4 h-4" />,
    },
    {
      label: t("nav.whitepaper"),
      href: "/whitepaper",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      label: t("nav.live"),
      href: "/live",
      icon: <Video className="w-4 h-4" />,
    },
    {
      label: t("nav.contact"),
      href: "/contact",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b transition-transform duration-300",
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <NavLogo />
          </Link>
          <NavItems items={navItems} />
        </div>
        <div className="flex items-center gap-4">
          <UserMenu />
          <MobileMenu items={navItems} />
        </div>
      </nav>
    </header>
  );
};