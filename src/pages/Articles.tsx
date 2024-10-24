import AnimatedBackground from "@/components/AnimatedBackground";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const Articles = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              {isJapanese ? '合同会社JJFA 定款' : 'Articles of Incorporation of JJFA LLC (Japanese Original)'}
            </h1>
            
            <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第1章　総則' : 'Chapter 1: General Provisions (Japanese Original)'}
                </h2>
                
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（商号）' : '(Company Name) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第1条　当会社は、合同会社JJFAと称し、英文ではJJFA, LLCと表示する。' : 'Article 1: The company shall be called JJFA LLC, and in English, it shall be displayed as JJFA, LLC (Japanese Original).'}</p>
                
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（目的）' : '(Purpose) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第2条　当会社は、次の事業を営むことを目的とする。' : 'Article 2: The purpose of the company is to engage in the following businesses (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '柔術の普及および啓蒙に関する事業' : 'Promotion and enlightenment of Jiu-Jitsu (Japanese Original)'}</li>
                  <li>{isJapanese ? '柔術に関するイベント、セミナーの企画、運営および開催' : 'Planning, operation, and hosting of events and seminars related to Jiu-Jitsu (Japanese Original)'}</li>
                  <li>{isJapanese ? '柔術に関する情報の収集、提供および販売' : 'Collection, provision, and sale of information related to Jiu-Jitsu (Japanese Original)'}</li>
                  <li>{isJapanese ? 'オンラインプラットフォームおよびアプリケーションの開発、運営および管理' : 'Development, operation, and management of online platforms and applications (Japanese Original)'}</li>
                  <li>{isJapanese ? 'ユーティリティトークンの発行、管理および運用' : 'Issuance, management, and operation of utility tokens (Japanese Original)'}</li>
                  <li>{isJapanese ? 'ブロックチェーン技術を活用したシステムの開発およびコンサルティング業務' : 'Development of systems utilizing blockchain technology and consulting services (Japanese Original)'}</li>
                  <li>{isJapanese ? '各種コンテンツの企画、制作、販売および配信' : 'Planning, production, sale, and distribution of various contents (Japanese Original)'}</li>
                  <li>{isJapanese ? 'スポーツ用品、衣類、アクセサリー等の企画、製造、販売および輸出入' : 'Planning, manufacturing, sale, and import/export of sports goods, clothing, accessories, etc. (Japanese Original)'}</li>
                  <li>{isJapanese ? '前各号に附帯または関連する一切の事業' : 'Any business incidental or related to the above (Japanese Original)'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（本店の所在地）' : '(Location of Head Office) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第3条　当会社は、本店を〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス ２Fに置く。' : 'Article 3: The company shall have its head office at 2F, Kudankai Terrace, 1-6-5 Kudanminami, Chiyoda-ku, Tokyo 102-0074 (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（公告の方法）' : '(Method of Announcement) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第4条　当会社の公告は、電子公告の方法により行う。具体的には、当社のウェブサイト（jjforall.com）に掲載し、閲覧可能な状態にするものとする。' : 'Article 4: Announcements of the company shall be made by electronic means. Specifically, they shall be posted on the company’s website (jjforall.com) and made available for viewing (Japanese Original).'}</p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第2章　社員及び出資' : 'Chapter 2: Members and Capital (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（社員の氏名又は名称、住所、出資及び責任）' : '(Names, Addresses, Contributions, and Responsibilities of Members) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第5条　当会社の社員の氏名又は名称、住所、出資の目的及びその価額は次のとおりである。' : 'Article 5: The names or titles, addresses, purposes of contributions, and their amounts of the members of the company are as follows (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '濱田 優貴　住所：東京都〇〇区〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円' : 'Yuki Hamada, Address: Tokyo, XX Ward, XX Town, XX Block, XX Number, Purpose and Amount of Contribution: Money 1,000,000 yen (Japanese Original)'}</li>
                  <li>{isJapanese ? '堤 達生　住所：東京都〇〇区〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円' : 'Tatsuo Tsutsumi, Address: Tokyo, XX Ward, XX Town, XX Block, XX Number, Purpose and Amount of Contribution: Money 1,000,000 yen (Japanese Original)'}</li>
                  <li>{isJapanese ? '粟田 健太郎　住所：香川県〇〇市〇〇町〇丁目〇番〇号　出資の目的及びその価額：金銭 金1,000,000円' : 'Kentaro Awata, Address: Kagawa, XX City, XX Town, XX Block, XX Number, Purpose and Amount of Contribution: Money 1,000,000 yen (Japanese Original)'}</li>
                </ol>
                <p>{isJapanese ? '当会社の社員は、全て有限責任社員とする。' : 'All members of the company shall be limited liability members (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（トークンについて）' : '(About Tokens) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第6条　当会社の社員となることができる者は、当会社が発行し、当会社の社員権を表章するトークン（以下「社員権トークン」という。）を保有する者（以下「社員権トークンホルダー」という。）に限る。なお、「社員権トークン」とは、当法人が発行する非代替性トークンであって、電子情報処理組織を用いて移転することができ、かつ、DAO総会において別途定めるトークン規程に従い発行されるものをいう。' : 'Article 6: Only those who hold the tokens issued by the company, which represent the rights of membership in the company (hereinafter referred to as "Membership Tokens"), can become members of the company (hereinafter referred to as "Membership Token Holders"). The "Membership Token" refers to a non-fungible token issued by the corporation that can be transferred using electronic information processing organizations and is issued in accordance with the token regulations separately established at the DAO General Assembly (Japanese Original).'}</p>
                <p>{isJapanese ? '当会社は、ガバナンストークンを保有する者をガバナンストークンホルダー（以下、社員権トークンホルダーと合わせて、「トークンホルダー」という。）として扱うものとする。なお、「ガバナンストークン」とは、社員権トークンとは別の、当法人が発行する非代替性トークンであって、電子情報処理組織を用いて移転することができる、DAO総会において別途定めるトークン規程に従い発行されるものをいう。' : 'The company shall treat those who hold governance tokens as governance token holders (hereinafter referred to as "Token Holders" together with Membership Token Holders). The "Governance Token" refers to a non-fungible token issued by the corporation that is separate from the Membership Token and can be transferred using electronic information processing organizations, issued in accordance with the token regulations separately established at the DAO General Assembly (Japanese Original).'}</p>
                <p>{isJapanese ? 'ウォレットを紛失した場合の社員権トークン及びガバナンストークンの再発行は、DAO総会において別途定めるトークン規程に従うものとする。' : 'Reissuance of Membership Tokens and Governance Tokens in case of wallet loss shall be in accordance with the token regulations separately established at the DAO General Assembly (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（社員の加入）' : '(Joining Members) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第7条　社員権トークンを保有する者を、新たに社員として当会社に加入させようとするときは、DAO総会において別途定めるトークン規程に従い、定款又は社員名簿に必要事項を記入させるものとする。' : 'Article 7: When a holder of Membership Tokens wishes to join the company as a new member, they shall fill in the necessary items in the articles of incorporation or the member registry in accordance with the token regulations separately established at the DAO General Assembly (Japanese Original).'}</p>
                <p>{isJapanese ? '社員権トークンの保有者は、定款又は社員名簿に自らが社員であると記入することを請求することができる。' : 'Holders of Membership Tokens may request to have their membership recorded in the articles of incorporation or member registry (Japanese Original).'}</p>
                <p>{isJapanese ? '前二項に従って当該記入が完了した時点で、当会社の社員として当会社に加入したものとし、前項に従って請求した者が保有する社員権トークンにつき元保有者が存在する場合には、当該元保有者は、当会社の社員たる資格を失う。なお、当該加入に伴う定款変更について、総社員の同意は要しないものとし、DAO総会において別途定めるトークン規程に従い、当該記入が完了されたことをもって、定款変更がなされたものとする。' : 'Once the above entries are completed, the person shall be considered a member of the company, and if there is a previous holder of the Membership Tokens requested by the person, the previous holder shall lose their qualification as a member of the company. Furthermore, no consent from all members is required for changes to the articles of incorporation due to this joining, and the completion of the entries shall be deemed as a change to the articles of incorporation in accordance with the token regulations separately established at the DAO General Assembly (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（持分の譲渡制限）' : '(Transfer Restrictions on Shares) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第8条　当会社の社員は、他の社員の全員の承諾がなければ、その持分の全部又は一部を他人に譲渡、担保設定又はその他の処分をすることができない。ただし、社員権トークンにかかる権利とともに譲渡その他の処分をする場合は、他の社員の承諾及びその他の同意等は要しないものとする。' : 'Article 8: Members of the company may not transfer, pledge, or otherwise dispose of all or part of their shares to others without the consent of all other members. However, if transferring or otherwise disposing of rights related to Membership Tokens, no consent or other agreement from other members is required (Japanese Original).'}</p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第3章　業務の執行及び会社の代表' : 'Chapter 3: Execution of Business and Representation of the Company (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（業務執行社員）' : '(Business Executives) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第9条　本会社の業務は、社員の互選により選定された業務執行社員が行う。' : 'Article 9: The business of the company shall be conducted by business executives selected by mutual election among the members (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（代表社員）' : '(Representative Member) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第10条　当会社を代表する社員（以下「代表社員」という。）は、濱田 優貴とする。' : 'Article 10: The member representing the company (hereinafter referred to as "Representative Member") shall be Yuki Hamada (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（業務の決定）' : '(Decision Making for Business) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第11条　本会社の業務に関する意思決定は、以下の方法で行う。' : 'Article 11: Decisions regarding the business of the company shall be made in the following manner (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '通常の業務：業務執行社員がこれを行う。' : 'Normal business: Business executives shall conduct this (Japanese Original).'}</li>
                  <li>{isJapanese ? '重要な業務：社員の過半数の同意により決定する。ただし、トークンホルダーによる投票が行われた場合、その結果を尊重するものとする。' : 'Important business: Decisions shall be made with the consent of the majority of members. However, if a vote is conducted by token holders, the results shall be respected (Japanese Original).'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（業務執行社員の報酬）' : '(Compensation for Business Executives) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第12条　業務執行社員の報酬は、社員の同意により定める。' : 'Article 12: Compensation for business executives shall be determined with the consent of the members (Japanese Original).'}</p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第4章　DAO総会' : 'Chapter 4: DAO General Assembly (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（DAO総会の設置）' : '(Establishment of DAO General Assembly) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第13条　当会社は、トークンホルダー全員で組織するDAO総会を置く。' : 'Article 13: The company shall establish a DAO General Assembly organized by all token holders (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（DAO総会の権限）' : '(Authority of DAO General Assembly) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第14条　DAO総会は、以下の権限を有するものとし、DAO総会において別途定めるDAO総会規程に従い、決議を行うものとする。' : 'Article 14: The DAO General Assembly shall have the following authorities and shall make resolutions in accordance with the regulations of the DAO General Assembly separately established at the DAO General Assembly (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '当会社のガバナンス、ファイナンス及び業務執行に関する重要な事項の決定' : 'Decisions on important matters related to governance, finance, and business execution of the company (Japanese Original).'}</li>
                  <li>{isJapanese ? '利益の配当及び残余財産の分配' : 'Distribution of profits and residual assets (Japanese Original).'}</li>
                  <li>{isJapanese ? '利益相反取引についての承認' : 'Approval of transactions involving conflicts of interest (Japanese Original).'}</li>
                  <li>{isJapanese ? '総社員の同意を要する事項に係る同意内容案の事前協議及びその決定' : 'Pre-consultation and decision on consent content proposals requiring the consent of all members (Japanese Original).'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（DAO総会の決議事項）' : '(Resolutions of DAO General Assembly) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第15条　重要な事項については、DAO総会において別途定めるDAO総会規程の定めによるものとする。' : 'Article 15: For important matters, the provisions separately established in the DAO General Assembly regulations shall apply (Japanese Original).'}</p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第5章　計算' : 'Chapter 5: Accounting (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（事業年度）' : '(Business Year) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第16条　本会社の事業年度は、毎年4月1日に始まり、翌年3月31日に終わる。' : 'Article 16: The business year of the company shall begin on April 1 of each year and end on March 31 of the following year (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（計算書類等の承認）' : '(Approval of Financial Documents) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第17条　当会社の各事業年度に係る計算書類は、各事業年度末日の翌日から起算して3ヶ月以内に、DAO総会の決議により承認されなければならない。' : 'Article 17: The financial documents for each business year of the company must be approved by the resolution of the DAO General Assembly within three months from the day after the end of each business year (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（利益の配当及び残余財産の分配）' : '(Distribution of Profits and Residual Assets) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第18条　当会社が利益の配当をしようとするときは、配当直前時点各事業年度末日現在の社員権トークンホルダーに配当するものとし、DAO総会の決議によって、次に掲げる事項を定めなければならない。' : 'Article 18: When the company intends to distribute profits, it shall distribute to the holders of Membership Tokens as of the end of each business year immediately before the distribution, and the following matters must be determined by the resolution of the DAO General Assembly (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '配当財産の種類及び帳簿価額の総額' : 'Types of distribution assets and total book value (Japanese Original).'}</li>
                  <li>{isJapanese ? '社員権トークンホルダーに対する配当財産の割当てに関する事項' : 'Matters concerning the allocation of distribution assets to Membership Token Holders (Japanese Original).'}</li>
                  <li>{isJapanese ? '当該利益の配当がその効力を生じる日' : 'The date on which the distribution of such profits takes effect (Japanese Original).'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第6章　解散' : 'Chapter 6: Dissolution (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（解散）' : '(Dissolution) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第19条　当会社は、次に掲げる事由によって、解散する。' : 'Article 19: The company shall be dissolved for the following reasons (Japanese Original).'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '総社員の同意' : 'Consent of all members (Japanese Original).'}</li>
                  <li>{isJapanese ? 'DAO総会の決議がなされたとき' : 'When a resolution of the DAO General Assembly has been made (Japanese Original).'}</li>
                  <li>{isJapanese ? '社員が欠けたこと' : 'When a member is missing (Japanese Original).'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第7章　附則' : 'Chapter 7: Supplementary Provisions (Japanese Original)'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（最初の事業年度）' : '(First Business Year) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第20条　第16条の規定にかかわらず、当会社の最初の事業年度は、当会社の設立の日から翌年3月31日までとする。' : 'Article 20: Notwithstanding the provisions of Article 16, the first business year of the company shall be from the date of establishment of the company until March 31 of the following year (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（設立時の資本金の額）' : '(Amount of Capital at Establishment) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第21条　当会社の設立時の資本金の額は、金3,000,000円とする。' : 'Article 21: The amount of capital at the time of establishment of the company shall be 3,000,000 yen (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（本店の所在場所）' : '(Location of Head Office) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第22条　当会社の設立時の本店の所在場所は、〒102-0074 東京都千代田区九段南１丁目６−５ 九段会館テラス ２Fとする。' : 'Article 22: The location of the head office at the time of establishment of the company shall be 2F, Kudankai Terrace, 1-6-5 Kudanminami, Chiyoda-ku, Tokyo 102-0074 (Japanese Original).'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '（その他）' : '(Others) (Japanese Original)'}</h3>
                <p>{isJapanese ? '第23条　本定款に規定のない事項は、すべて会社法その他の法令に従うものとする。' : 'Article 23: Matters not stipulated in these articles of incorporation shall be governed by the Companies Act and other laws (Japanese Original).'}</p>

                <div className="mt-8 text-sm text-slate-600">
                  <p>{isJapanese ? '本定款は、' : 'This articles of incorporation was created with reference to the template of the articles of incorporation published by '}</p>
                  <a href="https://jpdao.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://jpdao.org/</a>
                  <p>{isJapanese ? 'の定款の雛形を参考に作成されました。' : ' and was created as a reference to the articles of incorporation template.'}</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;
