import { useEffect, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { supabase } from "@/integrations/supabase/client";
import { DiscussionForm } from "@/components/community/DiscussionForm";
import { DiscussionList } from "@/components/community/DiscussionList";
import { ChatRoom } from "@/components/community/ChatRoom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { NotificationBell } from "@/components/community/NotificationBell";
import { OnlineUsersDisplay } from "@/components/community/OnlineUsersDisplay";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("discussions");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("このページにアクセスするにはログインが必要です");
        navigate('/community-registration');
        return;
      }
      setUser(session.user);
      setIsLoading(false);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        toast.error("セッションが終了しました。再度ログインしてください。");
        navigate('/community-registration');
        return;
      }
      setUser(session.user);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return null;
  }

  const handleNewPostClick = () => {
    setActiveTab("create");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <PageTitle title="コミュニティ掲示板" />
            <OnlineUsersDisplay />
          </div>
          <NotificationBell />
        </div>
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="discussions">投稿一覧</TabsTrigger>
              <TabsTrigger value="create">新規投稿</TabsTrigger>
              <TabsTrigger value="chat">チャット</TabsTrigger>
            </TabsList>
            <TabsContent value="discussions">
              <DiscussionList />
            </TabsContent>
            <TabsContent value="create">
              <DiscussionForm />
            </TabsContent>
            <TabsContent value="chat">
              <ChatRoom />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* 固定された新規投稿ボタン */}
      {activeTab !== "create" && (
        <Button
          onClick={handleNewPostClick}
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          <PenSquare className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
};

export default Community;