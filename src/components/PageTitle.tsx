import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PageTitleProps {
  title?: string;
  children?: React.ReactNode;
  description?: string;
}

export const PageTitle = ({ title, children, description }: PageTitleProps) => {
  const { t } = useTranslation();
  const titleText = title || (typeof children === 'string' ? children : '');

  useEffect(() => {
    document.title = `${titleText} | JJFA - 柔術 for ALL`;
  }, [titleText]);

  return null;
};