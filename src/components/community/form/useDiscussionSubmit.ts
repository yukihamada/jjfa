import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface DiscussionSubmitParams {
  title: string;
  content: string;
  tagId: string;
  visibility: string;
  attachments: { url: string; type: string }[];
}

export const useDiscussionSubmit = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ title, content, tagId, visibility, attachments }: DiscussionSubmitParams) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      // Get the user's profile
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profileError) throw profileError;

      // First create the discussion with profile information
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

      if (discussionError) throw discussionError;

      // Then create the tag association if a tag was selected
      if (tagId) {
        const { error: tagError } = await supabase
          .from("discussion_tags")
          .insert([
            {
              discussion_id: discussion.id,
              tag_id: tagId,
            },
          ]);

        if (tagError) {
          // If tag insertion fails, delete the discussion to maintain consistency
          await supabase
            .from("discussions")
            .delete()
            .eq('id', discussion.id);
          throw new Error("タグの関連付けに失敗しました");
        }
      }

      return discussion;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      toast.success("投稿が完了しました！");
      // 投稿後に投稿詳細ページに遷移
      navigate(`/community/discussion/${data.id}`);
    },
    onError: (error) => {
      toast.error(`投稿に失敗しました: ${error.message}`);
    },
  });
};