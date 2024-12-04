export const useFormValidation = (title: string, content: string) => {
  const errors = {
    title: '',
    content: ''
  };

  const MAX_TITLE_LENGTH = 100;
  const MAX_CONTENT_LENGTH = 2000;

  if (!title) {
    errors.title = 'タイトルを入力してください';
  } else if (title.length > MAX_TITLE_LENGTH) {
    errors.title = `タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`;
  }

  if (!content) {
    errors.content = '内容を入力してください';
  } else if (content.length > MAX_CONTENT_LENGTH) {
    errors.content = `本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`;
  }

  const isValid = !errors.title && !errors.content;

  return { errors, isValid };
};