import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { DiscussionForm } from "@/components/community/DiscussionForm";
import { DiscussionList } from "@/components/community/DiscussionList";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { NotificationBell } from "@/components/community/NotificationBell";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          toast.error("このページにアクセスするにはログインが必要です");
          navigate('/community-registration');
          return;
        }
        setUser(session.user);
      } catch (error) {
        console.error("Auth check error:", error);
        toast.error("認証状態の確認中にエラーが発生しました");
        navigate('/community-registration');
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        toast.error("セッションが終了しました。再度ログインしてください。");
        navigate('/community-registration');
        return;
      }
      setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <div className="container max-w-2xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            コミュニティ
          </h1>
          <NotificationBell />
        </div>

        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <DiscussionForm onSuccess={() => {}} />
          </div>
          
          <DiscussionList />
        </div>
      </div>
    </div>
  );
};

export default Community;