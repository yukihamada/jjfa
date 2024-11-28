import { Link } from "react-scroll";

export const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "はじめに" },
    { id: "match-format", title: "試合形式" },
    { id: "team-rules", title: "団体戦ルール" },
    { id: "point-system", title: "ポイントシステム" },
    { id: "valid-techniques", title: "有効技" },
    { id: "prohibited-techniques", title: "禁止技" },
    { id: "safety-measures", title: "安全対策" },
    { id: "emergency-response", title: "緊急時の対応" },
    { id: "eligibility", title: "参加資格" },
    { id: "player-responsibilities", title: "選手の責任" },
    { id: "manners", title: "マナーと礼儀" },
    { id: "uniform", title: "ユニフォーム規定" },
    { id: "referee", title: "レフェリーと試合進行" },
    { id: "conduct", title: "行動規範" },
    { id: "ranking", title: "大会チーム・個人ランキング" },
    { id: "doping", title: "ドーピング管理" },
    { id: "qualification", title: "資格とチーム移籍" },
    { id: "awards", title: "表彰とメダル授与" },
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