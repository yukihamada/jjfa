import { useState } from "react";
import { useDiscussionSubmit } from "./useDiscussionSubmit";
import { useFormValidation } from "./useFormValidation";
import { toast } from "sonner";

export interface DiscussionFormState {
  title: string;
  content: string;
  visibility: string;
  attachments: { url: string; type: string }[];
  showPreview: boolean;
  showConfirmDialog: boolean;
}

export const useDiscussionForm = (onSuccess?: () => void) => {
  const [formState, setFormState] = useState<DiscussionFormState>({
    title: "",
    content: "",
    visibility: "public",
    attachments: [],
    showPreview: false,
    showConfirmDialog: false,
  });

  const { errors, isValid, MAX_TITLE_LENGTH, MAX_CONTENT_LENGTH } = useFormValidation(
    formState.title,
    formState.content
  );
  
  const createDiscussion = useDiscussionSubmit();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValid) {
      if (errors.title) toast.error(errors.title);
      if (errors.content) toast.error(errors.content);
      if (!formState.title.trim() || !formState.content.trim()) {
        toast.error("タイトルと内容を入力してください");
      }
      return;
    }

    setFormState(prev => ({ ...prev, showConfirmDialog: true }));
  };

  const handleConfirmedSubmit = () => {
    try {
      createDiscussion.mutate(
        { 
          title: formState.title, 
          content: formState.content, 
          tagId: null,
          visibility: formState.visibility, 
          attachments: formState.attachments 
        },
        {
          onSuccess: () => {
            setFormState({
              title: "",
              content: "",
              visibility: "public",
              attachments: [],
              showPreview: false,
              showConfirmDialog: false,
            });
            onSuccess?.();
          },
          onError: (error) => {
            toast.error(`投稿に失敗しました: ${error.message}`);
            setFormState(prev => ({ ...prev, showConfirmDialog: false }));
          }
        }
      );
    } catch (error) {
      toast.error("予期せぬエラーが発生しました。もう一度お試しください。");
      setFormState(prev => ({ ...prev, showConfirmDialog: false }));
    }
  };

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