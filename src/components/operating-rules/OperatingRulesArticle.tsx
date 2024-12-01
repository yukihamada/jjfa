interface OperatingRulesArticleProps {
  title: string;
  children: React.ReactNode;
}

export const OperatingRulesArticle = ({ title, children }: OperatingRulesArticleProps) => {
  return (
    <div>
      <h3 className="font-bold mt-6 mb-2">{title}</h3>
      {children}
    </div>
  );
};