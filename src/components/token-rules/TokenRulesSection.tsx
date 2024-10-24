import { Card, CardContent } from "@/components/ui/card";

interface TokenRulesSectionProps {
  title: string;
  children: React.ReactNode;
}

export const TokenRulesSection = ({ title, children }: TokenRulesSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};