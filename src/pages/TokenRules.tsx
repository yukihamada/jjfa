import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TokenRulesHeader } from "@/components/token-rules/TokenRulesHeader";
import { TokenRulesSection } from "@/components/token-rules/TokenRulesSection";
import { TokenRulesArticle } from "@/components/token-rules/TokenRulesArticle";

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
                <TokenRulesSection title="第1章 総則">
                  <TokenRulesArticle title="第1条（目的）">
                    <ol className="list-decimal pl-6 mb-4">
                      <li>本規程は、合同会社JJFA（以下「当会社」という）が発行するトークンの種類、性質、発行方法、管理方法等について定め、以下の実現を目的とする。
                        <ul className="list-disc pl-6 mt-2">
                          <li>柔術の普及促進に向けた効果的なインセンティブ設計</li>
                          <li>透明で民主的なガバナンスの実現</li>
                          <li>トークン保有者の権利保護</li>
                          <li>健全なトークンエコノミーの構築</li>
                          <li>コミュニティの持続的な発展</li>
                        </ul>
                      </li>
                    </ol>
                  </TokenRulesArticle>

                  {/* ... 残りの条文も同様のフォーマットで続く ... */}
                </TokenRulesSection>

                {/* ... 残りの章も同様のフォーマットで続く ... */}

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