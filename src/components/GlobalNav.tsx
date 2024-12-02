import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./navigation/MobileMenu";
import { NavItems } from "./navigation/NavItems";
import { NavLogo } from "./navigation/NavLogo";
import { UserMenu } from "./navigation/UserMenu";
import { Home, Users, Star, FileText, Video, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const GlobalNav = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const [user, setUser] = useState<any>(null);
  const [liveStreams, setLiveStreams] = useState(0);

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
      label: t("nav.home"),
      to: "/",
      icon: Home,
    },
    {
      label: t("nav.community"),
      to: "/community",
      icon: Users,
    },
    {
      label: t("nav.benefits"),
      to: "/jiujitsu-benefits",
      icon: Star,
    },
    {
      label: t("nav.whitepaper"),
      to: "/whitepaper",
      icon: FileText,
    },
    {
      label: t("nav.live"),
      to: "/live",
      icon: Video,
    },
    {
      label: t("nav.contact"),
      to: "/contact",
      icon: MessageCircle,
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
          <NavItems menuItems={navItems} liveStreams={liveStreams} onItemClick={() => {}} />
        </div>
        <div className="flex items-center gap-4">
          <UserMenu user={user} />
          <MobileMenu menuItems={navItems} isOpen={false} liveStreams={liveStreams} onItemClick={() => {}} />
        </div>
      </nav>
    </header>
  );
};