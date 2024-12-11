import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const MAX_TITLE_LENGTH = 100;
export const MAX_CONTENT_LENGTH = 2000;

export interface DiscussionFormState {
  title: string;
  content: string;
  visibility: string;
  showPreview: boolean;
  showConfirmDialog: boolean;
  attachments: { url: string; type: string }[];
}

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
    mutationFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
      }

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
      const { error: discussionError } = await supabase
        .from("discussions")
        .insert([
          {
            title: formState.title,
            content: formState.content,
            user_id: user.id,
            profile_id: profile.id,
            visibility: formState.visibility,
            attachments: formState.attachments,
          },
        ]);

      if (discussionError) throw discussionError;
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
    if (!formState.title) {
      newErrors.title = "タイトルを入力してください";
    } else if (formState.title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
    }
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
      setFormState(prev => ({ ...prev, showConfirmDialog: true }));
    }
  };

  const handleConfirmedSubmit = () => {
    createDiscussion.mutate();
  };

  const isValid = formState.title.trim() !== "" && 
                  formState.content.trim() !== "" && 
                  Object.keys(errors).length === 0;

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