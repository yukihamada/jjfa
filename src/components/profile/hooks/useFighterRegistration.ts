
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useFormValidation } from "./useFormValidation";

interface FighterRegistrationData {
  dojoId: string | null;
  beltId: string;
  instructor: string;
  weight: string;
  height: string;
  phone?: string;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  emergencyRelation?: string;
}

export const useFighterRegistration = (onSuccess: () => void) => {
  const [loading, setLoading] = useState(false);
  const { validateForm } = useFormValidation();

  const registerFighter = async (data: FighterRegistrationData) => {
    setLoading(true);

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        toast.error("認証エラー: ログインが必要です");
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

      // Update profile private info with contact information
      const { error: privateInfoError } = await supabase
        .from("profile_private_info")
        .update({
          phone: data.phone,
          address: data.address,
          emergency_contact: data.emergencyContact,
          emergency_phone: data.emergencyPhone,
          emergency_relation: data.emergencyRelation,
        })
        .eq("id", user.id);

      if (privateInfoError) {
        console.error("Profile private info update error:", privateInfoError);
        toast.error("プロフィール情報の更新に失敗しました");
        return;
      }

      // Create fighter profile
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
        handleInsertError(insertError);
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

  const updateFighter = async (fighterId: string, data: FighterRegistrationData) => {
    setLoading(true);

    try {
      if (!validateForm(data)) {
        return;
      }

      const { error: updateError } = await supabase
        .from("fighters")
        .update({
          weight: parseFloat(data.weight),
          height: parseFloat(data.height),
          dojo_id: data.dojoId,
          belt_id: data.beltId,
          instructor: data.instructor,
        })
        .eq("id", fighterId);

      if (updateError) {
        console.error("Update error:", updateError);
        toast.error("選手情報の更新に失敗しました");
        return;
      }

      toast.success("選手情報を更新しました");
      onSuccess();
    } catch (error) {
      console.error("Error in updateFighter:", error);
      toast.error("予期せぬエラーが発生しました。もう一度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  const handleInsertError = (error: any) => {
    console.error("Insert error:", error);
    if (error.code === "23503") {
      toast.error("選択された道場または帯が無効です");
    } else if (error.code === "23505") {
      toast.error("すでに選手登録が完了しています");
    } else {
      toast.error(`選手登録に失敗しました: ${error.message}`);
    }
  };

  return { registerFighter, updateFighter, loading };
};
