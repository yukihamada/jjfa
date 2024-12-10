import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useNFTPurchase = (onPurchaseNFT: () => void) => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("購入するにはログインが必要です");
        return;
      }

      // Create checkout session
      const response = await fetch(
        `${process.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
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

  return { loading, handlePurchase };
};