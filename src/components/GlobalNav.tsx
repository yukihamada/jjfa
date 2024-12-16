import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { NavItems } from "./navigation/NavItems";
import { NavLogo } from "./navigation/NavLogo";
import { UserMenu } from "./navigation/UserMenu";
import { MobileMenu } from "./navigation/MobileMenu";
import { LanguageSelector } from "./LanguageSelector";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { cn } from "@/lib/utils";

export const GlobalNav = () => {
  const { t } = useTranslation();
  const scrollDirection = useScrollDirection();
  const navigate = useNavigate();

  return (
    <header
      className={cn(
        "sticky z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrollDirection === "down" ? "-top-20" : "top-0",
        "transition-all duration-500"
      )}
    >
      <div className="container flex h-14 items-center">
        <NavLogo />
        <div className="mr-4 hidden md:flex">
          <NavItems />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <MobileMenu />
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};