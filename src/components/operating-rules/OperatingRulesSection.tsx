interface OperatingRulesSectionProps {
  title: string;
  children: React.ReactNode;
}

export const OperatingRulesSection = ({ title, children }: OperatingRulesSectionProps) => {
  return (
    <section>
      <h2 className="text-xl font-bold mt-8 mb-4">{title}</h2>
      {children}
    </section>
  );
};