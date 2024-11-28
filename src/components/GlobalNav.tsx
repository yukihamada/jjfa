import { Link } from "react-router-dom";
import { Menu, Home, Users, Star, FileText, MessageCircle, User, LogOut, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation } from 'react-i18next';
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const GlobalNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [liveStreams, setLiveStreams] = useState<number>(0);
  const { t } = useTranslation();

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

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("ログアウトに失敗しました");
    } else {
      toast.success("ログアウトしました");
    }
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
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-md w-full transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-slate-800 hover:text-slate-600 font-bold text-xl flex items-center gap-2 transition-transform duration-300 hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="bg-slate-800 text-white px-2 py-1 rounded">JJFA</span>
              <span className="hidden sm:inline text-sm text-slate-600">{t('hero.title')}</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-50 rounded-lg p-1">
                {menuItems.slice(0, 5).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link 
                      key={item.to}
                      to={item.to} 
                      className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-white transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
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
                className="ml-2 bg-slate-800 text-white hover:bg-slate-700 font-medium flex items-center gap-1.5 px-4 py-1.5 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav.contact')}</span>
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSelector />
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        <span>プロフィール</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>ログアウト</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  to="/community" 
                  className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-50 transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">ログイン</span>
                </Link>
              )}

              <button 
                id="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-md transition-colors duration-300 ease-in-out"
                aria-label="Toggle menu"
              >
                <Menu className={`h-6 w-6 text-slate-600 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        <div 
          id="mobile-menu"
          className={`lg:hidden fixed top-16 right-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col p-4 gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2 hover:bg-slate-50 p-2 rounded-md"
                  onClick={handleMenuClick}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.to === "/live" && liveStreams > 0 && (
                    <Badge variant="destructive" className="ml-auto">
                      {liveStreams}
                    </Badge>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;