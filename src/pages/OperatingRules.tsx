import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";

const OperatingRules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">合同会社JJFA 運営規程</h1>
            
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

                <h3 className="font-bold mt-6 mb-2">第5条（ロールの取得と喪失）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>ロールの取得条件
                    <ul className="list-disc pl-6 mt-2">
                      <li>業務執行社員：DAO総会での承認（賛成票75%以上）が必要</li>
                      <li>社員権トークンホルダー：規定の出資額の払込完了</li>
                      <li>ガバナンストークンホルダー：公式サイトでのKYC完了</li>
                      <li>コントリビューター：Discordでの30日以上の活動実績</li>
                    </ul>
                  </li>
                  <li>ロールの喪失事由
                    <ul className="list-disc pl-6 mt-2">
                      <li>自主的な退会</li>
                      <li>規約違反による剥奪（DAO総会での議決必要）</li>
                      <li>60日以上の活動実績なし</li>
                      <li>トークンの移転または喪失</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第3章 DAO総会</h2>

                <h3 className="font-bold mt-6 mb-2">第6条（DAO総会の種類と開催）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>定期総会
                    <ul className="list-disc pl-6 mt-2">
                      <li>四半期に1回開催</li>
                      <li>開催日の14日前までに告知</li>
                      <li>アジェンダを7日前までに公開</li>
                    </ul>
                  </li>
                  <li>臨時総会
                    <ul className="list-disc pl-6 mt-2">
                      <li>業務執行社員が必要と認めた時</li>
                      <li>トークンホルダーの30%以上の請求があった時</li>
                      <li>開催日の7日前までに告知</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第7条（議決権行使）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>投票方法
                    <ul className="list-disc pl-6 mt-2">
                      <li>Snapshot.orgを利用したオンライン投票</li>
                      <li>投票期間は最低72時間</li>
                      <li>投票結果はブロックチェーン上に記録</li>
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
                <ol className="list-decimal pl-6 mb-4">
                  <li>トークンホルダーは他のホルダーに投票を委任可能</li>
                  <li>委任は個別議案ごとに設定可能</li>
                  <li>委任状はブロックチェーン上で管理</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第4章 業務執行</h2>

                <h3 className="font-bold mt-6 mb-2">第9条（業務執行の区分と決定プロセス）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>日常的業務（業務執行社員が単独で決定可能）
                    <ul className="list-disc pl-6 mt-2">
                      <li>100万円未満の支出</li>
                      <li>イベントの運営実務</li>
                      <li>広報活動</li>
                      <li>コミュニティ管理</li>
                    </ul>
                  </li>
                  <li>重要業務（DAO総会の決議必要）
                    <ul className="list-disc pl-6 mt-2">
                      <li>100万円以上の支出</li>
                      <li>新規事業の開始</li>
                      <li>人事施策の策定</li>
                      <li>トークンエコノミーの変更</li>
                    </ul>
                  </li>
                  <li>特別重要業務（75%以上の賛成必要）
                    <ul className="list-disc pl-6 mt-2">
                      <li>定款変更</li>
                      <li>業務執行社員の選解任</li>
                      <li>M&A関連事項</li>
                      <li>500万円以上の支出</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第10条（業務執行の報告）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>定期報告
                    <ul className="list-disc pl-6 mt-2">
                      <li>月次活動報告：毎月5日までに公開</li>
                      <li>四半期財務報告：四半期終了後30日以内に公開</li>
                      <li>年次報告書：事業年度終了後90日以内に公開</li>
                    </ul>
                  </li>
                  <li>報告内容
                    <ul className="list-disc pl-6 mt-2">
                      <li>事業KPI達成状況</li>
                      <li>財務諸表</li>
                      <li>トークン分配状況</li>
                      <li>リスク分析</li>
                      <li>コミュニティ指標</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第5章 財務管理</h2>

                <h3 className="font-bold mt-6 mb-2">第11条（トレジャリー管理）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>マルチシグウォレットの設定
                    <ul className="list-disc pl-6 mt-2">
                      <li>5名のキー保持者を選定</li>
                      <li>3名以上の承認で実行可能</li>
                      <li>キー保持者は四半期ごとに見直し</li>
                    </ul>
                  </li>
                  <li>資産の保管
                    <ul className="list-disc pl-6 mt-2">
                      <li>運転資金（20%）：トレジャリーウォレット</li>
                      <li>準備金（30%）：コールドウォレット</li>
                      <li>開発資金（50%）：タイムロック付きウォレット</li>
                    </ul>
                  </li>
                  <li>支出承認プロセス
                    <ul className="list-disc pl-6 mt-2">
                      <li>10万円未満：業務執行社員1名の承認</li>
                      <li>100万円未満：業務執行社員2名の承認</li>
                      <li>100万円以上：DAO総会の承認</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第12条（収益分配）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>収益の分配比率
                    <ul className="list-disc pl-6 mt-2">
                      <li>事業開発積立：40%</li>
                      <li>トークンホルダー還元：30%</li>
                      <li>コミュニティ報酬：20%</li>
                      <li>運営費用：10%</li>
                    </ul>
                  </li>
                  <li>分配時期
                    <ul className="list-disc pl-6 mt-2">
                      <li>四半期ごとに収益を確定</li>
                      <li>分配は四半期終了後45日以内に実施</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第6章 リスク管理</h2>

                <h3 className="font-bold mt-6 mb-2">第13条（リスク管理体制）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>リスク管理委員会の設置
                    <ul className="list-disc pl-6 mt-2">
                      <li>業務執行社員2名</li>
                      <li>外部専門家1名</li>
                      <li>コミュニティ代表2名</li>
                    </ul>
                  </li>
                  <li>モニタリング項目
                    <ul className="list-disc pl-6 mt-2">
                      <li>スマートコントラクトの脆弱性</li>
                      <li>法規制への対応状況</li>
                      <li>コミュニティの健全性</li>
                      <li>財務リスク</li>
                    </ul>
                  </li>
                  <li>緊急時対応
                    <ul className="list-disc pl-6 mt-2">
                      <li>インシデント報告システムの運用</li>
                      <li>24時間監視体制の確立</li>
                      <li>エスカレーションルートの明確化</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第7章 情報開示とコミュニケーション</h2>

                <h3 className="font-bold mt-6 mb-2">第14条（情報開示）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>開示プラットフォーム
                    <ul className="list-disc pl-6 mt-2">
                      <li>公式ウェブサイト</li>
                      <li>Discord</li>
                      <li>Mirror.xyz</li>
                      <li>GitHub</li>
                    </ul>
                  </li>
                  <li>開示内容と頻度
                    <ul className="list-disc pl-6 mt-2">
                      <li>日次：コミュニティ活動報告</li>
                      <li>週次：開発進捗報告</li>
                      <li>月次：財務状況報告</li>
                      <li>四半期：包括的活動報告</li>
                    </ul>
                  </li>
                  <li>開示言語
                    <ul className="list-disc pl-6 mt-2">
                      <li>日本語（主）</li>
                      <li>英語（従）</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第15条（コミュニティ・コミュニケーション）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>コミュニケーションチャンネル
                    <ul className="list-disc pl-6 mt-2">
                      <li>アナウンスメント（読み取り専用）</li>
                      <li>一般討議</li>
                      <li>提案・フィードバック</li>
                      <li>テクニカルサポート</li>
                    </ul>
                  </li>
                  <li>モデレーション
                    <ul className="list-disc pl-6 mt-2">
                      <li>コミュニティガイドラインの設定</li>
                      <li>モデレーターの選任（10名以内）</li>
                      <li>違反対応プロセスの明確化</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第8章 コンプライアンス</h2>

                <h3 className="font-bold mt-6 mb-2">第16条（法令遵守）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>コンプライアンス体制
                    <ul className="list-disc pl-6 mt-2">
                      <li>顧問弁護士との連携</li>
                      <li>四半期ごとの法務レビュー</li>
                      <li>コンプライアンス研修の実施</li>
                    </ul>
                  </li>
                  <li>重点監視項目
                    <ul className="list-disc pl-6 mt-2">
                      <li>金融商品取引法</li>
                      <li>資金決済法</li>
                      <li>個人情報保護法</li>
                      <li>マネーロンダリング規制</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第17条（内部統制）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>内部監査の実施
                    <ul className="list-disc pl-6 mt-2">
                      <li>年1回の定期監査</li>
                      <li>随時の特別監査</li>
                      <li>結果のDAO総会への報告</li>
                    </ul>
                  </li>
                  <li>是正措置
                    <ul className="list-disc pl-6 mt-2">
                      <li>改善計画の策定</li>
                      <li>実施状況のモニタリング</li>
                      <li>結果の公表</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">第9章 規程の改廃</h2>

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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatingRules;
