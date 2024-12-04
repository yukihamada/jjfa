import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useFormValidation, MAX_TITLE_LENGTH, MAX_CONTENT_LENGTH } from "./useFormValidation";

export interface DiscussionFormState {
  title: string;
  content: string;
  visibility: string;
  attachments: { url: string; type: string; }[];
  showPreview: boolean;
  showConfirmDialog: boolean;
}

const initialFormState: DiscussionFormState = {
  title: "",
  content: "",
  visibility: "public",
  attachments: [],
  showPreview: false,
  showConfirmDialog: false
};

export const useDiscussionForm = (onSuccess?: () => void) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState<DiscussionFormState>(initialFormState);
  const { errors, validate } = useFormValidation(formState.title, formState.content);

  const createDiscussion = useMutation({
    mutationFn: async (data: Omit<DiscussionFormState, 'showPreview' | 'showConfirmDialog'>) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error("ログインが必要です");
      }

      const { data: result, error } = await supabase
        .from('discussions')
        .insert([
          {
            title: data.title,
            content: data.content,
            visibility: data.visibility,
            attachments: data.attachments,
            user_id: user.id
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return result;
    },
    onSuccess: (data) => {
      toast.success("投稿が完了しました");
      onSuccess?.();
      navigate(`/community/discussion/${data.id}`);
    },
    onError: (error) => {
      console.error("Error creating discussion:", error);
      toast.error("投稿に失敗しました");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setFormState(prev => ({ ...prev, showConfirmDialog: true }));
    }
  };

  const handleConfirmedSubmit = () => {
    const { showPreview, showConfirmDialog, ...submitData } = formState;
    createDiscussion.mutate(submitData);
  };

  return {
    formState,
    setFormState,
    errors,
    isValid: validate(),
    MAX_TITLE_LENGTH,
    MAX_CONTENT_LENGTH,
    createDiscussion,
    isSubmitting: createDiscussion.isPending,
    handleSubmit,
    handleConfirmedSubmit
  };
};