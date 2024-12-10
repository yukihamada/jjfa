import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Transparency = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">8. 情報公開と改善</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>透明性の確保と継続的改善</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">透明性</h3>
              <p>ガバナンス投票結果、トークン発行履歴、分配状況はコミュニティに公開。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">定期レポート</h3>
              <p>運営チームは定期的に大会開催成果、スポンサー販売実績、コミュニティ貢献度などを報告。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">アップデート</h3>
              <p>不明点や改善要望があればコミュニティ提案でルール変更可能。</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};