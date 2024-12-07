import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const NetworkSelection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">1. ブロックチェーンネットワークの選定</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Solanaを採用する理由</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1.1 高速な処理速度</h3>
              <p>
                Solanaは毎秒65,000トランザクション以上を処理可能で、大会エントリーや道場予約などのリアルタイム処理に最適です。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.2 低い取引手数料</h3>
              <p>
                トランザクション手数料が0.00025 SOL（約0.01円）程度と極めて低コストで、ユーザーの利用負担を最小限に抑えられます。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.3 開発者フレンドリー</h3>
              <p>
                Rust言語による堅牢なスマートコントラクト開発が可能で、Web3.jsやAnchorフレームワークなど充実した開発ツールを活用できます。
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">1.4 エコシステムの成熟度</h3>
              <p>
                NFTマーケットプレイス、DeFiプロトコル、ウォレットなど、豊富な周辺サービスとの連携が可能です。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};