import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/PageTitle";
import { OperatingRulesHeader } from "@/components/operating-rules/OperatingRulesHeader";
import { Chapter1 } from "@/components/operating-rules/sections/Chapter1";
import { Chapter2 } from "@/components/operating-rules/sections/Chapter2";
import { Chapter3 } from "@/components/operating-rules/sections/Chapter3";
import { Chapter4 } from "@/components/operating-rules/sections/Chapter4";
import { Chapter5 } from "@/components/operating-rules/sections/Chapter5";
import { Chapter6 } from "@/components/operating-rules/sections/Chapter6";

const OperatingRules = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen">
      <PageTitle title={isJapanese ? "運営規程" : "Operating Rules"} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <OperatingRulesHeader />
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