import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

export const TokenTypes = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <ListChecks className="w-6 h-6" />
        5. トークンの特徴
      </h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>5.1 JJM (メンバートークン)</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">主な用途:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>利益分配</strong>: JJFAが得た収益（大会の有料配信やグッズ販売など）を保有者へ還元</li>
              <li><strong>重要事項への投票権</strong>: 例えば「新たな大会ルールを導入するか？」など、重要な意思決定に参加</li>
              <li><strong>限定イベント参加優先権</strong>: 有名黒帯によるセミナーや特別企画に優先的に参加</li>
            </ul>
            <div className="mt-4">
              <p><strong>発行量</strong>: 最大10,000枚</p>
              <p><strong>ロックアップ</strong>: 創設者分は一定期間ロックし、長期的関与を保証</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5.2 JJG (ガバナンストークン)</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">主な用途:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>提案・投票</strong>: 道場支援策や大会企画など、コミュニティ運営に関する提案</li>
              <li><strong>報酬獲得</strong>: 道場リスト整備、試合動画アーカイブ作成、初心者向け解説作成など</li>
            </ul>
            <div className="mt-4">
              <p><strong>インフレーション制限</strong>: 年3～5%までトークン発行可能、増やすときは必ずコミュニティ投票で決定</p>
              <p><strong>EVM互換（将来）</strong>: 他チェーンへのブリッジ後、イーサリアム上での投票機能に対応</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5.3 JJU (ユーティリティトークン)</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">主な用途:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>大会現地での支払い</strong>: 観戦チケット、公式グッズ、現地の飲食やサービス費用</li>
              <li><strong>スポンサー商品購入</strong>: 公式スポンサーの柔術衣、ギア、サプリなど</li>
              <li><strong>メダル・トロフィー発注</strong>: 大会主催者による記念品や特注メダル、NFT型メダル等の注文</li>
              <li><strong>特別セミナー参加費</strong>: 有名指導者のセミナーやワークショップ</li>
              <li><strong>海外遠征・交流</strong>: 海外道場でのスパーリング利用料や交流イベント参加費</li>
              <li><strong>オンラインコンテンツ購入</strong>: 技術解説動画、フィットネスプログラム、栄養指導など</li>
            </ul>
            <div className="mt-4">
              <p><strong>初期配分</strong>: 運営準備金20%、コミュニティ報酬50%、市場流通30%</p>
              <p><strong>原則追加発行なし</strong>: 必要があれば投票で決定</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};