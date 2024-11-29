import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "1. はじめに" },
    { id: "match-format", title: "2. 試合形式" },
    { id: "uniform-rules", title: "3. 服装規定" },
    { id: "age-categories", title: "4. 年齢カテゴリー" },
    { id: "match-duration", title: "5. 試合時間" },
    { id: "weight-divisions", title: "6. 体重区分" },
    { id: "point-system", title: "7. ポイントシステム" },
    { id: "referee-basics", title: "8. レフェリーの基本原則" },
    { id: "penalties", title: "9. ペナルティ" },
    { id: "safety-measures", title: "10. 安全対策" },
    { id: "bracket-system", title: "11. ブラケットシステム" },
    { id: "team-points", title: "12. チームポイント" },
    { id: "rankings", title: "13. ランキングシステム" },
    { id: "black-belt-system", title: "14. 黒帯制度" },
    { id: "team-rules", title: "15. 団体戦ルール" },
    { id: "venue-layout", title: "16. 会場レイアウト" },
    { id: "staff-responsibilities", title: "17. 大会運営スタッフの責任" },
    { id: "award-ceremony", title: "18. 表彰式" },
    { id: "code-of-conduct", title: "19. 行動規範" },
    { id: "technology-integration", title: "20. テクノロジー統合" },
    { id: "career-development", title: "21. 選手キャリア開発" },
    { id: "global-standards", title: "22. 国際標準化" },
    { id: "community-engagement", title: "23. コミュニティ参加" },
    { id: "sustainability", title: "24. 持続可能性への取り組み" }
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
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};