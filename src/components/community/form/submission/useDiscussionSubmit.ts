import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { DiscussionFormState } from "../types/FormTypes";

export const useDiscussionSubmit = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  const createDiscussion = useMutation({
    mutationFn: async (formState: DiscussionFormState) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Profile fetch error:', profileError);
        throw new Error("プロフィールの取得に失敗しました");
      }

      const { error: discussionError } = await supabase
        .from("discussions")
        .insert({
          title: "無題",
          content: formState.content,
          user_id: user.id,
          profile_id: profile.id,
          visibility: formState.visibility,
          attachments: formState.attachments,
        });

      if (discussionError) throw discussionError;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      toast.success("投稿が完了しました");
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Error submitting discussion:", error);
      toast.error("投稿中にエラーが発生しました");
    },
  });

  return { createDiscussion };
};