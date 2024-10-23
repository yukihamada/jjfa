import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-8 text-center">JJFA合同会社 定款</h1>
            
            <ScrollArea className="h-[calc(100vh-200px)] pr-4">
              <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">第1章　総則</h2>
                
                <h3 className="font-bold mt-6 mb-2">（商号）</h3>
                <p>第1条　本会社は、合同会社JJFAと称する。</p>
                
                <h3 className="font-bold mt-6 mb-2">（目的）</h3>
                <p>第2条　本会社は、次の事業を行うことを目的とする。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>柔術の普及および啓蒙に関する事業</li>
                  <li>柔術に関するイベント、セミナーの企画、運営および開催</li>
                  <li>柔術に関する情報の収集、提供および販売</li>
                  <li>オンラインプラットフォームおよびアプリケーションの開発、運営および管理</li>
                  <li>ユーティリティトークンの発行、管理および運用</li>
                  <li>ブロックチェーン技術を活用したシステムの開発およびコンサルティング業務</li>
                  <li>各種コンテンツの企画、制作、販売および配信</li>
                  <li>スポーツ用品、衣類、アクセサリー等の企画、製造、販売および輸出入</li>
                  <li>前各号に附帯または関連する一切の事業</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（本店所在地）</h3>
                <p>第3条　本会社は、本店を東京都新宿区西新宿1丁目2番3号に置く。</p>

                <h3 className="font-bold mt-6 mb-2">（公告の方法）</h3>
                <p>第4条　本会社の公告は、電子公告の方法により行う。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第2章　社員および出資</h2>

                <h3 className="font-bold mt-6 mb-2">（社員の氏名および住所）</h3>
                <p>第5条　本会社の社員の氏名および住所は、次のとおりとする。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>濱田 優貴　住所：東京都〇〇区〇〇町〇丁目〇番〇号</li>
                  <li>堤 達生　住所：東京都〇〇区〇〇町〇丁目〇番〇号</li>
                  <li>粟田 健太郎　住所：香川県〇〇市〇〇町〇丁目〇番〇号</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（社員の責任）</h3>
                <p>第6条　各社員の責任は、その出資の価額を限度とする有限責任社員とする。</p>

                <h3 className="font-bold mt-6 mb-2">（出資の目的およびその価額）</h3>
                <p>第7条　各社員の出資の目的およびその価額は、次のとおりとする。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>濱田 優貴　金1,000,000円</li>
                  <li>堤 達生　金1,000,000円</li>
                  <li>粟田 健太郎　金1,000,000円</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（社員の持分の譲渡）</h3>
                <p>第8条　社員は、他の社員全員の同意を得なければ、その持分の全部または一部を譲渡することができない。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第3章　業務執行および代表</h2>

                <h3 className="font-bold mt-6 mb-2">（業務執行社員）</h3>
                <p>第9条　本会社の業務は、社員の互選により選定された業務執行社員が行う。</p>

                <h3 className="font-bold mt-6 mb-2">（代表社員）</h3>
                <p>第10条　本会社を代表する社員（以下「代表社員」という）は、次の者とする。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>濱田 優貴</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（業務の決定）</h3>
                <p>第11条　本会社の業務に関する意思決定は、以下の方法で行う。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>通常の業務：業務執行社員がこれを行う。</li>
                  <li>重要な業務：社員の過半数の同意により決定する。ただし、トークンホルダーによる投票が行われた場合、その結果を尊重するものとする。</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（業務執行社員の報酬）</h3>
                <p>第12条　業務執行社員の報酬は、社員の同意により定める。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第4章　会計</h2>

                <h3 className="font-bold mt-6 mb-2">（事業年度）</h3>
                <p>第13条　本会社の事業年度は、毎年4月1日に始まり、翌年3月31日に終わる。</p>

                <h3 className="font-bold mt-6 mb-2">（計算書類の作成および保存）</h3>
                <p>第14条　業務執行社員は、事業年度終了後、遅滞なく計算書類を作成し、法令に従い保存しなければならない。</p>

                <h3 className="font-bold mt-6 mb-2">（利益の処分）</h3>
                <p>第15条　本会社の利益は、社員の同意により処分する。ただし、原則として利益の配当は行わず、コミュニティの発展および目的達成のために再投資するものとする。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第5章　ユーティリティトークン</h2>

                <h3 className="font-bold mt-6 mb-2">（トークンの発行）</h3>
                <p>第16条　本会社は、コミュニティ運営およびサービス提供のため、ユーティリティトークン「JJFAトークン」（以下「トークン」という）を発行する。</p>

                <h3 className="font-bold mt-6 mb-2">（トークンの性質）</h3>
                <p>第17条　トークンは、本会社が提供するサービスおよびプラットフォーム内で利用可能なユーティリティトークンであり、法定通貨および証券ではない。</p>

                <h3 className="font-bold mt-6 mb-2">（トークンの利用）</h3>
                <p>第18条　トークンは、以下の用途に使用できる。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>道場の月謝、大会参加費、セミナー費用の支払い</li>
                  <li>オンラインコンテンツ、教材、グッズの購入</li>
                  <li>コミュニティへの貢献に対する報酬の受領</li>
                  <li>ガバナンスへの参加（提案提出および投票）</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（トークンの管理）</h3>
                <p>第19条　トークンの発行、流通および管理は、ブロックチェーン技術およびスマートコントラクトを用いて行い、透明性と安全性を確保する。</p>

                <h3 className="font-bold mt-6 mb-2">（トークンホルダーの権利）</h3>
                <p>第20条　トークンホルダーは、以下の権利を有する。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>本会社の提供するサービスおよび商品をトークンを用いて利用・購入する権利</li>
                  <li>本会社の運営に関する提案を提出し、投票に参加する権利</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（トークンの譲渡）</h3>
                <p>第21条　トークンは、法令に反しない限りにおいて、自由に譲渡することができる。</p>

                <h3 className="font-bold mt-6 mb-2">（法令遵守とKYC/AML対策）</h3>
                <p>第22条　本会社は、トークンの発行および運用に際し、資金決済法、金融商品取引法、犯罪収益移転防止法その他の関連法令を遵守し、必要なKYC/AML対策を講じる。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第6章　解散および清算</h2>

                <h3 className="font-bold mt-6 mb-2">（解散事由）</h3>
                <p>第23条　本会社は、次の事由により解散する。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>社員の同意</li>
                  <li>会社法その他の法令に定める事由</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（残余財産の分配）</h3>
                <p>第24条　本会社が解散した場合の残余財産は、社員の出資の割合に応じて分配する。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第7章　雑則</h2>

                <h3 className="font-bold mt-6 mb-2">（定款の変更）</h3>
                <p>第25条　本定款の変更は、社員全員の同意によるものとする。</p>

                <h3 className="font-bold mt-6 mb-2">（準拠法）</h3>
                <p>第26条　本定款に定めのない事項は、会社法その他の日本国の法令に従う。</p>

                <h3 className="font-bold mt-6 mb-2">（裁判管轄）</h3>
                <p>第27条　本会社に関する紛争については、本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とする。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">附則</h2>

                <ol className="list-decimal pl-6 mb-4">
                  <li>（設立の年月日）<br />本会社の成立は、令和〇年〇月〇日とする。</li>
                  <li>（最初の業務執行社員および代表社員）<br />本会社の最初の業務執行社員および代表社員は、濱田 優貴とする。</li>
                  <li>（設立時の出資の履行）<br />各社員は、設立時に前記第7条に定める出資の全額を払い込み、または給付するものとする。</li>
                </ol>

                <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">
                    ※ この定款は、ブロックチェーン上に記録され、誰でも閲覧および検証が可能です。
                    変更履歴もすべて透明性をもって管理されています。
                  </p>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;