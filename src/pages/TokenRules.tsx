import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TokenRulesHeader } from "@/components/token-rules/TokenRulesHeader";
import { Chapter1 } from "@/components/token-rules/sections/Chapter1";
import { Chapter2 } from "@/components/token-rules/sections/Chapter2";
import { Chapter3 } from "@/components/token-rules/sections/Chapter3";
import { Chapter4 } from "@/components/token-rules/sections/Chapter4";
import { Chapter5 } from "@/components/token-rules/sections/Chapter5";
import { Appendix } from "@/components/token-rules/sections/Appendix";

const TokenRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <TokenRulesHeader />
            
            <ScrollArea className="h-[calc(100vh-200px)] pr-4">
              <div className="prose prose-slate max-w-none">
                <Chapter1 />
                <Chapter2 />
                <Chapter3 />
                <Chapter4 />
                <Chapter5 />
                <Appendix />

                <div className="mt-8 text-sm text-slate-600">
                  <p>本規程は、<a href="https://jpdao.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://jpdao.org/</a> にて公開されている日本DAO協会のガイドラインを参考に作成されました。</p>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenRules;