import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Database, Lock } from "lucide-react";

export const ComingSoonSection = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        Coming Soon
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-100">
        JJFAは柔術界の未来を創造します。最新のテクノロジーを活用し、
        より透明で効率的な柔術コミュニティの構築を目指しています。
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Building2 className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>道場運営システム</CardTitle>
            <CardDescription>
              会員管理、スケジュール管理、出席管理など、道場運営に必要な機能を
              オールインワンで提供。モバイルアプリでいつでもどこでも簡単アクセス。
              <ul className="mt-4 space-y-2 text-left">
                <li>・ 会員管理システム</li>
                <li>・ クラススケジュール管理</li>
                <li>・ 出席記録と分析</li>
                <li>・ 会費管理</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-300">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Database className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>ブロックチェーン認証システム</CardTitle>
            <CardDescription>
              帯の昇級記録や大会成績をブロックチェーンで安全に記録・管理。
              改ざん不可能な実績証明システムで、柔術家のキャリアを正確に記録。
              <ul className="mt-4 space-y-2 text-left">
                <li>・ 帯の昇級記録の電子認証</li>
                <li>・ 大会成績のブロックチェーン記録</li>
                <li>・ NFTメダルと称号</li>
                <li>・ グローバルな実績証明</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};