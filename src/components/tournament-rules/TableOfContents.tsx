import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "はじめに" },
    { id: "match-format", title: "試合形式" },
    { id: "team-rules", title: "団体戦ルール" },
    { id: "point-system", title: "ポイントシステム" },
    { id: "safety-measures", title: "安全対策" },
    { id: "technology-integration", title: "テクノロジー統合" },
    { id: "career-development", title: "選手キャリア開発" },
    { id: "global-standards", title: "国際標準化" },
    { id: "community-engagement", title: "コミュニティ参加" },
    { id: "sustainability", title: "持続可能性への取り組み" }
  ];

  return (
    <nav className="bg-slate-100 p-6 rounded-lg mb-12 print:border print:border-slate-200">
      <h2 className="text-xl font-bold mb-6 text-center border-b pb-4">目次</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.id}
              smooth={true}
              duration={500}
              className="text-slate-700 hover:text-blue-600 cursor-pointer flex items-center print:cursor-text print:hover:text-slate-700"
            >
              <span className="mr-2">•</span>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};