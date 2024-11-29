interface RuleSectionProps {
  id: string;
  title: string;
  sectionNumber: string;
  children: React.ReactNode;
}

export const RuleSection = ({ id, title, sectionNumber, children }: RuleSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-16">
      <h2 className="text-2xl font-bold mb-4">{sectionNumber}. {title}</h2>
      {children}
    </section>
  );
};