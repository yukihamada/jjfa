import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TokenOverview = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">1. 概要</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>JJFAトークンの目的</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            「Jiu-Jitsu For All (JJFA)」では、柔術が好きな人、これから始めたい人、指導者、大会主催者、ファンなど、
            世界中の誰もが関わり合い、学び合える場をつくります。その基盤として「トークン」（デジタル資産）を発行・活用します。
          </p>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">JJFAの3種類のトークン:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>JJM (メンバートークン)</strong>: 柔術コミュニティの中核メンバー向け</li>
              <li><strong>JJG (ガバナンストークン)</strong>: コミュニティ運営の投票・提案用</li>
              <li><strong>JJU (ユーティリティトークン)</strong>: 大会参加費や道場利用料、スポンサー商品、特別セミナー受講料などの支払い手段</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};