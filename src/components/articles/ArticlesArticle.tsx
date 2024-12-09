interface ArticlesArticleProps {
  title: string;
  children: React.ReactNode;
}

export const ArticlesArticle = ({ title, children }: ArticlesArticleProps) => {
  return (
    <div>
      <h3 className="font-bold mt-6 mb-2">{title}</h3>
      {children}
    </div>
  );
};