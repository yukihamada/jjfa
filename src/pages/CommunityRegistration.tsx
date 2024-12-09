import { useEffect } from "react";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";
import { RegistrationForm } from "@/components/community/RegistrationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const CommunityRegistration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showTodoDialog, setShowTodoDialog] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        toast.success("すでにログインしています");
        navigate('/community');
      }
    };
    checkAuth();
  }, [navigate]);

  const todoItems = [
    { id: 1, label: "JJFA会員登録を完了する" },
    { id: 2, label: "LINE公式アカウントを追加する" },
    { id: 3, label: "大会エントリーを行う" },
    { id: 4, label: "健康診断書を提出する" },
    { id: 5, label: "出場費用を支払う" },
    { id: 6, label: "計量の予約を行う" },
    { id: 7, label: "試合用のギを準備する" },
    { id: 8, label: "保険に加入する" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50 pt-20">
      <PageTitle title={t('community.title')} />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Registration Form Section */}
            <div className="space-y-6">
              <div className="prose">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
                  {t('community.joinTitle')}
                </h1>
                <p className="text-lg text-slate-600 mb-6">
                  {t('community.joinSubtitle')}
                </p>
              </div>
              <RegistrationForm />
            </div>

            {/* Next Steps Section */}
            <div className="space-y-6">
              {/* LINE Official Account Card */}
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    LINE公式アカウント
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    最新情報やイベントの案内をLINEでお届けします。
                  </p>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => window.open('https://line.me/ti/p/@jjfa', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5" />
                    LINE公式アカウントを追加
                  </Button>
                </CardContent>
              </Card>

              {/* Event Card */}
              <Card 
                className="bg-white/80 backdrop-blur-sm shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => setShowTodoDialog(true)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    JiuFight 2025
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    2025年2月16日（日）<br />
                    場所: 大田区産業プラザPiO<br />
                    アクセス: 京急蒲田駅から徒歩3分
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('https://jiufight.com', '_blank');
                    }}
                  >
                    大会詳細を見る
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* TODO Dialog */}
      <Dialog open={showTodoDialog} onOpenChange={setShowTodoDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>JiuFight 2025 参加準備リスト</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-4">
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommunityRegistration;