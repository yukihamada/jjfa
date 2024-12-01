import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const TokenArchitecture = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">2. トークンアーキテクチャ</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>SPLトークン仕様</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">2.1 トークン規格</h3>
              <p>
                Solanaのトークン規格であるSPL Token Programを使用し、以下の特徴を実装します：
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>小数点以下9桁までの分割が可能</li>
                <li>トークンメタデータの柔軟な設定</li>
                <li>権限委譲機能によるガバナンス制御</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2.2 スマートコントラクト機能</h3>
              <ul className="list-disc pl-6">
                <li>トークン発行・移転・焼却の制御</li>
                <li>投票権重の計算ロジック</li>
                <li>ステーキング報酬の分配システム</li>
                <li>マルチシグによる重要操作の承認</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};