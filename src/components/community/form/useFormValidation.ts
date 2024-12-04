import { useState, useEffect } from 'react';

export interface FormErrors {
  title?: string;
  content?: string;
}

export const MAX_TITLE_LENGTH = 100;
export const MAX_CONTENT_LENGTH = 2000;

export const useFormValidation = (title: string, content: string) => {
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const newErrors: FormErrors = {};

    if (!title) {
      newErrors.title = 'タイトルを入力してください';
    } else if (title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
    }

    if (!content) {
      newErrors.content = '内容を入力してください';
    } else if (content.length > MAX_CONTENT_LENGTH) {
      newErrors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }

    setErrors(newErrors);
  }, [title, content]);

  const isValid = Object.keys(errors).length === 0 && title.trim() !== '' && content.trim() !== '';

  return { errors, isValid };
};