import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface DiscussionSubmitParams {
  title: string;
  content: string;
  tagId: string;
  visibility: string;
  attachments: { url: string; type: string }[];
}

export const useDiscussionSubmit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ title, content, tagId, visibility, attachments }: DiscussionSubmitParams) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      // First create the discussion
      const { data: discussion, error: discussionError } = await supabase
        .from("discussions")
        .insert([
          {
            title,
            content,
            user_id: user.id,
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      toast.success("投稿が完了しました！");
    },
    onError: (error) => {
      toast.error(`投稿に失敗しました: ${error.message}`);
    },
  });
};