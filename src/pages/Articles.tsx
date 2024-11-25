import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { PageTitle } from "@/components/PageTitle";

const Articles = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen">
      <PageTitle title={isJapanese ? '定款' : 'Articles of Incorporation'} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              {isJapanese ? 'JJFA合同会社 定款' : 'Articles of Incorporation of JJFA LLC'}
            </h1>
            
            <div className="prose prose-slate max-w-none">
                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第1章 総則' : 'Chapter 1: General Provisions'}
                </h2>
                
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第1条（商号）' : 'Article 1 (Company Name)'}</h3>
                <p>{isJapanese ? '当会社は、JJFA合同会社と称し、英文ではJJFA LLCと表示する。' : 'The company shall be called JJFA LLC, and in English, it shall be displayed as JJFA LLC.'}</p>
                
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第2条（目的）' : 'Article 2 (Purpose)'}</h3>
                <p>{isJapanese ? '当会社は、次の事業を営むことを目的とする。' : 'The purpose of the company is to engage in the following businesses:'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '柔術大会「JiuFight」の企画・運営' : 'Planning and operation of the Jiu-Jitsu tournament "JiuFight"'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '個人およびチーム向けトーナメントの開催' : 'Hosting tournaments for individuals and teams'}</li>
                      <li>{isJapanese ? '大会運営ツール「JiuEvent Pro」の提供とサポート' : 'Providing and supporting the tournament management tool "JiuEvent Pro"'}</li>
                      <li>{isJapanese ? '国際大会および地域大会の連携促進' : 'Promoting cooperation between international and regional tournaments'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '柔術教育プラットフォーム「JJFAアカデミー」の運営' : 'Operation of the Jiu-Jitsu education platform "JJFA Academy"'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '初心者から上級者までを対象としたオンライン講座' : 'Online courses for beginners to advanced practitioners'}</li>
                      <li>{isJapanese ? '柔術指導者向けトレーニングプログラムと資格認定' : 'Training programs and certification for Jiu-Jitsu instructors'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '道場向けサービスの提供' : 'Providing services for dojos'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '会員管理ツール「Dojoマネージャー」の開発・運用' : 'Development and operation of the member management tool "Dojo Manager"'}</li>
                      <li>{isJapanese ? '決済支援ツール「DojoPay」の提供' : 'Providing the payment support tool "DojoPay"'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '柔術関連メディア事業' : 'Jiu-Jitsu related media business'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? 'ニュース、特集記事、動画インタビューの制作と配信' : 'Production and distribution of news, feature articles, and video interviews'}</li>
                      <li>{isJapanese ? '柔術文化の普及を目的としたドキュメンタリーや教材制作' : 'Production of documentaries and educational materials aimed at promoting Jiu-Jitsu culture'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'DAO（分散型自律組織）の運営と関連技術開発' : 'Operation of DAO (Decentralized Autonomous Organization) and related technology development'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? 'トークン（社員権トークンおよびガバナンストークン）の発行・運用' : 'Issuance and operation of tokens (membership tokens and governance tokens)'}</li>
                      <li>{isJapanese ? 'ガバナンス投票および財務運営のための技術サポート' : 'Technical support for governance voting and financial operations'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'オンラインプラットフォーム「jjforall.com」の運営' : 'Operation of the online platform "jjforall.com"'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '柔術関連情報、教育リソース、大会運営サービスを統合提供' : 'Integrated provision of Jiu-Jitsu related information, educational resources, and tournament management services'}</li>
                      <li>{isJapanese ? 'トークンホルダー向け専用サービス（ディスカッション、投票機能など）の実装' : 'Implementation of dedicated services for token holders (discussion, voting functions, etc.)'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '地域コミュニティとの連携と普及活動' : 'Collaboration with local communities and promotion activities'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '柔術イベントやトレーニングセッションの開催' : 'Hosting Jiu-Jitsu events and training sessions'}</li>
                      <li>{isJapanese ? '学校や地域施設への柔術プログラム導入支援' : 'Support for introducing Jiu-Jitsu programs to schools and local facilities'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'その他、前各号に付帯関連する一切の事業' : 'Any other business incidental or related to the above items'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第3条（本店の所在地）' : 'Article 3 (Location of Head Office)'}</h3>
                <p>{isJapanese ? '当会社の本店所在地は、東京都●区●町●番地とし、オンライン上の主要拠点として公式ドメイン「jjforall.com」を運営する。' : 'The company\'s head office shall be located at ●-●-●, ●-ku, Tokyo, and shall operate the official domain "jjforall.com" as its main online base.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第4条（公告の方法）' : 'Article 4 (Method of Public Notice)'}</h3>
                <p>{isJapanese ? '当会社の公告は、公式ウェブサイト「jjforall.com」に掲載する電子公告を原則とする。ただし、電子公告が行えない場合は、官報に掲載する。' : 'The company\'s public notices shall, in principle, be made by electronic public notice posted on the official website "jjforall.com". However, if electronic public notice is not possible, notices shall be published in the Official Gazette.'}</p>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第2章 社員および出資' : 'Chapter 2: Members and Investment'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第5条（社員の構成）' : 'Article 5 (Composition of Members)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '当会社の社員は、社員権トークン（以下「社員権トークン」という）を保有する者とする。' : 'The members of the company shall be those who hold membership tokens (hereinafter referred to as "membership tokens").'}</li>
                  <li>{isJapanese ? '社員権トークンは、社員資格を表すデジタル資産であり、DAO総会における議決権を付与する。' : 'Membership tokens are digital assets representing membership qualification and grant voting rights at DAO general meetings.'}</li>
                  <li>{isJapanese ? '社員はすべて有限責任社員とする。' : 'All members shall be limited liability members.'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第6条（トークンの発行・管理）' : 'Article 6 (Token Issuance and Management)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '当会社は、以下のトークンを発行する：' : 'The company shall issue the following tokens:'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '社員権トークン：社員資格を表し、利益配分や議決権を伴う。' : 'Membership tokens: representing membership qualification, including profit distribution and voting rights.'}</li>
                      <li>{isJapanese ? 'ガバナンストークン：特定の議決権およびDAO内での意思決定をサポートする。' : 'Governance tokens: supporting specific voting rights and decision-making within the DAO.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'トークン発行、譲渡、再発行は「トークン規程」に従う。' : 'Token issuance, transfer, and reissuance shall follow the "Token Regulations".'}</li>
                  <li>{isJapanese ? 'ウォレット紛失や不正使用時の対応は、「トークン規程」に基づく。' : 'Response to wallet loss or unauthorized use shall be based on the "Token Regulations".'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第7条（社員の加入・脱退）' : 'Article 7 (Joining and Withdrawal of Members)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '新たに社員となる者は、社員権トークンを取得することで加入する。' : 'New members shall join by acquiring membership tokens.'}</li>
                  <li>{isJapanese ? '社員がトークンを譲渡した場合、社員資格は譲受人に自動的に移転する。' : 'When a member transfers tokens, membership qualification shall automatically transfer to the recipient.'}</li>
                  <li>{isJapanese ? '社員の脱退時、保有するトークンの処分は「トークン規程」に基づく。' : 'Upon withdrawal of a member, the disposition of held tokens shall be based on the "Token Regulations".'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第3章 業務執行および会社の代表' : 'Chapter 3: Business Execution and Company Representation'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第8条（業務執行社員）' : 'Article 8 (Executive Members)'}</h3>
                <p>{isJapanese ? '業務執行社員は、DAO総会で選任された社員が務める。' : 'Executive members shall be members elected at the DAO general meeting.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第9条（代表社員）' : 'Article 9 (Representative Member)'}</h3>
                <p>{isJapanese ? '代表社員は、業務執行社員の中から選任され、当会社を法的に代表する。' : 'The representative member shall be elected from among the executive members and legally represent the company.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第10条（業務の決定）' : 'Article 10 (Business Decisions)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '業務執行に関する重要事項は、DAO総会の決議に基づいて行う。' : 'Important matters concerning business execution shall be based on resolutions of the DAO general meeting.'}</li>
                  <li>{isJapanese ? '業務執行社員は、善良な管理者としての注意義務を負い、職務を遂行する。' : 'Executive members shall perform their duties with the duty of care of a prudent manager.'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第4章 DAO総会' : 'Chapter 4: DAO General Meeting'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第11条（DAO総会の設置）' : 'Article 11 (Establishment of DAO General Meeting)'}</h3>
                <p>{isJapanese ? '当会社は、社員権トークンおよびガバナンストークン保有者全員で構成するDAO総会を設置する。' : 'The company shall establish a DAO general meeting composed of all holders of membership tokens and governance tokens.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第12条（DAO総会の権限）' : 'Article 12 (Authority of DAO General Meeting)'}</h3>
                <p>{isJapanese ? 'DAO総会は以下の権限を有する：' : 'The DAO general meeting shall have the following authorities:'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? 'トークン発行および規程の改定' : 'Token issuance and revision of regulations'}</li>
                  <li>{isJapanese ? '柔術大会「JiuFight」の運営方針およびスケジュール決定' : 'Determining management policies and schedules for the "JiuFight" tournament'}</li>
                  <li>{isJapanese ? 'プラットフォーム「jjforall.com」の機能改善および新規機能導入' : 'Improvement of functions and introduction of new features for the "jjforall.com" platform'}</li>
                  <li>{isJapanese ? '定款変更、会社解散、合併その他重要事項の決定' : 'Decisions on amendments to the articles of incorporation, company dissolution, mergers, and other important matters'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第13条（議決権と決議方法）' : 'Article 13 (Voting Rights and Resolution Methods)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '各トークンホルダーの議決権は保有トークン数に比例する。' : 'Each token holder\'s voting rights shall be proportional to the number of tokens held.'}</li>
                  <li>{isJapanese ? 'DAO総会の決議は、特別決議（3分の2以上の賛成）または普通決議（過半数の賛成）に基づく。' : 'Resolutions of the DAO general meeting shall be based on special resolutions (approval of two-thirds or more) or ordinary resolutions (approval of a majority).'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第5章 計算' : 'Chapter 5: Accounting'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第14条（事業年度）' : 'Article 14 (Business Year)'}</h3>
                <p>{isJapanese ? '事業年度は毎年4月1日に始まり、翌年3月31日に終了する。' : 'The business year shall begin on April 1 of each year and end on March 31 of the following year.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第15条（利益配分）' : 'Article 15 (Profit Distribution)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '利益配分は、社員権トークン保有者に対し、保有トークン数に基づいて行う。' : 'Profit distribution shall be made to membership token holders based on the number of tokens held.'}</li>
                  <li>{isJapanese ? '利益の配分方法および比率は、DAO総会で決議する。' : 'The method and ratio of profit distribution shall be resolved at the DAO general meeting.'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第6章 解散' : 'Chapter 6: Dissolution'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第16条（解散事由）' : 'Article 16 (Reasons for Dissolution)'}</h3>
                <p>{isJapanese ? '当会社は以下の場合に解散する：' : 'The company shall be dissolved in the following cases:'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '総社員の同意' : 'Consent of all members'}</li>
                  <li>{isJapanese ? 'DAO総会の特別決議' : 'Special resolution of the DAO general meeting'}</li>
                  <li>{isJapanese ? 'その他法令に基づく事由' : 'Other reasons based on laws and regulations'}</li>
                </ol>

                <h2 className="text-xl font-bold mt-8 mb-4">
                  {isJapanese ? '第7章 附則' : 'Chapter 7: Supplementary Provisions'}
                </h2>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第17条（設立時の資本金）' : 'Article 17 (Initial Capital)'}</h3>
                <p>{isJapanese ? '設立時の資本金は、金●円とする。' : 'The initial capital shall be ● yen.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第18条（本店および公式ウェブ拠点）' : 'Article 18 (Head Office and Official Web Base)'}</h3>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '設立時の本店所在地は東京都●区●町●番地とする。' : 'The initial location of the head office shall be ●-●-●, ●-ku, Tokyo.'}</li>
                  <li>{isJapanese ? '業務運営の主要拠点として、公式ウェブサイト「jjforall.com」を活用する。' : 'The official website "jjforall.com" shall be utilized as the main base for business operations.'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第19条（その他法令の適用）' : 'Article 19 (Application of Other Laws)'}</h3>
                <p>{isJapanese ? '本定款に定めのない事項は、会社法その他の法令に従う。' : 'Matters not stipulated in these articles of incorporation shall be governed by the Companies Act and other laws and regulations.'}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;