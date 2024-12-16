import { useState } from "react";
import { DiscussionFormState, FormErrors } from "./types/FormTypes";
import { useFormValidation } from "./validation/useFormValidation";
import { useDiscussionSubmit } from "./submission/useDiscussionSubmit";

export const useDiscussionForm = (onSuccess?: () => void) => {
  const [formState, setFormState] = useState<DiscussionFormState>({
    content: "",
    visibility: "public",
    attachments: [],
    showConfirmDialog: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const { validateForm, MAX_CONTENT_LENGTH } = useFormValidation();
  const { createDiscussion } = useDiscussionSubmit(onSuccess);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { errors: validationErrors, isValid } = validateForm(formState.content);
    setErrors(validationErrors);
    
    if (isValid) {
      createDiscussion.mutate(formState);
      setFormState({
        content: "",
        visibility: "public",
        attachments: [],
        showConfirmDialog: false,
      });
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