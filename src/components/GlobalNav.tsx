import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./navigation/MobileMenu";
import { NavItems } from "./navigation/NavItems";
import { NavLogo } from "./navigation/NavLogo";
import { UserMenu } from "./navigation/UserMenu";
import { LanguageSelector } from "./LanguageSelector";
import { Home, Info, FileText, Users, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const GlobalNav = () => {
  const { t } = useTranslation();
  const isVisible = useScrollDirection();
  const [user, setUser] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const navItems = [
    {
      label: t("nav.about"),
      to: "/about",
      icon: Info,
    },
    {
      label: t("nav.project"),
      to: "/whitepaper",
      icon: FileText,
    },
    {
      label: t("nav.community"),
      to: "/community",
      icon: Users,
    },
    {
      label: t("nav.contact"),
      to: "/contact",
      icon: MessageCircle,
    },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <NavLogo />
            </Link>
            <NavItems menuItems={navItems} onItemClick={() => setIsMenuOpen(false)} />
          </div>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <UserMenu user={user} />
            <MobileMenu 
              menuItems={navItems} 
              isOpen={isMenuOpen}
              onItemClick={handleMenuClick} 
            />
          </div>
        </nav>
      </header>
      <div className="h-12" /> {/* スペースを16から12に調整 */}
    </>
  );
};