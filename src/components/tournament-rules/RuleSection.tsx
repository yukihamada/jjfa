interface RuleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const RuleSection = ({ id, title, children }: RuleSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20 px-4 md:px-6">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800">
        {title}
      </h2>
      <div className="space-y-2 md:space-y-4">
        {children}
      </div>
    </section>
  );
};