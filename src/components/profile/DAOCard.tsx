import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

interface DAOCardProps {
  onPurchaseNFT: () => void;
}

export const DAOCard = ({ onPurchaseNFT }: DAOCardProps) => {
  const [loading, setLoading] = useState(false);

  const { data: salesConfig, isLoading: isLoadingSalesConfig } = useQuery({
    queryKey: ['nftSalesConfig'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('nft_sales_config')
        .select('*')
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const handlePurchase = async () => {
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("購入するにはログインが必要です");
        return;
      }

      // Check if sale has ended
      if (salesConfig && new Date() > new Date(salesConfig.end_date)) {
        toast.error("販売期間が終了しました");
        return;
      }

      // Check if sold out
      if (salesConfig && salesConfig.current_supply >= salesConfig.max_supply) {
        toast.error("完売しました");
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
        toast.error("会員情報の確認中にエラーが発生しました");
        return;
      }

      if (existingMembership) {
        toast.error("すでにDAO会員として登録されています");
        return;
      }

      // Create checkout session
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.access_token}`,
            'Content-Type': 'application/json'
          },
        }
      );

      const responseData = await response.json();
      
      if (!response.ok) {
        throw new Error(responseData.error || "チェックアウトの作成に失敗しました");
      }

      if (!responseData.url) {
        throw new Error("チェックアウトURLの取得に失敗しました");
      }

      window.location.href = responseData.url;
    } catch (error) {
      console.error("購入エラー:", error);
      toast.error(error instanceof Error ? error.message : "予期せぬエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>DAO会員情報</CardTitle>
        <CardDescription>社員権NFTの状態</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-600">
          <p>JJFA DAOの社員権NFTを購入することで、以下の特典が得られます：</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>DAOの意思決定への参加権</li>
            <li>収益の分配</li>
            <li>特別なコミュニティアクセス</li>
          </ul>
          <div className="mt-4">
            <p className="font-medium">価格: ¥100,000</p>
            {salesConfig && (
              <>
                <p className="mt-2">販売期限: {formatDate(salesConfig.end_date)}</p>
                <p>残り: {Math.max(0, salesConfig.max_supply - (salesConfig.current_supply || 0))}枚 
                  <span className="text-xs text-gray-500">（限定{salesConfig.max_supply}枚）</span>
                </p>
              </>
            )}
          </div>
        </div>
        <Button 
          onClick={handlePurchase}
          className="w-full"
          disabled={loading || isLoadingSalesConfig || 
            (salesConfig && (
              new Date() > new Date(salesConfig.end_date) || 
              (salesConfig.current_supply || 0) >= salesConfig.max_supply
            ))
          }
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              処理中...
            </>
          ) : (
            <>
              <Coins className="w-4 h-4 mr-2" />
              社員権NFTを購入
            </>
          )}
        </Button>
        {salesConfig && (salesConfig.current_supply || 0) >= salesConfig.max_supply && (
          <p className="text-sm text-red-600 text-center">完売しました</p>
        )}
        {salesConfig && new Date() > new Date(salesConfig.end_date) && (
          <p className="text-sm text-red-600 text-center">販売期間が終了しました</p>
        )}
      </CardContent>
    </Card>
  );
};