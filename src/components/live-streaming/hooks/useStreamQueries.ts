import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useStreamQueries = () => {
  const fetchStreamDetails = async (streamKey: string) => {
    try {
      const { data, error } = await supabase
        .from('live_streams')
        .select(`
          title,
          description,
          profiles (
            username,
            avatar_url
          )
        `)
        .eq('stream_key', streamKey)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Failed to fetch stream details:', error);
      toast.error("配信情報の取得に失敗しました");
      return null;
    }
  };

  const updateStreamDetails = async (streamKey: string, title: string, description: string) => {
    try {
      const { error } = await supabase
        .from('live_streams')
        .update({ title, description })
        .eq('stream_key', streamKey);

      if (error) throw error;
      toast.success("配信情報を更新しました");
    } catch (error) {
      console.error("Failed to update stream details:", error);
      toast.error("配信情報の更新に失敗しました");
    }
  };

  return {
    fetchStreamDetails,
    updateStreamDetails
  };
};