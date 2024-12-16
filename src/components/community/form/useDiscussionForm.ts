import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const MAX_CONTENT_LENGTH = 2000;

export interface DiscussionFormState {
  content: string;
  visibility: 'public' | 'dojo';
  attachments: { url: string; type: string }[];
  showConfirmDialog: boolean;
}

export interface FormErrors {
  content?: string;
}

export const useDiscussionForm = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState<DiscussionFormState>({
    content: "",
    visibility: "public",
    attachments: [],
    showConfirmDialog: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const createDiscussion = useMutation({
    mutationFn: async () => {
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
          title: "無題", // Add a default title
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
      setFormState({
        content: "",
        visibility: "public",
        attachments: [],
        showConfirmDialog: false,
      });
      onSuccess?.();
    },
    onError: (error) => {
      console.error("Error submitting discussion:", error);
      toast.error("投稿中にエラーが発生しました");
    },
  });

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formState.content) {
      newErrors.content = "内容を入力してください";
    } else if (formState.content.length > MAX_CONTENT_LENGTH) {
      newErrors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      createDiscussion.mutate();
    }
  };

  const isValid = formState.content.trim() !== "" && 
                  Object.keys(errors).length === 0;

  return {
    formState,
    setFormState,
    errors,
    isValid,
    MAX_CONTENT_LENGTH,
    createDiscussion,
    handleSubmit,
  };
};