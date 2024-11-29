import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";

interface RuleSectionProps {
  children: React.ReactNode;
  id: string;
  title: string;
  sectionNumber: string;
}

export const RuleSection = ({ children, id, title, sectionNumber }: RuleSectionProps) => {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-slate-600">{sectionNumber}.</span>
        {title}
      </h2>
      {children}
      <div className="mt-8 print:hidden">
        <Link
          to="table-of-contents"
          smooth={true}
          duration={500}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
          目次に戻る
        </Link>
      </div>
    </section>
  );
};