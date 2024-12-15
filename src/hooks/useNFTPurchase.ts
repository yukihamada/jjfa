import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useNFTPurchase = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setIsLoading(true);

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
        return;
      }

      // 正しいURLを使用してチェックアウトセッションを作成
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${supabase.auth.getSession()}`
          },
          body: JSON.stringify({
            userId: user.id,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("チェックアウトセッションの作成に失敗しました");
      }

      const { url } = await response.json();
      window.location.href = url;

    } catch (error) {
      console.error("購入処理中にエラーが発生しました:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handlePurchase,
    isLoading,
  };
};