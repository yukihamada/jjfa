import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { UserManagement } from "@/components/admin/UserManagement";
import { TechniqueManagement } from "@/components/admin/TechniqueManagement";

const AdminPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/');
        return;
      }

      const { data: adminData, error } = await supabase
        .from('admins')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error || !adminData) {
        navigate('/');
        return;
      }

      setIsAdmin(true);
      setIsLoading(false);
    };

    checkAdminStatus();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <PageTitle title="管理者ダッシュボード" />
      
      <div className="grid gap-6 mt-8">
        <Card>
          <CardContent className="pt-6">
            <UserManagement />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <TechniqueManagement />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPage;