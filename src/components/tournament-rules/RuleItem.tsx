interface RuleItemProps {
  title: string;
  description: string;
  ruleNumber: string;
  sectionNumber?: string;
}

export const RuleItem = ({ title, description, ruleNumber, sectionNumber }: RuleItemProps) => {
  const fullRuleNumber = sectionNumber ? `${sectionNumber}.${ruleNumber}` : ruleNumber;
  
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2 flex gap-2">
        <span className="text-blue-600">{fullRuleNumber}</span>
        {title}
      </h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};