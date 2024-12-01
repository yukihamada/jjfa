import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';
import { supabase } from "@/integrations/supabase/client";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { NavLogo } from "./navigation/NavLogo";
import { NavItems } from "./navigation/NavItems";
import { UserMenu } from "./navigation/UserMenu";
import { MobileMenu } from "./navigation/MobileMenu";

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [liveStreams, setLiveStreams] = useState<number>(0);
  const { t } = useTranslation();
  const isVisible = useScrollDirection();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Subscribe to live streams
    const channel = supabase
      .channel('public:live_streams')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'live_streams',
      }, () => {
        fetchLiveStreams();
      })
      .subscribe();

    // Initial fetch of live streams
    fetchLiveStreams();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
      channel.unsubscribe();
    };
  }, []);

  const fetchLiveStreams = async () => {
    const { data, error } = await supabase
      .from('live_streams')
      .select('*')
      .eq('status', 'live');
    
    if (error) {
      console.error('Error fetching live streams:', error);
      return;
    }
    
    setLiveStreams(data.length);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const menuItems = [
    { to: "/", label: t('nav.home'), icon: Home },
    { to: "/community", label: t('nav.community'), icon: Users },
    { to: "/jiujitsu-benefits", label: t('nav.benefits'), icon: Star },
    { to: "/whitepaper", label: t('nav.whitepaper'), icon: FileText },
    { to: "/live", label: t('nav.live'), icon: Video },
    { to: "/contact", label: t('nav.contact'), icon: MessageCircle },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="bg-white/90 backdrop-blur-md shadow-md w-full transition-all duration-300 ease-in-out">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 px-3 sm:px-4">
            {/* Logo - Left aligned */}
            <div className="flex-1 flex justify-start order-1">
              <NavLogo />
            </div>

            {/* Navigation - Center aligned */}
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center order-2">
              <NavItems liveStreams={liveStreams} onItemClick={handleMenuClick} />
            </nav>

            {/* User controls - Right aligned */}
            <div className="flex items-center gap-2 order-3">
              <div className="flex items-center gap-2">
                <LanguageSelector />
                <UserMenu user={user} />
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 hover:bg-slate-100 rounded-md transition-colors duration-300 ease-in-out"
                  aria-label="Toggle menu"
                >
                  <Menu className={`h-5 w-5 text-slate-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu 
          isOpen={isMenuOpen}
          menuItems={menuItems}
          liveStreams={liveStreams}
          onItemClick={handleMenuClick}
        />
      </div>
    </header>
  );
};

export default GlobalNav;