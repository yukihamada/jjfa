import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PageTitleProps {
  title: string;
  description?: string;
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${title} | JJFA - 柔術 for ALL`;
  }, [title]);

  return null;
};