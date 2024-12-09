import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { PageTitle } from "@/components/PageTitle";
import { ArticlesHeader } from "@/components/articles/ArticlesHeader";
import { ArticlesSection } from "@/components/articles/ArticlesSection";
import { ArticlesArticle } from "@/components/articles/ArticlesArticle";

const Articles = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <div className="min-h-screen">
      <PageTitle title={isJapanese ? '定款' : 'Articles of Incorporation'} />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <ArticlesHeader />
            
            <div className="prose prose-slate max-w-none">
              <ArticlesSection title={isJapanese ? '第1章 総則' : 'Chapter 1: General Provisions'}>
                <ArticlesArticle title={isJapanese ? '第1条（会社名）' : 'Article 1 (Company Name)'}>
                  <p>{isJapanese ? '当社は「JJFA合同会社」という名前で活動し、英語表記は「JJFA LLC」とします。この名称には、世界中の柔術愛好家（Jiu-Jitsu For All）を結び付ける想いが込められています。' : 'The company shall operate under the name "JJFA LLC" in English, and "JJFA合同会社" in Japanese. This name embodies our mission to connect Jiu-Jitsu enthusiasts worldwide (Jiu-Jitsu For All).'}</p>
                </ArticlesArticle>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第2条（目的）' : 'Article 2 (Purpose)'}</h3>
                <p>{isJapanese ? '当社は、柔術文化を様々な形で支え、広め、深めることを目指します。そのために、以下のような事業に取り組みます。' : 'The company aims to support, spread, and deepen Jiu-Jitsu culture in various ways. To achieve this, we engage in the following businesses:'}</p>
                <ol className="list-decimal pl-6 mb-4">
                  <li>{isJapanese ? '柔術大会「JiuFight」の開催・運営' : 'Organization and operation of the "JiuFight" Jiu-Jitsu tournament'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '個人戦やチーム戦など、多様なトーナメント形式を通じて、実力を試し合える場を提供します。' : 'Providing opportunities for competition through various tournament formats, including individual and team matches.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '大会運営ツール「JiuEvent Pro」の提供' : 'Providing the tournament management tool "JiuEvent Pro"'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '大会の円滑な進行や、公平で透明なルール運用を支えるツールやシステムを開発・サポートします。' : 'Development and support of tools and systems for smooth tournament operations and fair, transparent rule implementation.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '国際・地域大会との連携促進' : 'Promoting cooperation with international and regional tournaments'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '世界中の大会主催者や地域コミュニティと協力し、グローバルな柔術ネットワークを構築します。' : 'Building a global Jiu-Jitsu network through collaboration with tournament organizers and local communities worldwide.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '「JJFAアカデミー」の運営（柔術教育プラットフォーム）' : 'Operation of "JJFA Academy" (Jiu-Jitsu education platform)'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '初心者から上級者まで学べるオンライン講座、指導者向けトレーニングや資格認定、道場運営に役立つツール（「Dojoマネージャー」、「DojoPay」）を提供し、教育と経営面から柔術界を支えます。' : 'Supporting the Jiu-Jitsu community through education and management by providing online courses for all levels, instructor training and certification, and dojo management tools ("Dojo Manager" and "DojoPay").'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '柔術関連メディア事業' : 'Jiu-Jitsu related media business'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? 'ニュース、特集記事、動画インタビュー、教材、ドキュメンタリーの制作・配信を通じて、柔術の魅力や歴史、哲学を幅広く伝え、深い文化的理解を広めます。' : 'Spreading the appeal, history, and philosophy of Jiu-Jitsu through news, feature articles, video interviews, educational materials, and documentaries.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'DAO（分散型自律組織）の運営及び関連技術開発' : 'Operation of DAO (Decentralized Autonomous Organization) and related technology development'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? 'ブロックチェーン技術によるトークン発行、ガバナンス投票、財務運営支援システムを整え、公平で参加型の意思決定プロセスを築きます。' : 'Establishing fair and participatory decision-making processes through blockchain technology for token issuance, governance voting, and financial operations support systems.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '「jjforall.com」のオンライン統合プラットフォーム運営' : 'Operation of the integrated online platform "jjforall.com"'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? '情報や教育、イベント運営サービスを一元的に提供し、トークンを活用したコミュニティ参加や投票機能を通して、誰もが参加できる柔術エコシステムを形成します。' : 'Creating an inclusive Jiu-Jitsu ecosystem by providing centralized information, education, and event management services, with community participation and voting features utilizing tokens.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? '地域コミュニティとの連携や普及活動' : 'Collaboration with local communities and promotion activities'}
                    <ul className="list-disc pl-6 mb-2">
                      <li>{isJapanese ? 'イベント開催や学校・地域施設へのプログラム導入支援を行い、柔術を通じた人々の交流、健康的な地域社会づくりに貢献します。' : 'Contributing to community interaction and healthy society building through events and supporting the introduction of programs in schools and local facilities.'}</li>
                    </ul>
                  </li>
                  <li>{isJapanese ? 'その他、上記各項目に関連するあらゆる付随業務' : 'Any other business incidental or related to the above items'}</li>
                </ol>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第3条（本店所在）' : 'Article 3 (Location of Head Office)'}</h3>
                <p>{isJapanese ? '当社の本店は東京都●区●町●番地に設置します。また、オンライン上の活動基盤として公式サイト「jjforall.com」を拠点とし、グローバルにアクセス可能なネットワークを運営します。' : 'The company\'s head office shall be located at ●-●-●, ●-ku, Tokyo. Additionally, we operate a globally accessible network with our official website "jjforall.com" serving as our online activity base.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第4条（公告の方法）' : 'Article 4 (Method of Public Notice)'}</h3>
                <p>{isJapanese ? '当社のお知らせは、まず公式サイト「jjforall.com」へ掲載する形で行います。万一オンラインでの掲載が難しい場合は、官報への掲載で告知します。' : 'The company\'s notices shall be primarily posted on our official website "jjforall.com". If online posting is not possible, notices shall be published in the Official Gazette.'}</p>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第2章 社員および出資' : 'Chapter 2: Members and Investment'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第5条（社員の構成）' : 'Article 5 (Composition of Members)'}</h3>
                <p>{isJapanese ? '当社の社員は「社員権トークン」を持つ人々で構成されます。このトークン保有者は有限責任社員として、投票権や利益配分の権利を通じて当社運営に参加します。' : 'The company\'s members shall consist of those who hold membership tokens. These token holders participate in company operations as limited liability members through voting rights and profit-sharing rights.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第6条（トークンの発行・管理）' : 'Article 6 (Token Issuance and Management)'}</h3>
                <p>{isJapanese ? '当社は以下のトークンを発行します：' : 'The company shall issue the following tokens:'}</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>{isJapanese ? 'JJFA Member Token：社員としての資格や利益配分の権利を表すトークン' : 'JJFA Member Token: representing membership qualification and profit-sharing rights'}</li>
                  <li>{isJapanese ? 'Governance Token：DAO内の意思決定投票で重要な役割を果たすトークン' : 'Governance Token: playing a crucial role in DAO decision-making votes'}</li>
                  <li>{isJapanese ? 'JJFAトークン：大会参加費やサービス利用料など、プラットフォーム内の支払い手段となるトークン' : 'JJFA Token: used as a payment method within the platform for tournament entry fees and service charges'}</li>
                </ul>
                <p>{isJapanese ? 'これらトークンの発行・譲渡・再発行・ウォレット管理などの細かいルールは、「トークン規程」に詳しく定めます。' : 'Detailed rules regarding token issuance, transfer, reissuance, and wallet management are specified in the "Token Regulations".'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第7条（社員の加入・脱退）' : 'Article 7 (Joining and Withdrawal of Members)'}</h3>
                <p>{isJapanese ? '新たに当社に参加したい人は、社員権トークンを取得すれば社員になれます。社員が自分のトークンを他者へ譲ると、その人が新たな社員になります。脱退時のトークン処理方法などは、「トークン規程」に従って決められています。' : 'New members can join the company by acquiring membership tokens. When a member transfers their tokens to another person, that person becomes a new member. Token handling procedures for withdrawal are determined according to the "Token Regulations".'}</p>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第3章 業務執行および代表' : 'Chapter 3: Business Execution and Representation'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第8条（業務執行社員）' : 'Article 8 (Executive Members)'}</h3>
                <p>{isJapanese ? '当社の具体的な業務執行は、DAO総会の決定にもとづき選ばれた「業務執行社員」が担当します。これらの社員は、専門的な判断力と責任感を持って行動し、会社の発展と参加者の利益を考えながら働きます。' : 'The company\'s specific business operations shall be handled by executive members elected based on DAO general meeting decisions. These members shall act with professional judgment and responsibility, working for the company\'s development and participants\' interests.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第9条（代表社員）' : 'Article 9 (Representative Member)'}</h3>
                <p>{isJapanese ? '複数いる業務執行社員のうち、特に当社を対外的に代表する「代表社員」をDAO総会で選びます。代表社員は、法的な契約や対外的なやり取りで当社を正式に背負う立場となります。' : 'A representative member shall be elected from among the executive members at the DAO general meeting to represent the company externally. The representative member shall officially represent the company in legal contracts and external dealings.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第10条（業務方針の決定）' : 'Article 10 (Business Policy Decisions)'}</h3>
                <p>{isJapanese ? '事業運営の基本的な方向性や重要事項は、DAO総会の議決によって決まります。業務執行社員は、決定された方針やルールを忠実に実行し、当社全体の利益に貢献します。' : 'Basic business direction and important matters shall be determined by DAO general meeting resolutions. Executive members shall faithfully execute decided policies and rules, contributing to the company\'s overall interests.'}</p>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第4章 DAO総会' : 'Chapter 4: DAO General Meeting'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第11条（DAO総会の設置）' : 'Article 11 (Establishment of DAO General Meeting)'}</h3>
                <p>{isJapanese ? '当社は、社員権トークンとガバナンストークンを持つ全ての参加者で構成される「DAO総会」を設けます。この総会はオンライン上で運営され、ブロックチェーン技術で投票や議論を記録し、透明で公正な意思決定を目指します。' : 'The company shall establish a DAO general meeting composed of all participants holding membership and governance tokens. This meeting shall be conducted online, with voting and discussions recorded using blockchain technology, aiming for transparent and fair decision-making.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第12条（DAO総会の権限）' : 'Article 12 (Authority of DAO General Meeting)'}</h3>
                <p>{isJapanese ? 'DAO総会は以下について決定する権限を持ちます：' : 'The DAO general meeting shall have authority to decide on the following:'}</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>{isJapanese ? 'トークン発行の方針やトークン規程の変更' : 'Token issuance policies and changes to token regulations'}</li>
                  <li>{isJapanese ? '「JiuFight」の運営方針やスケジュール' : 'Operation policies and schedules for "JiuFight"'}</li>
                  <li>{isJapanese ? '「jjforall.com」の機能強化、新サービス導入' : 'Function enhancement and new service introduction for "jjforall.com"'}</li>
                  <li>{isJapanese ? '定款変更、解散、合併など会社の将来を左右する重大事項' : 'Major matters affecting the company\'s future such as amendments to articles, dissolution, mergers'}</li>
                  <li>{isJapanese ? '利益配分方法・割合の決定' : 'Determination of profit distribution methods and ratios'}</li>
                </ul>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第13条（議決権と決議基準）' : 'Article 13 (Voting Rights and Resolution Standards)'}</h3>
                <p>{isJapanese ? '投票権は、原則として保有トークン数に比例します。' : 'Voting rights shall be proportional to the number of tokens held.'}</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>{isJapanese ? '重要な事項（定款変更、解散、合併など）は、全投票権の3分の2以上の賛成が必要（特別決議）。' : 'Important matters (such as amendments to articles, dissolution, mergers) require approval from two-thirds or more of all voting rights (special resolution).'}</li>
                  <li>{isJapanese ? 'それ以外の一般的な決定は、過半数の賛成で決まる（普通決議）。' : 'Other general decisions are made by majority approval (ordinary resolution).'}</li>
                </ul>
                <p>{isJapanese ? 'こうしたルールにより、参加者全員が声を持ち、その声が公正に反映される仕組みを確立します。' : 'These rules establish a system where all participants have a voice and their voices are fairly reflected.'}</p>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第5章 計算' : 'Chapter 5: Accounting'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第14条（事業年度）' : 'Article 14 (Business Year)'}</h3>
                <p>{isJapanese ? '当社の事業年度は毎年4月1日に始まり、翌年3月31日で終わります。この期間で収益やコストを集計し、次年度の計画づくりに役立てます。' : 'The company\'s business year shall begin on April 1 of each year and end on March 31 of the following year. Revenue and costs during this period shall be aggregated and used for planning the next fiscal year.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第15条（利益配分）' : 'Article 15 (Profit Distribution)'}</h3>
                <p>{isJapanese ? '得られた利益は、社員権トークンの保有数に応じて分配します。どれくらいの割合で、いつ、どのような形で配分するかは、DAO総会の議決で決まります。これにより、当社の成長が、社員権トークン保有者全員に還元される仕組みを目指します。' : 'Profits shall be distributed according to the number of membership tokens held. The ratio, timing, and method of distribution shall be determined by DAO general meeting resolution. This aims to create a mechanism where the company\'s growth is returned to all membership token holders.'}</p>

              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第6章 解散' : 'Chapter 6: Dissolution'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第16条（解散事由）' : 'Article 16 (Reasons for Dissolution)'}</h3>
                <p>{isJapanese ? '当社は以下の場合に解散します：' : 'The company shall be dissolved in the following cases:'}</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>{isJapanese ? '全ての社員の合意' : 'Agreement of all members'}</li>
                  <li>{isJapanese ? 'DAO総会で特別決議による解散決定' : 'Dissolution decision by special resolution at the DAO general meeting'}</li>
                  <li>{isJapanese ? '法律上、解散が求められたとき' : 'When dissolution is required by law'}</li>
                </ul>
                <p>{isJapanese ? 'いずれの場合も、参加者全員が納得し、整理しながら幕を引けるような仕組みを整えます。' : 'In any case, we shall establish a system where all participants can be satisfied and conclude matters in an orderly manner.'}</p>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第7章 附則' : 'Chapter 7: Supplementary Provisions'}>
                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第17条（設立時資本金）' : 'Article 17 (Initial Capital)'}</h3>
                <p>{isJapanese ? '当社の設立時の資本金は金●円です。この初期資本が当社の活動を支える基盤となり、そこから新たな価値創出を目指します。' : 'The company\'s initial capital shall be ● yen. This initial capital shall serve as the foundation supporting the company\'s activities, aiming to create new value from there.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第18条（本店及びウェブ拠点）' : 'Article 18 (Head Office and Web Base)'}</h3>
                <p>{isJapanese ? '本店所在地は東京都●区●町●番地とします。オンライン上では「jjforall.com」を主たる拠点とし、様々な国や地域から誰もが参加できる場を提供します。' : 'The head office shall be located at ●-●-●, ●-ku, Tokyo. Online, "jjforall.com" shall serve as the main base, providing a space where anyone from various countries and regions can participate.'}</p>

                <h3 className="font-bold mt-6 mb-2">{isJapanese ? '第19条（法令等の適用）' : 'Article 19 (Application of Laws)'}</h3>
                <p>{isJapanese ? 'この定款に書かれていないことは、会社法や関係する法律、そしてトークン規程や一般的なDAOガバナンスの慣習を参考にして解釈・対応します。' : 'Matters not stipulated in these articles shall be interpreted and handled with reference to the Companies Act, related laws, token regulations, and general DAO governance practices.'}</p>
              </ArticlesSection>

              <div className="mt-8 italic">
                <p>{isJapanese ? '以上の定款は、世界中の柔術コミュニティと共に学び、成長し、共創していく道標となります。' : 'These articles of incorporation shall serve as a guideline for learning, growing, and co-creating with the global Jiu-Jitsu community.'}</p>
                <p className="mt-2">{isJapanese ? 'この定款によって、当社は従来の枠組みにとらわれず、テクノロジーと伝統武道文化を結び付け、誰もが参加可能な、開かれた柔術エコシステムづくりを進めていくことを約束します。' : 'Through these articles, the company pledges to advance the creation of an open Jiu-Jitsu ecosystem that connects technology with traditional martial arts culture, unrestricted by conventional frameworks, where anyone can participate.'}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;
