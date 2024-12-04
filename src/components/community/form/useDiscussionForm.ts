import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const discussionFormSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください"),
  content: z.string().min(1, "内容を入力してください"),
  visibility: z.string(),
});

type DiscussionFormValues = z.infer<typeof discussionFormSchema>;

interface DiscussionSubmitParams {
  title: string;
  content: string;
  visibility: string;
}

export const useDiscussionForm = () => {
  const navigate = useNavigate();

  const form = useForm<DiscussionFormValues>({
    resolver: zodResolver(discussionFormSchema),
    defaultValues: {
      title: "",
      content: "",
      visibility: "public",
    },
  });

  const onSubmit = async (data: DiscussionFormValues) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("ログインが必要です");
        return;
      }

      const discussionData: DiscussionSubmitParams = {
        title: data.title,
        content: data.content,
        visibility: data.visibility,
      };

      const { error } = await supabase
        .from("discussions")
        .insert([
          {
            ...discussionData,
            user_id: user.id,
          },
        ]);

      if (error) throw error;

      toast.success("投稿が完了しました");
      navigate("/community");
    } catch (error) {
      console.error("Error submitting discussion:", error);
      toast.error("投稿中にエラーが発生しました");
    }
  };

  return {
    form,
    onSubmit,
  };
};