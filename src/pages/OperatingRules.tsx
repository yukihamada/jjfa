import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/PageTitle";
import { OperatingRulesHeader } from "@/components/operating-rules/OperatingRulesHeader";
import { TableOfContents } from "@/components/operating-rules/TableOfContents";
import { Chapter1 } from "@/components/operating-rules/sections/Chapter1";
import { Chapter2 } from "@/components/operating-rules/sections/Chapter2";
import { Chapter3 } from "@/components/operating-rules/sections/Chapter3";
import { Chapter4 } from "@/components/operating-rules/sections/Chapter4";
import { Chapter5 } from "@/components/operating-rules/sections/Chapter5";
import { Chapter6 } from "@/components/operating-rules/sections/Chapter6";
import { Link } from "react-router-dom";
import { FileText, BookOpen, Coins } from "lucide-react";

const OperatingRules = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  const documents = [
    {
      title: isJapanese ? "ホワイトペーパー" : "Whitepaper",
      description: isJapanese ? "JJFAのビジョンと目標" : "JJFA Vision and Goals",
      icon: FileText,
      link: "/whitepaper"
    },
    {
      title: isJapanese ? "定款" : "Articles",
      description: isJapanese ? "JJFAの基本規則" : "JJFA Basic Rules",
      icon: BookOpen,
      link: "/articles"
    },
    {
      title: isJapanese ? "トークン規程" : "Token Rules",
      description: isJapanese ? "トークンに関する規定" : "Token Related Rules",
      icon: Coins,
      link: "/token-rules"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageTitle title={isJapanese ? "運営規程" : "Operating Rules"} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <OperatingRulesHeader />
            
            {/* Related Documents Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {documents.map((doc) => {
                const Icon = doc.icon;
                return (
                  <Link 
                    key={doc.title}
                    to={doc.link}
                    className="group p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-slate-600" />
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900">
                        {doc.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {doc.description}
                    </p>
                  </Link>
                )
              })}
            </div>

            <TableOfContents />
            <div className="prose prose-slate max-w-none">
              <Chapter1 />
              <Chapter2 />
              <Chapter3 />
              <Chapter4 />
              <Chapter5 />
              <Chapter6 />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatingRules;