import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const SecurityMeasures = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6" />
        4. セキュリティ対策
      </h2>
      
      <Card>
        <CardHeader>
          <CardTitle>セキュリティ設計と監査体制</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">4.1 スマートコントラクトセキュリティ</h3>
              <ul className="list-disc pl-6">
                <li>Anchorフレームワークによる型安全性の確保</li>
                <li>権限管理の厳格な実装</li>
                <li>第三者機関による監査の実施</li>
                <li>テストネットでの十分な検証</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4.2 運用セキュリティ</h3>
              <ul className="list-disc pl-6">
                <li>マルチシグウォレットによる管理</li>
                <li>緊急時のアップグレード機能</li>
                <li>定期的なセキュリティ監査</li>
                <li>インシデント対応プランの整備</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">4.3 監視体制</h3>
              <ul className="list-disc pl-6">
                <li>24時間365日のトランザクション監視</li>
                <li>異常検知システムの導入</li>
                <li>定期的なセキュリティレポートの公開</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};