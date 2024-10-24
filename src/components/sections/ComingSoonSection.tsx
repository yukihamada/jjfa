import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Database, Lock } from "lucide-react";

export const ComingSoonSection = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        開発中のサービス
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-100">
        JJFAは柔術界の未来を形作っています。最新のテクノロジーを活用し、
        より透明性が高く効率的な柔術コミュニティの構築を目指しています。
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Building2 className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>道場管理システム</CardTitle>
            <CardDescription>
              いつでもどこでもモバイルアプリでアクセスできる、道場運営のためのオールインワンソリューション。
              <ul className="mt-4 space-y-2 text-left">
                <li>・ 会員管理システム</li>
                <li>・ クラススケジュール管理</li>
                <li>・ 出席管理と分析</li>
                <li>・ 支払い管理</li>
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
              帯の昇級や大会結果をブロックチェーンで安全に記録・管理。
              改ざん防止機能付きの実績認証システムで正確なキャリアトラッキングを実現。
              <ul className="mt-4 space-y-2 text-left">
                <li>・ デジタル帯昇級認証</li>
                <li>・ ブロックチェーン大会記録</li>
                <li>・ NFTメダルとタイトル</li>
                <li>・ グローバル実績認証</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};