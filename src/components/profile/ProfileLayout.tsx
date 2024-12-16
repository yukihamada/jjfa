import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: adminData } = await supabase
          .from('admins')
          .select('*')
          .eq('user_id', user.id)
          .single();
        setIsAdmin(!!adminData);
      }
    };
    checkAdminStatus();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {isAdmin && (
        <div className="mb-6">
          <Button
            onClick={() => navigate("/community")}
            className="w-full gap-2"
          >
            <PenSquare className="w-4 h-4" />
            投稿する
          </Button>
        </div>
      )}
      {children}
    </div>
  );
};