import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "0. はじめに" },
    { id: "match-format", title: "1. 試合形式" },
    { id: "uniform-rules", title: "2. 服装規定" },
    { id: "age-categories", title: "3. 年齢カテゴリー" },
    { id: "match-duration", title: "4. 試合時間" },
    { id: "weight-divisions", title: "5. 体重区分" },
    { id: "point-system", title: "6. ポイントシステム" },
    { id: "referee-basics", title: "7. レフェリーの基本原則" },
    { id: "penalties", title: "8. ペナルティ" },
    { id: "safety-measures", title: "9. 安全対策" },
    { id: "bracket-system", title: "10. ブラケットシステム" },
    { id: "team-points", title: "11. チームポイント" },
    { id: "rankings", title: "12. ランキングシステム" },
    { id: "black-belt-system", title: "13. 黒帯制度" },
    { id: "tournament-operations", title: "14. 大会運営" },
    { id: "code-of-conduct", title: "15. 行動規範" },
    { id: "anti-doping", title: "16. ドーピング管理と公正な競技" },
    { id: "technology-integration", title: "17. テクノロジー統合" },
    { id: "career-development", title: "18. キャリア開発" },
    { id: "global-standards", title: "19. 国際標準化" },
    { id: "community-engagement", title: "20. コミュニティ参加" },
    { id: "sustainability", title: "21. 持続可能性への取り組み" }
  ];

  return (
    <nav id="table-of-contents" className="bg-slate-100 p-6 rounded-lg mb-12 print:border print:border-slate-200">
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
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};