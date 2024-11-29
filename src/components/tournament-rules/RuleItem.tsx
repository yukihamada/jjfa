interface RuleItemProps {
  title: string;
  description: string;
  ruleNumber?: string;
}

export const RuleItem = ({ title, description, ruleNumber }: RuleItemProps) => {
  return (
    <div className="mb-6 md:mb-4">
      <h3 className="font-semibold mb-3 md:mb-2 flex gap-3 items-start">
        {ruleNumber && (
          <span className="text-blue-600 text-sm md:text-base min-w-[24px]">
            {ruleNumber}
          </span>
        )}
        <span className="text-sm md:text-base flex-1">{title}</span>
      </h3>
      <p className="text-slate-600 text-sm md:text-base pl-9 md:pl-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};