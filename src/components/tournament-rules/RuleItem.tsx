interface RuleItemProps {
  title: string;
  description: string;
  ruleNumber?: string;
}

export const RuleItem = ({ title, description, ruleNumber }: RuleItemProps) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 flex gap-2">
        {ruleNumber && <span className="text-blue-600">{ruleNumber}</span>}
        {title}
      </h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};