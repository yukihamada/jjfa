import { Card, CardContent } from "@/components/ui/card";
import { TokenRulesHeader } from "@/components/token-rules/TokenRulesHeader";
import { PageTitle } from "@/components/PageTitle";
import { Chapter1 } from "@/components/token-rules/sections/Chapter1";
import { Chapter2 } from "@/components/token-rules/sections/Chapter2";
import { Chapter3 } from "@/components/token-rules/sections/Chapter3";
import { Chapter4 } from "@/components/token-rules/sections/Chapter4";
import { Chapter5 } from "@/components/token-rules/sections/Chapter5";
import { Appendix } from "@/components/token-rules/sections/Appendix";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { Link } from "react-router-dom";

const TokenRules = () => {
  return (
    <div className="min-h-screen">
      <PageTitle title="トークン規程" />
      <BackgroundGradient />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <TokenRulesHeader />
            
            <div className="prose prose-slate max-w-none">
              <Chapter1 />
              <Chapter2 />
              <Chapter3 />
              <Chapter4 />
              <Chapter5 />
              <Appendix />

              <div className="mt-8 text-sm text-slate-600">
                <p>本規程は、<a href="https://jpdao.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://jpdao.org/</a> にて公開されている日本DAO協会のガイドラインを参考に作成されました。</p>
                <p className="mt-2">※トークンの詳細な背景や目的については<Link to="/whitepaper" className="text-blue-600 hover:underline">ホワイトペーパー</Link>をご参照ください。</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenRules;