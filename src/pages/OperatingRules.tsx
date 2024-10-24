<lov-code>
import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const OperatingRules = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              {isJapanese ? '合同会社JJFA 運営規程' : 'Operating Rules of JJFA LLC (Japanese Original)'}
            </h1>
            
            <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第1章 総則' : 'Chapter 1: General Provisions (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第1条（目的）' : 'Article 1 (Purpose) (Japanese Original)'}</h3>
                <p>{isJapanese ? '本規程は、合同会社JJFA（以下「当会社」という）の運営に関する基本的事項を定め、柔術の普及および啓蒙という当会社の目的達成に向けて、効率的かつ透明性のある組織運営を確保することを目的とする。' : 'The purpose of these rules is to establish the basic matters concerning the operation of JJFA LLC (hereinafter referred to as "the Company") and to ensure efficient and transparent organizational management towards achieving the Company’s objectives of promoting and enlightening Jiu-Jitsu.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第2条（適用範囲）' : 'Article 2 (Scope of Application) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '本規程は、当会社の業務執行社員、社員およびトークンホルダーに適用される。' : 'These rules apply to the executive employees, members, and token holders of the Company.'}</li>
                  <li>{isJapanese ? '本規程は、Discord上で公開され、常時参照可能な状態を維持する。' : 'These rules will be published on Discord and maintained in a state that is always accessible.'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第3条（基本理念）' : 'Article 3 (Basic Principles) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '当会社は、以下の基本理念に基づき運営される。' : 'The Company shall operate based on the following basic principles.'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? 'オープン性：誰もが参加可能な開かれた組織運営' : 'Openness: An open organizational management that anyone can participate in.'}</li>
                      <li>{isJapanese ? '透明性：意思決定プロセスと実行内容の可視化' : 'Transparency: Visualization of decision-making processes and execution.'}</li>
                      <li>{isJapanese ? '公平性：全てのステークホルダーの権利の尊重' : 'Fairness: Respect for the rights of all stakeholders.'}</li>
                      <li>{isJapanese ? '持続可能性：長期的な発展を目指した運営' : 'Sustainability: Management aimed at long-term development.'}</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">{isJapanese ? '第2章 組織構造とロールの定義' : 'Chapter 2: Organizational Structure and Role Definitions (Japanese Original)'}</h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第4条（ロールの種類と権限）' : 'Article 4 (Types of Roles and Authority) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '業務執行社員（コアホルダー）' : 'Executive Employees (Core Holders) (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '法的代表権の行使' : 'Exercise of legal representation rights.'}</li>
                      <li>{isJapanese ? '業務執行の意思決定への参画' : 'Participation in decision-making for business execution.'}</li>
                      <li>{isJapanese ? '年間報酬：基本給＋業績連動報酬（上限：年間売上の10%）' : 'Annual compensation: Base salary + performance-based compensation (up to 10% of annual sales).'}</li>
                      <li>{isJapanese ? 'トレジャリーの管理権限（単独で100万円未満の執行が可能）' : 'Authority to manage the treasury (can execute under 1 million yen alone).'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '社員権トークンホルダー' : 'Employee Token Holders (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '議決権：1トークンにつき1票' : 'Voting rights: 1 vote per token.'}</li>
                      <li>{isJapanese ? '収益分配請求権（出資額を上限）' : 'Right to claim profit distribution (up to the amount of investment).'}</li>
                      <li>{isJapanese ? '新規事業提案権' : 'Right to propose new business.'}</li>
                      <li>{isJapanese ? '四半期報告書の閲覧権' : 'Right to view quarterly reports.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'ガバナンストークンホルダー' : 'Governance Token Holders (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '議決権：保有トークン数に応じた投票力' : 'Voting rights: Voting power according to the number of tokens held.'}</li>
                      <li>{isJapanese ? '運営方針への提案権' : 'Right to propose operational policies.'}</li>
                      <li>{isJapanese ? '月次活動報告の閲覧権' : 'Right to view monthly activity reports.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'コントリビューター' : 'Contributors (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '活動提案権' : 'Right to propose activities.'}</li>
                      <li>{isJapanese ? '貢献度に応じたリワードトークンの取得' : 'Acquisition of reward tokens based on contribution.'}</li>
                      <li>{isJapanese ? 'コミュニティチャンネルへのアクセス権' : 'Right to access community channels.'}</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第5条（ロールの取得と喪失）' : 'Article 5 (Acquisition and Loss of Roles) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? 'ロールの取得条件' : 'Conditions for acquiring roles (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '業務執行社員：DAO総会での承認（賛成票75%以上）が必要' : 'Executive Employees: Approval at the DAO General Assembly (requires more than 75% approval votes) is necessary.'}</li>
                      <li>{isJapanese ? '社員権トークンホルダー：規定の出資額の払込完了' : 'Employee Token Holders: Completion of payment of the specified investment amount.'}</li>
                      <li>{isJapanese ? 'ガバナンストークンホルダー：公式サイトでのKYC完了' : 'Governance Token Holders: Completion of KYC on the official website.'}</li>
                      <li>{isJapanese ? 'コントリビューター：Discordでの30日以上の活動実績' : 'Contributors: More than 30 days of activity on Discord.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'ロールの喪失事由' : 'Reasons for loss of roles (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '自主的な退会' : 'Voluntary withdrawal.'}</li>
                      <li>{isJapanese ? '規約違反による剥奪（DAO総会での議決必要）' : 'Revocation due to violation of regulations (requires resolution at the DAO General Assembly).'}</li>
                      <li>{isJapanese ? '60日以上の活動実績なし' : 'No activity record for more than 60 days.'}</li>
                      <li>{isJapanese ? 'トークンの移転または喪失' : 'Transfer or loss of tokens.'}</li>
                    </ul>
                  </li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">{isJapanese ? '第3章 DAO総会' : 'Chapter 3: DAO General Assembly (Japanese Original)'}</h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第6条（DAO総会の種類と開催）' : 'Article 6 (Types and Holding of DAO General Assembly) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '定期総会' : 'Regular General Assembly (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '四半期に1回開催' : 'Held once a quarter.'}</li>
                      <li>{isJapanese ? '開催日の14日前までに告知' : 'Notice to be given 14 days before the date of the meeting.'}</li>
                      <li>{isJapanese ? 'アジェンダを7日前までに公開' : 'Agenda to be published 7 days before the meeting.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '臨時総会' : 'Extraordinary General Assembly (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '業務執行社員が必要と認めた時' : 'When deemed necessary by the executive employees.'}</li>
                      <li>{isJapanese ? 'トークンホルダーの30%以上の請求があった時' : 'When requested by more than 30% of token holders.'}</li>
                      <li>{isJapanese ? '開催日の7日前までに告知' : 'Notice to be given 7 days before the date of the meeting.'}</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第7条（議決権行使）' : 'Article 7 (Exercise of Voting Rights) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '投票方法' : 'Voting Method (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? 'Snapshot.orgを利用したオンライン投票' : 'Online voting using Snapshot.org.'}</li>
                      <li>{isJapanese ? '投票期間は最低72時間' : 'Voting period is at least 72 hours.'}</li>
                      <li>{isJapanese ? '投票結果はブロックチェーン上に記録' : 'Voting results will be recorded on the blockchain.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '定足数' : 'Quorum (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '重要事項：総議決権の66%以上の参加' : 'Important matters: Participation of more than 66% of total voting rights.'}</li>
                      <li>{isJapanese ? '通常事項：総議決権の51%以上の参加' : 'Ordinary matters: Participation of more than 51% of total voting rights.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '議決要件' : 'Voting Requirements (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '定款変更：75%以上の賛成' : 'Amendment of Articles: More than 75% approval.'}</li>
                      <li>{isJapanese ? '重要事項：66%以上の賛成' : 'Important matters: More than 66% approval.'}</li>
                      <li>{isJapanese ? '通常事項：51%以上の賛成' : 'Ordinary matters: More than 51% approval.'}</li>
                    </ul>
                  </li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第8条（委任投票）' : 'Article 8 (Proxy Voting) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? 'トークンホルダーは他のホルダーに投票を委任可能' : 'Token holders can delegate their votes to other holders.'}</li>
                  <li>{isJapanese ? '委任は個別議案ごとに設定可能' : 'Delegation can be set for each individual proposal.'}</li>
                  <li>{isJapanese ? '委任状はブロックチェーン上で管理' : 'Delegations will be managed on the blockchain.'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">{isJapanese ? '第4章 業務執行' : 'Chapter 4: Business Execution (Japanese Original)'}</h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第9条（業務執行の区分と決定プロセス）' : 'Article 9 (Classification of Business Execution and Decision Process) (Japanese Original)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '日常的業務（業務執行社員が単独で決定可能）' : 'Routine Business (can be decided by executive employees alone) (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '100万円未満の支出' : 'Expenditures under 1 million yen.'}</li>
                      <li>{isJapanese ? 'イベントの運営実務' : 'Operational practices for events.'}</li>
                      <li>{isJapanese ? '広報活動' : 'Public relations activities.'}</li>
                      <li>{isJapanese ? 'コミュニティ管理' : 'Community management.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '重要業務（DAO総会の決議必要）' : 'Important Business (requires resolution at the DAO General Assembly) (Japanese Original)'}
                    <ul className="list-disc pl-6 mt-2">
                      <li>{isJapanese ? '100万円以上の支出' : 'Expenditures over 1 million yen.'}</li>
                      <li>{isJapanese ? '新規事業の開始' : 'Initiation of new business.'}</li>
                      <li>{isJapanese ? '人事施策の策定' : 'Formulation of personnel measures.'}</li>
                      <li>{isJapanese ? 'トークンエコノミーの変更' : 'Changes to the token economy.'}</li>
                    </ul>
                  </li>
               