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
                JJFA合同会社 運営規程
              </h1>
            </div>

            <div className="prose prose-slate max-w-none">
              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第1章 総則</h2>

                <h3 className="font-bold mt-6 mb-2">第1条（目的）</h3>
                <p>本運営規程は、JJFA合同会社（以下「当会社」）が発行するトークンおよびDAO（分散型自律組織）の運営方針を定め、透明性、公平性、効率性、セキュリティを高め、トークン保有者全員が信頼と安心の中でコミュニティ活動を行えるエコシステムを構築することを目的とする。</p>

                <h3 className="font-bold mt-6 mb-2">第2条（適用範囲）</h3>
                <p>本規程は、当会社が発行する以下のトークンおよび関連活動に適用される。</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>社員権トークン（Equity Token）</li>
                  <li>ガバナンストークン（Governance Token）</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第3条（用語の定義）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>提案：トークン保有者または運営チームがDAO総会に提出する改善案、予算案、または新規プロジェクト案を指す。</li>
                  <li>スマートコントラクト：トークン発行・管理および投票プロセスを技術的に実現するためのブロックチェーンプログラム。</li>
                  <li>公式プラットフォーム：DAO総会の管理、提案の公開、進捗報告を行うオンラインシステム。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第2章 運営体制</h2>

                <h3 className="font-bold mt-6 mb-2">第4条（運営組織の構成）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>DAO総会
                    <ul className="list-disc pl-6 mt-2">
                      <li>役割：最高意思決定機関であり、トークン保有者全員で構成される。</li>
                      <li>議題の例：トークンの総発行量変更、新規プロジェクトの採択、規程改定の承認。</li>
                      <li>開催頻度：四半期ごと（必要に応じて臨時開催）。</li>
                      <li>議事録公開：議事録は総会終了後7日以内に公式プラットフォームで公開する。</li>
                    </ul>
                  </li>
                  <li>運営チーム
                    <ul className="list-disc pl-6 mt-2">
                      <li>構成と役割：以下の専門チームで構成される。</li>
                      <li>技術チーム：スマートコントラクト運用、トークンセキュリティ監視。
                        <ul className="list-disc pl-6">
                          <li>例：スマートコントラクトのバグ報告対応、外部監査依頼。</li>
                        </ul>
                      </li>
                      <li>コミュニティチーム：意見収集、保有者間の調整、広報活動。
                        <ul className="list-disc pl-6">
                          <li>例：SNSを活用した提案の意見収集キャンペーン。</li>
                        </ul>
                      </li>
                      <li>財務チーム：予算編成、利益配分の管理。
                        <ul className="list-disc pl-6">
                          <li>例：トークン配分の進捗報告書の作成と公開。</li>
                        </ul>
                      </li>
                      <li>法務チーム：規程改定案作成、規制遵守確認。
                        <ul className="list-disc pl-6">
                          <li>例：各国の暗号資産規制に基づく運営方針の助言。</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第5条（責任と権限の分担）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>DAO総会：
                    <ul className="list-disc pl-6 mt-2">
                      <li>責任：重要事項の審議・決議。</li>
                      <li>権限：提案採択、新規プロジェクトの承認、規程改定の承認。</li>
                    </ul>
                  </li>
                  <li>運営チーム：
                    <ul className="list-disc pl-6 mt-2">
                      <li>責任：決議内容の実行と進捗管理。</li>
                      <li>権限：日常業務の遂行、トークン管理、トラブル対応。</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第3章 提案および意思決定プロセス</h2>

                <h3 className="font-bold mt-6 mb-2">第6条（提案の要件と審査）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>提案の要件
                    <ul className="list-disc pl-6 mt-2">
                      <li>提案は以下の要素を含む必要がある：</li>
                      <li>提案名：簡潔で内容を端的に表現した名称。</li>
                      <li>目的と背景：提案の動機、解決すべき課題。</li>
                      <li>詳細内容：実行方法、期待される成果、リスク管理策。</li>
                      <li>必要な予算：金額と具体的な用途。</li>
                      <li>担当者またはチーム：実行を担う人物またはグループの詳細。</li>
                    </ul>
                  </li>
                  <li>審査プロセス
                    <ul className="list-disc pl-6 mt-2">
                      <li>提出後、運営チームの各専門チームが以下の観点で審査を行う：</li>
                      <li>技術的妥当性（技術チーム）：スマートコントラクトの変更が必要か。</li>
                      <li>財務的実現可能性（財務チーム）：予算の適切性とリソースの妥当性。</li>
                      <li>法的適合性（法務チーム）：関連法令に違反しないか。</li>
                    </ul>
                  </li>
                  <li>提案公開
                    <ul className="list-disc pl-6 mt-2">
                      <li>審査後、提案は公式プラットフォームに公開され、全保有者に通知する。</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第7条（投票および決議の詳細）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>投票システム
                    <ul className="list-disc pl-6 mt-2">
                      <li>スマートコントラクト上で実施し、以下の方式を採用する：</li>
                      <li>投票は保有トークン数に基づく重み付け（例：社員権トークン1枚＝1票）。</li>
                      <li>投票結果はブロックチェーン上で公開され、改ざん不可能。</li>
                    </ul>
                  </li>
                  <li>投票期間
                    <ul className="list-disc pl-6 mt-2">
                      <li>投票期間は7日間とし、意見収集期間（1週間）後に開始する。</li>
                    </ul>
                  </li>
                  <li>決議条件
                    <ul className="list-disc pl-6 mt-2">
                      <li>特別決議：全投票数の3分の2以上の賛成を要する。</li>
                      <li>例：トークン総量の変更、規程改定。</li>
                      <li>普通決議：全投票数の過半数の賛成を要する。</li>
                      <li>例：プロジェクト予算の承認、改善提案の採択。</li>
                    </ul>
                  </li>
                  <li>実施と報告
                    <ul className="list-disc pl-6 mt-2">
                      <li>承認された提案は運営チームが実施を開始し、進捗状況を四半期ごとに公式プラットフォームで報告する。</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第4章 トークン管理とセキュリティ</h2>

                <h3 className="font-bold mt-6 mb-2">第8条（トークンの発行および管理）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>トークンの発行・配分・再発行は、スマートコントラクトに基づき実施する。</li>
                  <li>発行状況、取引履歴、保有者分布は公式プラットフォーム上でリアルタイムで公開される。</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第9条（紛失および不正利用の対応）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>紛失時の対応
                    <ul className="list-disc pl-6 mt-2">
                      <li>保有者がウォレット紛失を申請する場合、以下のプロセスを経る：</li>
                      <li>本人確認（例：ID提出とビデオ認証）。</li>
                      <li>DAO総会の承認後、紛失トークンを無効化し新しいトークンを発行。</li>
                    </ul>
                  </li>
                  <li>不正利用時の対応
                    <ul className="list-disc pl-6 mt-2">
                      <li>不正使用が確認された場合、運営チームは以下を実施する：</li>
                      <li>該当トークンの凍結：スマートコントラクトで即時凍結。</li>
                      <li>法的措置：被害者救済および加害者に対する追及措置。</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第5章 ガバナンスおよび透明性</h2>

                <h3 className="font-bold mt-6 mb-2">第10条（運営報告の具体化）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>四半期ごとの運営報告
                    <ul className="list-disc pl-6 mt-2">
                      <li>各専門チームは、以下を含む報告書を作成する：</li>
                      <li>トークン発行状況と取引履歴。</li>
                      <li>DAO総会の決議事項と進捗状況。</li>
                      <li>利益配分の詳細および予算執行状況。</li>
                    </ul>
                  </li>
                  <li>報告の公開と質疑応答
                    <ul className="list-disc pl-6 mt-2">
                      <li>報告書は公式プラットフォームで公開され、保有者からの質疑に対応するセッションを設ける。</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mt-8 mb-4">第6章 附則</h2>

                <h3 className="font-bold mt-6 mb-2">第11条（規程改定の手続き）</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>規程改定案はDAO総会での特別決議によって承認される。</li>
                  <li>改定内容は即時施行され、公式プラットフォームに公開する。</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">第12条（施行日）</h3>
                <p>本規程は、2024年●月●日より施行する。</p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatingRules;