import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${title} | JJFA - 柔術 for ALL`;
  }, [title]);

  return null;
};