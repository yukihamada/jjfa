import { SEO } from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO 
        title="利用規約"
        description="JJFAおよび関連サービスの利用規約です。本サービスの利用にあたっての基本的なルールと取り扱いを定めています。"
      />
      
      <h1 className="text-3xl font-bold text-center mb-8">JJFA共通利用規約</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第1条（適用範囲）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>本規約は、JJFA合同会社（以下「当社」といいます。）が運営・提供するウェブサイト「jjforall.com」および関連するサービス（大会運営ツール、道場管理ツール、オンライン講座、コミュニティ機能、DAO関連機能、トークン関連サービス、メディア配信機能、ライブ配信等）を含む一切のサービス（以下総称して「本サービス」）に適用されます。</li>
            <li>利用者は、本サービスにアクセスし、アカウント登録を行い、あるいは本サービスの各機能を利用することによって、本規約に同意したものとみなされます。</li>
            <li>当社が別途定める各種ガイドライン、ポリシー、規程（大会規則、トークン規程、運営規程、コミュニティガイドライン等）は本規約の一部を構成します。これらが本規約と抵触する場合は、特別の定めが優先します。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第2条（アカウント登録と利用者情報）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>利用者は、本サービス利用にあたり、当社の指定する方法でアカウント登録を行うことができます。登録時、利用者は真実かつ正確な情報を提供する義務があります。</li>
            <li>当社は、登録情報の真偽を確認するため、必要な場合に追加資料の提出を求めることがあります。</li>
            <li>アカウントの管理は利用者本人が行い、パスワード等の管理・不正利用防止の責任も利用者が負うものとします。</li>
            <li>利用者情報（大会参加者データ、道場所属情報、試合結果、コミュニティ投稿等）は、当社が運営する統合データベースに一元管理され、道場の指導者（インストラクター）および大会主催者は、当社所定の範囲内でこれらの情報へアクセスできるものとします。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第3条（個人情報の取扱い）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>当社は、利用者から収集した個人情報を、当社が別途定めるプライバシーポリシーに従って適法かつ適正に取り扱います。</li>
            <li>大会主催者や道場指導者等、本サービス運営に必要な関係者は、利用者が大会エントリーやコミュニティ登録、道場管理ツールの利用等を通じて入力した情報（氏名、所属道場、試合結果、能力評価等）にアクセスする場合がありますが、これらは本サービスの目的（大会運営、参加者管理、トレーニング支援、資格認定等）に限定して利用され、不要な第三者への提供は行いません。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第4条（利用環境の整備）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>利用者は、本サービスを利用するために必要な通信機器、ソフトウェア、インターネット接続環境を、自己の費用と責任で用意するものとします。</li>
            <li>当社は、本サービス提供のために合理的な努力を行いますが、サーバーダウン、メンテナンス、通信障害、セキュリティインシデント等によりサービスが中断・停止・変更される場合があり、これによって利用者に生じた損害について、当社は一切の責任を負いません（法令上許容される最大限の範囲で免責されます）。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第5条（禁止事項）</h2>
          <p className="mb-4">利用者は、本サービスの利用に際し、以下の行為をしてはなりません。</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>他者（道場、主催者、他の利用者、当社を含む）の権利侵害やプライバシー侵害、名誉棄損行為</li>
            <li>虚偽情報の登録、なりすまし行為</li>
            <li>当社または第三者のサーバーやネットワークに過度の負担を与える行為や、不正アクセス行為</li>
            <li>法令、公序良俗、本規約、当社が別途定めるガイドラインやポリシーに反する行為</li>
            <li>その他、当社が不適当と判断する行為</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第6条（知的財産権）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>本サービス上のコンテンツ（テキスト、画像、動画、プログラム、商標、ロゴ、ドキュメンタリー、教育教材等）に関する知的財産権は、当社または適法な権利者に帰属します。</li>
            <li>利用者は、当社の明示的な許諾なく、本サービス上のコンテンツを複製、改変、転載、配布、二次利用等してはなりません。</li>
            <li>利用者が投稿したコンテンツ（コメント、フィードバック、試合データ、動画投稿等）について、利用者は、当社が本サービスの運営、宣伝、改善のために、必要な範囲で利用（表示、複製、加工、翻訳、公開）することを許諾します。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第7条（トークンおよびDAO関連機能の利用）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>本サービスでは、JJFA Member Token、Governance Token、JJFAトークン等が発行・管理され、DAOガバナンスや投票、支払い、参加費徴収、利益配分に利用される場合があります。</li>
            <li>トークンおよびDAO関連機能の利用は、当社が別途定める「トークン規程」や「運営規則」に従うものとします。</li>
            <li>トークンの価値変動、ブロックチェーン技術の特性（不可逆性、手数料発生、ネットワーク分岐等）によって利用者に損害が生じても、当社は法的責任を負いかねます（法令上許容される範囲内での免責）。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第8条（サービス内容の変更・終了）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>当社は、事業上や技術上の理由により、本サービスの全部または一部の内容を予告なく変更、終了することができます。</li>
            <li>本サービスの変更または終了によって利用者に生じた不利益・損害について、当社は一切の責任を負いません。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第9条（退会およびアカウント削除）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>利用者は、当社が定める手続きにより、いつでもアカウントを削除（退会）することができます。</li>
            <li>利用者が退会しても、法令上必要な場合や本サービスの記録・統計・事業継続のために必要な範囲で、当社は利用者情報を保持することがあります。</li>
            <li>利用者が本規約に違反した場合、当社は事前通知なくアカウントを停止・削除することができます。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第10条（免責および責任制限）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>当社は、本サービスの正確性、信頼性、有用性、継続性、適合性を保証するものではありません。</li>
            <li>法令上許される最大限の範囲で、当社は本サービスの利用に起因または関連して利用者に生じた間接損害、特別損害、逸失利益、データ喪失に関して責任を負いません。</li>
            <li>当社が何らかの理由で責任を負う場合でも、当社が利用者から受領した直近6ヶ月分の対価総額を上限とします（無償サービスの場合は一切の責任を負いません）。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第11条（準拠法および管轄）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>本規約の解釈、適用、履行に関しては、日本法が適用されます。</li>
            <li>本規約または本サービスに関連して生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">第12条（規約の改定）</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>当社は、必要に応じて本規約を改定することができます。</li>
            <li>改定後の本規約は、当社が相応の方法で公表した時点または当社が定める施行日に効力を生じます。利用者は本規約改定後も本サービスを利用することにより、改定後の規約に同意したものとみなされます。</li>
          </ol>
        </section>

        <p className="text-right mt-8">制定日：2024年12月16日</p>
      </div>
    </div>
  );
};

export default TermsOfService;