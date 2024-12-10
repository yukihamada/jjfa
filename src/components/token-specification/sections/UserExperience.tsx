import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export const UserExperience = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6" />
        6. ユーザーの使いやすさ
      </h2>
      
      <Card>
        <CardHeader>
          <CardTitle>ユーザーエクスペリエンス</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">ウォレット対応</h3>
              <p>Solana対応ウォレット（Phantom等）で簡単にトークン管理可能。将来はEthereum系ウォレット(Metamask等)も対応予定。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">ガイド・チュートリアル</h3>
              <p>JJFA公式サイトで「ウォレットの作り方」「トークンの受け取り方」「大会現地での使い方」「スポンサー商品の買い方」などステップバイステップで解説。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">多言語対応</h3>
              <p>日本語・英語を中心に、多くの国のユーザーが理解できるよう順次サポート拡大。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};