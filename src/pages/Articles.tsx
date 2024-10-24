import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";

const Articles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">合同会社JJFA 定款</h1>
            
            <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">第1章　総則</h2>
                
                <h3 className="font-bold mt-6 mb-2">（商号）</h3>
                <p>第1条　当会社は、合同会社JJFAと称し、英文ではJJFA, LLCと表示する。</p>
                
                <h3 className="font-bold mt-6 mb-2">（目的）</h3>
                <p>第2条　当会社は、次の事業を営むことを目的とする。</p>
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

                <h3 className="font-bold mt-6 mb-2">（本店の所在地）</h3>
                <p>第3条　当会社は、本店を〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス ２Fに置く。</p>

                <h3 className="font-bold mt-6 mb-2">（公告の方法）</h3>
                <p>第4条　当会社の公告は、電子公告の方法により行う。具体的には、当社のウェブサイト（jjforall.com）に掲載し、閲覧可能な状態にするものとする。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第2章　社員及び出資</h2>

                <h3 className="font-bold mt-6 mb-2">（社員の氏名又は名称、住所、出資及び責任）</h3>
                <p>第5条　当会社の社員の氏名又は名称、住所、出資の目的及びその価額は次のとおりである。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>濱田 優貴　住所：東京都〇〇区〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円</li>
                  <li>堤 達生　住所：東京都〇〇区〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円</li>
                  <li>粟田 健太郎　住所：香川県〇〇市〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円</li>
                </ol>
                <p>当会社の社員は、全て有限責任社員とする。</p>

                <h3 className="font-bold mt-6 mb-2">（トークンについて）</h3>
                <p>第6条　当会社の社員となることができる者は、当会社が発行し、当会社の社員権を表章するトークン（以下「社員権トークン」という。）を保有する者（以下「社員権トークンホルダー」という。）に限る。なお、「社員権トークン」とは、当法人が発行する非代替性トークンであって、電子情報処理組織を用いて移転することができ、かつ、DAO総会において別途定めるトークン規程に従い発行されるものをいう。</p>
                <p>当会社は、ガバナンストークンを保有する者をガバナンストークンホルダー（以下、社員権トークンホルダーと合わせて、「トークンホルダー」という。）として扱うものとする。なお、「ガバナンストークン」とは、社員権トークンとは別の、当法人が発行する非代替性トークンであって、電子情報処理組織を用いて移転することができる、DAO総会において別途定めるトークン規程に従い発行されるものをいう。</p>
                <p>ウォレットを紛失した場合の社員権トークン及びガバナンストークンの再発行は、DAO総会において別途定めるトークン規程に従うものとする。</p>

                <h3 className="font-bold mt-6 mb-2">（社員の加入）</h3>
                <p>第7条　社員権トークンを保有する者を、新たに社員として当会社に加入させようとするときは、DAO総会において別途定めるトークン規程に従い、定款又は社員名簿に必要事項を記入させるものとする。</p>
                <p>社員権トークンの保有者は、定款又は社員名簿に自らが社員であると記入することを請求することができる。</p>
                <p>前二項に従って当該記入が完了した時点で、当会社の社員として当会社に加入したものとし、前項に従って請求した者が保有する社員権トークンにつき元保有者が存在する場合には、当該元保有者は、当会社の社員たる資格を失う。なお、当該加入に伴う定款変更について、総社員の同意は要しないものとし、DAO総会において別途定めるトークン規程に従い、当該記入が完了されたことをもって、定款変更がなされたものとする。</p>

                <h3 className="font-bold mt-6 mb-2">（持分の譲渡制限）</h3>
                <p>第8条　当会社の社員は、他の社員の全員の承諾がなければ、その持分の全部又は一部を他人に譲渡、担保設定又はその他の処分をすることができない。ただし、社員権トークンにかかる権利とともに譲渡その他の処分をする場合は、他の社員の承諾及びその他の同意等は要しないものとする。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第3章　業務の執行及び会社の代表</h2>

                <h3 className="font-bold mt-6 mb-2">（業務執行社員）</h3>
                <p>第9条　本会社の業務は、社員の互選により選定された業務執行社員が行う。</p>

                <h3 className="font-bold mt-6 mb-2">（代表社員）</h3>
                <p>第10条　当会社を代表する社員（以下「代表社員」という。）は、濱田 優貴とする。</p>

                <h3 className="font-bold mt-6 mb-2">（業務の決定）</h3>
                <p>第11条　本会社の業務に関する意思決定は、以下の方法で行う。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>通常の業務：業務執行社員がこれを行う。</li>
                  <li>重要な業務：社員の過半数の同意により決定する。ただし、トークンホルダーによる投票が行われた場合、その結果を尊重するものとする。</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（業務執行社員の報酬）</h3>
                <p>第12条　業務執行社員の報酬は、社員の同意により定める。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第4章　DAO総会</h2>

                <h3 className="font-bold mt-6 mb-2">（DAO総会の設置）</h3>
                <p>第13条　当会社は、トークンホルダー全員で組織するDAO総会を置く。</p>

                <h3 className="font-bold mt-6 mb-2">（DAO総会の権限）</h3>
                <p>第14条　DAO総会は、以下の権限を有するものとし、DAO総会において別途定めるDAO総会規程に従い、決議を行うものとする。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>当会社のガバナンス、ファイナンス及び業務執行に関する重要な事項の決定</li>
                  <li>利益の配当及び残余財産の分配</li>
                  <li>利益相反取引についての承認</li>
                  <li>総社員の同意を要する事項に係る同意内容案の事前協議及びその決定</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">（DAO総会の決議事項）</h3>
                <p>第15条　重要な事項については、DAO総会において別途定めるDAO総会規程の定めによるものとする。</p>

                <h2 className="text-xl font-bold mt-8 mb-4">第5章　計算</h2>

                <h3 className="font-bold mt-6 mb-2">（事業年度）</h3>
                <p>第16条　本会社の事業年度は、毎年4月1日に始まり、翌年3月31日に終わる。</p>

                <h3 className="font-bold mt-6 mb-2">（計算書類等の承認）</h3>
                <p>第17条　当会社の各事業年度に係る計算書類は、各事業年度末日の翌日から起算して3ヶ月以内に、DAO総会の決議により承認されなければならない。</p>

                <h3 className="font-bold mt-6 mb-2">（利益の配当及び残余財産の分配）</h3>
                <p>第18条　当会社が利益の配当をしようとするときは、配当直前時点各事業年度末日現在の社員権トークンホルダーに配当するものとし、DAO総会の決議によって、次に掲げる事項を定めなければならない。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>配当財産の種類及び帳簿価額の総額</li>
                  <li>社員権トークンホルダーに対する配当財産の割当てに関する事項</li>
                  <li>当該利益の配当がその効力を生じる日</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第6章　解散</h2>

                <h3 className="font-bold mt-6 mb-2">（解散）</h3>
                <p>第19条　当会社は、次に掲げる事由によって、解散する。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>総社員の同意</li>
                  <li>DAO総会の決議がなされたとき</li>
                  <li>社員が欠けたこと</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第7章　附則</h2>

                <h3 className="font-bold mt-6 mb-2">（最初の事業年度）</h3>
                <p>第20条　第16条の規定にかかわらず、当会社の最初の事業年度は、当会社の設立の日から翌年3月31日までとする。</p>

                <h3 className="font-bold mt-6 mb-2">（設立時の資本金の額）</h3>
                <p>第21条　当会社の設立時の資本金の額は、金3,000,000円とする。</p>

                <h3 className="font-bold mt-6 mb-2">（本店の所在場所）</h3>
                <p>第22条　当会社の設立時の本店の所在場所は、〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス ２Fとする。</p>

                <h3 className="font-bold mt-6 mb-2">（その他）</h3>
                <p>第23条　本定款に規定のない事項は、すべて会社法その他の法令に従うものとする。</p>

                <div className="mt-8 text-sm text-slate-600">
                  <p>本定款は、<a href="https://jpdao.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://jpdao.org/</a> にて公開されている日本DAO協会の定款の雛形を参考に作成されました。</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;
