import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useNFTPurchase = (onPurchaseNFT?: () => void) => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    try {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("ログインが必要です");
      }

      // Use the full URL directly instead of accessing supabaseUrl
      const response = await fetch(
        `https://hipoantgjdtzsgtkohxa.supabase.co/functions/v1/create-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`
          }
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
      setLoading(false);
    }
  };

  return {
    handlePurchase,
    loading,
  };
};