import { useEffect, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { DiscussionForm } from "@/components/community/DiscussionForm";
import { DiscussionList } from "@/components/community/DiscussionList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { NotificationBell } from "@/components/community/NotificationBell";
import { OnlineUsersDisplay } from "@/components/community/OnlineUsersDisplay";
import { Button } from "@/components/ui/button";
import { PenSquare, Users } from "lucide-react";
import { CommunityGuidelines } from "@/components/community/CommunityGuidelines";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("discussions");
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

  const handleNewPostClick = () => {
    setActiveTab("create");
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 via-white/50 to-slate-100/50 pt-20">
      <div className="container mx-auto px-4 space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <PageTitle title="コミュニティ掲示板" />
            </div>
            <OnlineUsersDisplay />
          </div>
          <NotificationBell />
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <CommunityGuidelines />
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="space-y-6"
            >
              <TabsList className="grid w-full grid-cols-2 bg-slate-100/50">
                <TabsTrigger 
                  value="discussions"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary"
                >
                  投稿一覧
                </TabsTrigger>
                <TabsTrigger 
                  value="create"
                  className="data-[state=active]:bg-white data-[state=active]:text-primary"
                >
                  新規投稿
                </TabsTrigger>
              </TabsList>
              <TabsContent value="discussions" className="mt-6">
                <DiscussionList />
              </TabsContent>
              <TabsContent value="create" className="mt-6">
                <DiscussionForm onSuccess={() => setActiveTab("discussions")} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {activeTab !== "create" && (
        <Button
          onClick={handleNewPostClick}
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 text-white"
          size="icon"
        >
          <PenSquare className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default Community;