interface TokenRulesArticleProps {
  title: string;
  children: React.ReactNode;
}

export const TokenRulesArticle = ({ title, children }: TokenRulesArticleProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold mt-6 mb-2">{title}</h3>
      {children}
    </div>
  );
};