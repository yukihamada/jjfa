import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "はじめに" },
    { id: "match-format", title: "試合形式" },
    { id: "point-system", title: "ポイントシステム" },
    { id: "penalties", title: "ペナルティ" },
    { id: "safety-measures", title: "安全対策" },
    { id: "venue-layout", title: "会場レイアウト" },
    { id: "staff-responsibilities", title: "大会運営スタッフの責任" },
    { id: "technology-integration", title: "テクノロジー統合" },
    { id: "career-development", title: "選手キャリア開発" },
    { id: "global-standards", title: "国際標準化" },
    { id: "community-engagement", title: "コミュニティ参加" },
    { id: "code-of-conduct", title: "行動規範" },
    { id: "award-ceremony", title: "表彰式" },
    { id: "team-points", title: "チームポイント" },
    { id: "rankings", title: "ランキングシステム" },
    { id: "bracket-system", title: "ブラケットシステム" },
    { id: "black-belt-system", title: "黒帯制度" },
    { id: "team-rules", title: "団体戦ルール" },
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