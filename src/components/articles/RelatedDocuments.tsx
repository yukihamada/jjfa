import { Link } from "react-router-dom";
import { Book, FileText, Coins } from "lucide-react";

interface RelatedDocument {
  title: string;
  description: string;
  icon: any;
  link: string;
}

export const RelatedDocuments = ({ isJapanese }: { isJapanese: boolean }) => {
  const relatedDocs: RelatedDocument[] = [
    {
      title: isJapanese ? "ホワイトペーパー" : "Whitepaper",
      description: isJapanese ? "目的とビジョンを詳しく説明した文書です。" : "A document detailing purpose and vision.",
      icon: Book,
      link: "/whitepaper"
    },
    {
      title: isJapanese ? "運営規程" : "Operating Rules",
      description: isJapanese ? "DAOの運営方針や意思決定プロセスを定めた規程です。" : "Rules governing DAO operations and decision-making processes.",
      icon: FileText,
      link: "/operating-rules"
    },
    {
      title: isJapanese ? "トークン規程" : "Token Rules",
      description: isJapanese ? "トークンの発行・管理・利用に関する規程です。" : "Regulations for token issuance, management, and usage.",
      icon: Coins,
      link: "/token-rules"
    }
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">{isJapanese ? "関連ドキュメント" : "Related Documents"}</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {relatedDocs.map((doc) => {
          const Icon = doc.icon;
          return (
            <Link 
              key={doc.title}
              to={doc.link}
              className="group p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                  {doc.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600">
                {doc.description}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  );
};