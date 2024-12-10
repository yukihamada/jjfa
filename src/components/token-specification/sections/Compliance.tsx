import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export const Compliance = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <Lock className="w-6 h-6" />
        7. 法令遵守と信頼性
      </h2>
      
      <Card>
        <CardHeader>
          <CardTitle>コンプライアンスと信頼性確保</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">法令遵守</h3>
              <p>日本の法律を優先遵守、必要ならKYC（本人確認）やAML（マネーロンダリング防止）対応を行います。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">個人情報保護</h3>
              <p>基本的にブロックチェーン上ではアドレス情報のみ管理。個人情報は外部で安全に保護。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">ブランド保護</h3>
              <p>「JJFA」ロゴや名称は当社保有。NFTやコンテンツ利用時は別途ルールを定めます。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};