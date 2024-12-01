import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DAOCardProps {
  onPurchaseNFT: () => void;
}

export const DAOCard = ({ onPurchaseNFT }: DAOCardProps) => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("購入するにはログインが必要です");
        return;
      }

      console.log("Creating checkout session...");
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

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Checkout error response:", errorData);
        throw new Error(errorData.error || "チェックアウトの作成に失敗しました");
      }

      const data = await response.json();
      console.log("Checkout session created:", data);
      
      if (!data.url) {
        throw new Error("チェックアウトURLの取得に失敗しました");
      }

      window.location.href = data.url;
    } catch (error) {
      console.error("Purchase error:", error);
      toast.error(error instanceof Error ? error.message : "予期せぬエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
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
          <p className="mt-4 font-medium">価格: ¥100,000</p>
        </div>
        <Button 
          onClick={handlePurchase}
          className="w-full"
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
              社員権NFTを購入
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};