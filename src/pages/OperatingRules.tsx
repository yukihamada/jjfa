import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { PageTitle } from "@/components/PageTitle";

const OperatingRules = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen">
      <PageTitle title={isJapanese ? "運営規程" : "Operating Rules"} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                合同会社JJFA 運営規程
              </h1>
            </div>

            <div className="prose prose-slate max-w-none">
              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第1章 総則</h2>

                <h3 className="font-bold mt-6 mb-2">第1条（目的）</h3>
                <p>本規程は、合同会社JJFA（以下「当会社」という）の運営に関する基本的事項を定め、柔術の普及と啓蒙という当会社の目的達成に向け、効率的かつ透明性のある組織運営を確保することを目的とする。</p>

                <h3 className="font-bold mt-6 mb-2">第2条（適用範囲）</h3>
                <p>本規程は、<strong>当会社の業務執行社員、社員（MASTER NFTホルダー）、およびガバナンストークンホルダー（VOTE Tokenホルダー）</strong>に適用され、当会社の運営に関わる全てのメンバーに対して効力を持つものとする。</p>
                <p>本規程は、Discord上で公開され、常時参照可能な状態を維持する。</p>

                <h3 className="font-bold mt-6 mb-2">第3条（基本理念）</h3>
                <p>当会社は、次の基本理念に基づき運営される。</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>オープン性：誰もが参加可能である開かれた組織運営</li>
                  <li>透明性：意思決定プロセスと実行内容の可視化</li>
                  <li>公平性：全てのステークホルダーの権利を尊重</li>
                  <li>持続可能性：長期的発展を見据えた運営</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第2章 組織構造とロールの定義</h2>

                <h3 className="font-bold mt-6 mb-2">第4条（ロールの種類と権限）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>業務執行社員（コアホルダー）
                    <ul className="list-disc pl-6 mt-2">
                      <li>法的代表権を持ち、当会社の意思決定に参加する権限</li>
                      <li>年間報酬：基本給＋業績連動報酬（上限：年間売上の10%）</li>
                      <li>トレジャリー管理権：単独で100万円未満の資金執行が可能</li>
                    </ul>
                  </li>
                  <li>社員（MASTER NFTホルダー）
                    <ul className="list-disc pl-6 mt-2">
                      <li>議決権：1つのMASTER NFTにつき1票の議決権</li>
                      <li>収益分配請求権（出資額を上限とする）</li>
                      <li>新規事業提案権</li>
                      <li>四半期報告書の閲覧権</li>
                    </ul>
                  </li>
                  <li>ガバナンストークンホルダー（VOTE Tokenホルダー）
                    <ul className="list-disc pl-6 mt-2">
                      <li>議決権：保有するVOTE Token数に応じた投票力を有する</li>
                      <li>運営方針提案権</li>
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

                <h3 className="font-bold mt-6 mb-2">第5条（ロールの取得と喪失）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>ロール取得条件
                    <ul className="list-disc pl-6 mt-2">
                      <li>業務執行社員：DAO総会での賛成票75%以上の承認が必要</li>
                      <li>社員（MASTER NFTホルダー）：規定の出資額でMASTER NFTを取得すること</li>
                      <li>ガバナンストークンホルダー（VOTE Tokenホルダー）：公式サイトにてKYC（本人確認）完了</li>
                      <li>コントリビューター：Discordで30日以上の活動実績</li>
                    </ul>
                  </li>
                  <li>ロール喪失事由
                    <ul className="list-disc pl-6 mt-2">
                      <li>自主的な退会</li>
                      <li>規約違反による資格剥奪（DAO総会での議決が必要）</li>
                      <li>60日以上の活動実績なし</li>
                      <li>トークンの移転または喪失</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第3章 DAO総会</h2>

                <h3 className="font-bold mt-6 mb-2">第6条（DAO総会の種類と開催）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>定期総会
                    <ul className="list-disc pl-6 mt-2">
                      <li>四半期に1回開催</li>
                      <li>開催日の14日前までに告知し、アジェンダを7日前までに公開</li>
                    </ul>
                  </li>
                  <li>臨時総会
                    <ul className="list-disc pl-6 mt-2">
                      <li>業務執行社員が必要と認めた場合</li>
                      <li>トークンホルダーの30%以上の請求があった場合</li>
                      <li>開催日の7日前までに告知</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第7条（議決権行使）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>投票方法
                    <ul className="list-disc pl-6 mt-2">
                      <li>Snapshot.orgによるオンライン投票を利用</li>
                      <li>投票期間は最低72時間</li>
                      <li>結果はブロックチェーン上に記録</li>
                    </ul>
                  </li>
                  <li>定足数
                    <ul className="list-disc pl-6 mt-2">
                      <li>重要事項：総議決権の66%以上の参加</li>
                      <li>通常事項：総議決権の51%以上の参加</li>
                    </ul>
                  </li>
                  <li>議決要件
                    <ul className="list-disc pl-6 mt-2">
                      <li>定款変更：75%以上の賛成</li>
                      <li>重要事項：66%以上の賛成</li>
                      <li>通常事項：51%以上の賛成</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第8条（委任投票）</h3>
                <p>トークンホルダーは他のホルダーに投票を委任可能。委任は個別議案ごとに設定でき、委任状はブロックチェーン上で管理する。</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第4章 業務執行</h2>

                <h3 className="font-bold mt-6 mb-2">第9条（業務執行の区分と決定プロセス）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>日常的業務（業務執行社員が単独で決定可能）
                    <ul className="list-disc pl-6 mt-2">
                      <li>100万円未満の支出</li>
                      <li>イベント運営や広報活動、コミュニティ管理など</li>
                    </ul>
                  </li>
                  <li>重要業務（DAO総会の決議が必要）
                    <ul className="list-disc pl-6 mt-2">
                      <li>100万円以上の支出</li>
                      <li>新規事業の開始、人事施策の策定、トークンエコノミーの変更</li>
                    </ul>
                  </li>
                </ol>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatingRules;