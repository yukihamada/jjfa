import { useState, useCallback } from 'react';

export interface FormErrors {
  title?: string;
  content?: string;
}

export const MAX_TITLE_LENGTH = 100;
export const MAX_CONTENT_LENGTH = 2000;

export const useFormValidation = (title: string, content: string) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!title.trim()) {
      newErrors.title = 'タイトルを入力してください';
    } else if (title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
    }

    if (!content.trim()) {
      newErrors.content = '内容を入力してください';
    } else if (content.length > MAX_CONTENT_LENGTH) {
      newErrors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [title, content]);

  return { errors, validate };
};