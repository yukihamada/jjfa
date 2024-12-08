import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "purpose", title: "第1章 総則" },
    { id: "organization", title: "第2章 運営体制" },
    { id: "dao", title: "第3章 提案および意思決定プロセス" },
    { id: "token", title: "第4章 トークン管理とセキュリティ" },
    { id: "governance", title: "第5章 ガバナンスと透明性" },
    { id: "other", title: "第6章 附則" },
  ];

  return (
    <nav id="table-of-contents" className="bg-slate-100 p-6 rounded-lg mb-12 print:border print:border-slate-200">
      <h2 className="text-xl font-bold mb-6 text-center border-b pb-4">目次</h2>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.id}
              smooth={true}
              duration={500}
              className="text-slate-700 hover:text-blue-600 cursor-pointer flex items-center print:cursor-text print:hover:text-slate-700"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};