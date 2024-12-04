import { useState, useEffect } from 'react';

export const useFormValidation = (title: string, content: string) => {
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});
  
  const MAX_TITLE_LENGTH = 100;
  const MAX_CONTENT_LENGTH = 2000;

  useEffect(() => {
    const newErrors: { title?: string; content?: string } = {};
    
    if (title.length > MAX_TITLE_LENGTH) {
      newErrors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
    }
    
    if (content.length > MAX_CONTENT_LENGTH) {
      newErrors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
    }
    
    setErrors(newErrors);
  }, [title, content]);

  const isValid = Object.keys(errors).length === 0 && title.trim() !== '' && content.trim() !== '';

  return { errors, isValid, MAX_TITLE_LENGTH, MAX_CONTENT_LENGTH };
};