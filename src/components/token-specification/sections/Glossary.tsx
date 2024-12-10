import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Glossary = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">9. 用語集・参考資料</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>用語集</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">主要用語</h3>
              <ul className="space-y-2">
                <li><strong>DAO</strong>: 分散型自律組織。参加者全員で運営方針を決める組織形態。</li>
                <li><strong>ガバナンス</strong>: プロジェクト方針や資金活用を決める仕組み。</li>
                <li><strong>ブリッジ</strong>: 異なるブロックチェーン間でトークンや情報をやり取りする仕組み。</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">参考資料</h3>
              <ul className="space-y-2">
                <li><a href="https://docs.solana.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Solana公式ドキュメント</a></li>
                <li><a href="https://www.wormholenetwork.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Wormholeブリッジ情報</a></li>
                <li><a href="https://ethereum.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ethereum & ERC-20標準</a></li>
                <li><a href="https://jpdao.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">日本DAO協会ガイドライン</a></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};