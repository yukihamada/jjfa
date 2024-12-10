import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Coins } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const NFTPurchase = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePurchase = async () => {
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast({
          title: "認証エラー",
          description: "購入するにはログインが必要です",
          variant: "destructive",
        });
        return;
      }

      // Check if user already has an active DAO membership
      const { data: existingMembership, error: membershipError } = await supabase
        .from('dao_memberships')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('status', 'active')
        .single();

      if (membershipError && membershipError.code !== 'PGRST116') {
        console.error("会員情報チェックエラー:", membershipError);
        toast({
          title: "エラー",
          description: "会員情報の確認中にエラーが発生しました",
          variant: "destructive",
        });
        return;
      }

      if (existingMembership) {
        toast({
          title: "購入済み",
          description: "すでにDAO会員として登録されています",
          variant: "destructive",
        });
        return;
      }

      // Get Supabase project URL from the client
      const supabaseUrl = supabase.supabaseUrl;
      
      // Create checkout session
      const response = await fetch(
        `${supabaseUrl}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            'Content-Type': 'application/json'
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "チェックアウトの作成に失敗しました");
      }

      const data = await response.json();
      
      if (!data.url) {
        throw new Error("チェックアウトURLの取得に失敗しました");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("購入エラー:", error);
      toast({
        title: "エラー",
        description: error instanceof Error ? error.message : "予期せぬエラーが発生しました",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <CardHeader className="text-center bg-primary/5 py-8">
              <CardTitle className="text-3xl font-bold">Member Token</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-4xl font-bold">¥100,000</p>
                  <p className="text-gray-600 mt-2">一括払い</p>
                </div>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    DAO投票権の取得
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    収益分配への参加
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    限定コミュニティへのアクセス
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    大会優先参加権
                  </li>
                </ul>

                <Button 
                  className="w-full py-6 text-lg"
                  onClick={handlePurchase}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      処理中...
                    </>
                  ) : (
                    <>
                      <Coins className="w-4 h-4 mr-2" />
                      今すぐ購入
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  ※ クレジットカードでの支払いに対応しています
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};