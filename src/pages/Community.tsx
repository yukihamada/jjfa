import { useEffect, useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { DiscussionForm } from "@/components/community/DiscussionForm";
import { DiscussionList } from "@/components/community/DiscussionList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Community = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title="コミュニティ掲示板" />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="discussions" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="discussions">投稿一覧</TabsTrigger>
              <TabsTrigger value="create">新規投稿</TabsTrigger>
            </TabsList>
            <TabsContent value="discussions">
              <DiscussionList />
            </TabsContent>
            <TabsContent value="create">
              <DiscussionForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Community;