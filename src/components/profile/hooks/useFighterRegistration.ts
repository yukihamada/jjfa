import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FighterRegistrationData {
  dojoId: string;
  beltId: string;
  instructor: string;
  weight: string;
  height: string;
}

export const useFighterRegistration = (onSuccess: () => void) => {
  const [loading, setLoading] = useState(false);

  const validateForm = (data: FighterRegistrationData) => {
    if (!data.dojoId) {
      toast.error("道場を選択してください");
      return false;
    }

    if (!data.beltId) {
      toast.error("帯を選択してください");
      return false;
    }

    if (!data.instructor.trim()) {
      toast.error("指導者名を入力してください");
      return false;
    }

    if (!data.weight || isNaN(parseFloat(data.weight))) {
      toast.error("有効な体重を入力してください");
      return false;
    }

    if (!data.height || isNaN(parseFloat(data.height))) {
      toast.error("有効な身長を入力してください");
      return false;
    }

    return true;
  };

  const registerFighter = async (data: FighterRegistrationData) => {
    setLoading(true);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        console.error("Auth error:", userError);
        toast.error("認証エラー: ログインが必要です");
        return;
      }

      if (!user) {
        toast.error("ログインが必要です");
        return;
      }

      if (!validateForm(data)) {
        return;
      }

      // Check if user already has a fighter profile
      const { data: existingFighter, error: checkError } = await supabase
        .from("fighters")
        .select("id")
        .eq("user_id", user.id)
        .single();

      if (checkError && checkError.code !== "PGRST116") {
        console.error("Error checking existing fighter:", checkError);
        toast.error("既存の選手データの確認中にエラーが発生しました");
        return;
      }

      if (existingFighter) {
        toast.error("すでに選手登録が完了しています");
        return;
      }

      const { error: insertError } = await supabase
        .from("fighters")
        .insert({
          user_id: user.id,
          weight: parseFloat(data.weight),
          height: parseFloat(data.height),
          dojo_id: data.dojoId,
          belt_id: data.beltId,
          instructor: data.instructor,
          is_active: true,
        });

      if (insertError) {
        console.error("Insert error:", insertError);
        if (insertError.code === "23503") {
          toast.error("選択された道場または帯が無効です");
        } else if (insertError.code === "23505") {
          toast.error("すでに選手登録が完了しています");
        } else {
          toast.error(`選手登録に失敗しました: ${insertError.message}`);
        }
        return;
      }

      toast.success("選手登録が完了しました");
      onSuccess();
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      toast.error("予期せぬエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  return { registerFighter, loading };
};