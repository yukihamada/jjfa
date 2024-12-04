import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 2000;

export interface DiscussionFormState {
  title: string;
  content: string;
  visibility: string;
  showPreview: boolean;
  showConfirmDialog: boolean;
  attachments: { url: string; type: string }[];
}

const discussionFormSchema = z.object({
  title: z.string().min(1, "タイトルを入力してください").max(MAX_TITLE_LENGTH),
  content: z.string().min(1, "内容を入力してください").max(MAX_CONTENT_LENGTH),
  visibility: z.string(),
});

type DiscussionFormValues = z.infer<typeof discussionFormSchema>;

export interface FormErrors {
  title?: string;
  content?: string;
}

export const useDiscussionForm = (onSuccess?: () => void) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<DiscussionFormState>({
    title: "",
    content: "",
    visibility: "public",
    showPreview: false,
    showConfirmDialog: false,
    attachments: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const createDiscussion = useMutation({
    mutationFn: async (data: DiscussionFormValues) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
      }

      const { error } = await supabase
        .from("discussions")
        .insert([
          {
            title: data.title,
            content: data.content,
            visibility: data.visibility,
            user_id: user.id,
            attachments: formState.attachments,
          },
        ]);

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
    },
  });

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (formState.title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
    }
    if (formState.content.length > MAX_CONTENT_LENGTH) {
      newErrors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setFormState(prev => ({ ...prev, showConfirmDialog: true }));
    }
  };

  const handleConfirmedSubmit = () => {
    createDiscussion.mutate({
      title: formState.title,
      content: formState.content,
      visibility: formState.visibility,
    });
  };

  const isValid = formState.title.trim() !== "" && formState.content.trim() !== "" && Object.keys(errors).length === 0;

  return {
    formState,
    setFormState,
    errors,
    isValid,
    MAX_TITLE_LENGTH,
    MAX_CONTENT_LENGTH,
    createDiscussion,
    handleSubmit,
    handleConfirmedSubmit,
  };
};