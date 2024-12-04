import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface DiscussionSubmitParams {
  title: string;
  content: string;
  visibility: string;
  attachments: { url: string; type: string }[];
}

export const useDiscussionSubmit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ title, content, visibility, attachments }: DiscussionSubmitParams) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      // Get the user's profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) {
        console.error('Profile fetch error:', profileError);
        throw new Error("プロフィールの取得に失敗しました");
      }

      if (!profile) {
        throw new Error("プロフィールが見つかりません");
      }

      // Create the discussion with profile information
      const { data: discussion, error: discussionError } = await supabase
        .from("discussions")
        .insert([
          {
            title,
            content,
            user_id: user.id,
            profile_id: profile.id,
            visibility,
            attachments
          },
        ])
        .select()
        .single();

      if (discussionError) {
        console.error('Discussion creation error:', discussionError);
        throw new Error("投稿の作成に失敗しました");
      }

      if (!discussion) {
        throw new Error("投稿の作成に失敗しました");
      }

      return discussion;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      toast.success("投稿が完了しました！");
      // 投稿後に投稿詳細ページに遷移
      navigate(`/community/discussion/${data.id}`);
    },
    onError: (error: Error) => {
      console.error('Submission error:', error);
      toast.error(`投稿に失敗しました: ${error.message}`);
    },
  });
};