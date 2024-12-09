interface ArticlesSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export const ArticlesSection = ({ id, title, children }: ArticlesSectionProps) => {
  return (
    <section id={id}>
      <h2 className="text-xl font-bold mt-8 mb-4">{title}</h2>
      {children}
    </section>
  );
};