interface RuleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const RuleSection = ({ id, title, children }: RuleSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-16">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};