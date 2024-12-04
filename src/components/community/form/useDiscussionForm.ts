import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useFormValidation } from "./useFormValidation";

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 2000;

export interface DiscussionFormState {
  title: string;
  content: string;
  visibility: string;
  attachments: { url: string; type: string }[];
  showPreview: boolean;
  showConfirmDialog: boolean;
}

const discussionFormSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください").max(MAX_TITLE_LENGTH, `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`),
  content: z.string().min(1, "内容を入力してください").max(MAX_CONTENT_LENGTH, `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`),
  visibility: z.string(),
  attachments: z.array(z.object({
    url: z.string(),
    type: z.string()
  })).default([])
});

type DiscussionFormValues = z.infer<typeof discussionFormSchema>;

export const useDiscussionForm = (onSuccess?: () => void) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<DiscussionFormState>({
    title: "",
    content: "",
    visibility: "public",
    attachments: [],
    showPreview: false,
    showConfirmDialog: false
  });

  const createDiscussion = useMutation({
    mutationFn: async (data: DiscussionFormValues) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
      }

      const { error } = await supabase
        .from("discussions")
        .insert([{
          title: data.title,
          content: data.content,
          visibility: data.visibility,
          attachments: data.attachments,
          user_id: user.id,
        }]);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("投稿が完了しました");
      navigate("/community");
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Error submitting discussion:", error);
      toast.error("投稿中にエラーが発生しました");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, showConfirmDialog: true }));
  };

  const handleConfirmedSubmit = () => {
    createDiscussion.mutate({
      title: formState.title,
      content: formState.content,
      visibility: formState.visibility,
      attachments: formState.attachments
    });
  };

  const { errors, isValid } = useFormValidation(formState.title, formState.content);

  return {
    formState,
    setFormState,
    errors,
    isValid,
    MAX_TITLE_LENGTH,
    MAX_CONTENT_LENGTH,
    createDiscussion,
    handleSubmit,
    handleConfirmedSubmit
  };
};