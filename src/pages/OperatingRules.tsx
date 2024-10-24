import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const OperatingRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">合同会社JJFA 運営規程</h1>
            
            <ScrollArea className="h-[calc(100vh-200px)] pr-4">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">第1章 総則</h2>

                <h3 className="font-bold mt-6 mb-2">第1条（目的）</h3>
                <p>本規程は、合同会社JJFA（以下「当会社」という）の運営に関する基本的事項を定め、柔術の普及および啓蒙という当会社の目的達成に向けて、効率的かつ透明性のある組織運営を確保することを目的とする。</p>

                <h3 className="font-bold mt-6 mb-2">第2条（適用範囲）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>本規程は、当会社の業務執行社員、社員およびトークンホルダーに適用される。</li>
                  <li>本規程は、Discord上で公開され、常時参照可能な状態を維持する。</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第3条（基本理念）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>当会社は、以下の基本理念に基づき運営される。
                    <ul className="list-disc pl-6 mt-2">
                      <li>オープン性：誰もが参加可能な開かれた組織運営</li>
                      <li>透明性：意思決定プロセスと実行内容の可視化</li>
                      <li>公平性：全てのステークホルダーの権利の尊重</li>
                      <li>持続可能性：長期的な発展を目指した運営</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第2章 組織構造とロールの定義</h2>

                <h3 className="font-bold mt-6 mb-2">第4条（ロールの種類と権限）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>業務執行社員（コアホルダー）
                    <ul className="list-disc pl-6 mt-2">
                      <li>法的代表権の行使</li>
                      <li>業務執行の意思決定への参画</li>
                      <li>年間報酬：基本給＋業績連動報酬（上限：年間売上の10%）</li>
                      <li>トレジャリーの管理権限（単独で100万円未満の執行が可能）</li>
                    </ul>
                  </li>
                  <li>社員権トークンホルダー
                    <ul className="list-disc pl-6 mt-2">
                      <li>議決権：1トークンにつき1票</li>
                      <li>収益分配請求権（出資額を上限）</li>
                      <li>新規事業提案権</li>
                      <li>四半期報告書の閲覧権</li>
                    </ul>
                  </li>
                  <li>ガバナンストークンホルダー
                    <ul className="list-disc pl-6 mt-2">
                      <li>議決権：保有トークン数に応じた投票力</li>
                      <li>運営方針への提案権</li>
                      <li>月次活動報告の閲覧権</li>
                    </ul>
                  </li>
                  <li>コントリビューター
                    <ul className="list-disc pl-6 mt-2">
                      <li>活動提案権</li>
                      <li>貢献度に応じたリワードトークンの取得</li>
                      <li>コミュニティチャンネルへのアクセス権</li>
                    </ul>
                  </li>
                </ol>

                {/* ... 残りの条文も同様のフォーマットで続く ... */}
                
                <h3 className="font-bold mt-6 mb-2">第18条（改廃手続）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>本規程の改廃は、DAO総会の特別決議（75%以上の賛成）により行う。</li>
                  <li>軽微な変更については、業務執行社員の判断で行うことができる。</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">附則</h2>
                <ol className="list-decimal pl-6 mb-4">
                  <li>本規程は2024年4月1日から施行する。</li>
                  <li>本規程の実施に必要な細則は、業務執行社員が別に定める。</li>
                </ol>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatingRules;