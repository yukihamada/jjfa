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
import { PenSquare, Users, AlertCircle } from "lucide-react";
import { CommunityGuidelines } from "@/components/community/CommunityGuidelines";
import { EventsSection } from "@/components/sections/EventsSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("discussions");
  const [showTodoDialog, setShowTodoDialog] = useState(false);
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

  const handleEventClick = () => {
    if (!user) {
      toast.error("TODOリストを表示するにはログインが必要です", {
        description: "会員登録を完了してください",
        icon: <AlertCircle className="h-5 w-5" />,
      });
      navigate('/community-registration');
      return;
    }
    setShowTodoDialog(true);
  };

  const todoItems = [
    { id: 1, label: "JJFA会員登録を完了する" },
    { id: 2, label: "大会エントリーを行う" },
    { id: 3, label: "健康診断書を提出する" },
    { id: 4, label: "出場費用を支払う" },
    { id: 5, label: "計量の予約を行う" },
    { id: 6, label: "試合用のギを準備する" },
    { id: 7, label: "保険に加入する" }
  ];

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
          <div onClick={handleEventClick} className="cursor-pointer">
            <EventsSection />
          </div>
          
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

      <Dialog open={showTodoDialog} onOpenChange={setShowTodoDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>JiuFight 2025 参加準備リスト</DialogTitle>
          </DialogHeader>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {todoItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <Checkbox id={`todo-${item.id}`} />
                    <label
                      htmlFor={`todo-${item.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Community;