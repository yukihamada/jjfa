import { FormErrors } from "../types/FormTypes";

export const MAX_CONTENT_LENGTH = 2000;

export const useFormValidation = () => {
  const validateForm = (content: string) => {
    const errors: FormErrors = {};
    
    if (!content) {
      errors.content = "内容を入力してください";
    } else if (content.length > MAX_CONTENT_LENGTH) {
      errors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }
    
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    };
  };

  return {
    validateForm,
    MAX_CONTENT_LENGTH
  };
};