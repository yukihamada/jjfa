interface OperatingRulesSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export const OperatingRulesSection = ({ id, title, children }: OperatingRulesSectionProps) => {
  return (
    <section id={id}>
      <h2 className="text-xl font-bold mt-8 mb-4">{title}</h2>
      {children}
    </section>
  );
};