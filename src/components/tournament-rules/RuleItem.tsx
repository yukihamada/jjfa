interface RuleItemProps {
  title: string;
  description: string;
}

export const RuleItem = ({ title, description }: RuleItemProps) => {
  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};