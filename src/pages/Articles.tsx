
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';
import { PageTitle } from "@/components/PageTitle";
import { ArticlesHeader } from "@/components/articles/ArticlesHeader";
import { ArticlesSection } from "@/components/articles/ArticlesSection";
import { ArticlesArticle } from "@/components/articles/ArticlesArticle";
import { RelatedDocuments } from "@/components/articles/RelatedDocuments";

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

                <ArticlesArticle title={isJapanese ? '第2条（目的）' : 'Article 2 (Purpose)'}>
                  <p>{isJapanese ? '当社は、以下の事業を通じて柔術文化の発展と普及に貢献します：' : 'The company aims to contribute to the development and promotion of Jiu-Jitsu culture through the following businesses:'}</p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>{isJapanese ? '柔術大会「JiuFight」の開催・運営' : 'Organization and operation of the "JiuFight" Jiu-Jitsu tournament'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? '個人戦やチーム戦など、多様な大会形式の提供' : 'Providing various tournament formats, including individual and team matches'}</li>
                      </ul>
                    </li>
                    <li>{isJapanese ? '大会運営支援システムの開発・提供' : 'Development and provision of tournament management systems'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? '「JiuEvent Pro」を通じた大会運営の効率化支援' : 'Supporting efficient tournament operations through "JiuEvent Pro"'}</li>
                      </ul>
                    </li>
                    <li>{isJapanese ? '教育プラットフォーム「JJFAアカデミー」の運営' : 'Operation of "JJFA Academy" education platform'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? 'オンライン講座、指導者認定、道場運営支援の提供' : 'Providing online courses, instructor certification, and dojo management support'}</li>
                      </ul>
                    </li>
                    <li>{isJapanese ? '柔術関連メディア事業' : 'Jiu-Jitsu related media business'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? '柔術の魅力を伝えるコンテンツの制作・配信' : 'Creating and distributing content that conveys the appeal of Jiu-Jitsu'}</li>
                      </ul>
                    </li>
                    <li>{isJapanese ? 'コミュニティプラットフォームの運営' : 'Operation of community platform'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? '「jjforall.com」を通じた柔術コミュニティの形成と支援' : 'Building and supporting the Jiu-Jitsu community through "jjforall.com"'}</li>
                      </ul>
                    </li>
                    <li>{isJapanese ? '地域コミュニティとの連携活動' : 'Collaboration with local communities'}
                      <ul className="list-disc pl-6 mb-2">
                        <li>{isJapanese ? '柔術を通じた地域社会への貢献' : 'Contributing to local communities through Jiu-Jitsu'}</li>
                      </ul>
                    </li>
                  </ol>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第3条（本店所在）' : 'Article 3 (Location of Head Office)'}>
                  <p>{isJapanese ? '当社の本店は東京都千代田区九段南１丁目６–5 九段会館テラスに設置します。' : 'The company\'s head office shall be located at Kudan Kaikan Terrace, 1-6-5 Kudanminami, Chiyoda-ku, Tokyo.'}</p>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第4条（公告の方法）' : 'Article 4 (Method of Public Notice)'}>
                  <p>{isJapanese ? '当社の公告は、電子公告により行います。ただし、事故その他やむを得ない事由により電子公告によることができない場合は、官報に掲載して行います。' : 'The company\'s notices shall be made electronically. However, if electronic notification is not possible due to accidents or other unavoidable reasons, notices shall be published in the Official Gazette.'}</p>
                </ArticlesArticle>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第2章 社員および出資' : 'Chapter 2: Members and Investment'}>
                <ArticlesArticle title={isJapanese ? '第5条（社員の構成）' : 'Article 5 (Composition of Members)'}>
                  <p>{isJapanese ? '当社の社員は、当社が発行する社員権トークンを保有する者で構成されます。' : 'The company\'s members shall consist of those who hold membership tokens issued by the company.'}</p>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第6条（トークンの発行・管理）' : 'Article 6 (Token Issuance and Management)'}>
                  <p>{isJapanese ? '当社は以下のトークンを発行・管理します：' : 'The company shall issue and manage the following tokens:'}</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>{isJapanese ? '社員権トークン：会社の社員としての権利を表すトークン' : 'Membership Token: representing rights as a company member'}</li>
                    <li>{isJapanese ? 'ガバナンストークン：会社の意思決定に参加する権利を表すトークン' : 'Governance Token: representing rights to participate in company decision-making'}</li>
                    <li>{isJapanese ? '利用トークン：サービス利用時の決済に使用するトークン' : 'Utility Token: used for payment when using services'}</li>
                  </ul>
                </ArticlesArticle>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第3章 業務執行' : 'Chapter 3: Business Execution'}>
                <ArticlesArticle title={isJapanese ? '第7条（業務執行）' : 'Article 7 (Business Execution)'}>
                  <p>{isJapanese ? '当社の業務執行は、社員総会で選任された業務執行社員が行います。' : 'The company\'s business operations shall be carried out by executive members elected at the general meeting.'}</p>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第8条（代表社員）' : 'Article 8 (Representative Member)'}>
                  <p>{isJapanese ? '代表社員は社員総会の決議により選定され、会社を代表して業務を執行します。' : 'The representative member shall be selected by resolution of the general meeting and execute business representing the company.'}</p>
                </ArticlesArticle>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第4章 社員総会' : 'Chapter 4: General Meeting'}>
                <ArticlesArticle title={isJapanese ? '第9条（社員総会）' : 'Article 9 (General Meeting)'}>
                  <p>{isJapanese ? '社員総会は、全ての社員で構成され、この定款で定める事項を決議します。' : 'The general meeting shall consist of all members and resolve matters specified in these articles.'}</p>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第10条（決議要件）' : 'Article 10 (Resolution Requirements)'}>
                  <p>{isJapanese ? '社員総会の決議は、法令又は定款に別段の定めがある場合を除き、総社員の議決権の過半数を有する社員が出席し、出席した当該社員の議決権の過半数をもって行います。' : 'Resolutions of the general meeting shall be made by a majority of the voting rights of the members present, who hold a majority of the total voting rights, unless otherwise specified by laws or these articles.'}</p>
                </ArticlesArticle>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '第5章 計算' : 'Chapter 5: Accounting'}>
                <ArticlesArticle title={isJapanese ? '第11条（事業年度）' : 'Article 11 (Business Year)'}>
                  <p>{isJapanese ? '当社の事業年度は、毎年4月1日から翌年3月31日までとします。' : 'The company\'s business year shall be from April 1 to March 31 of the following year.'}</p>
                </ArticlesArticle>
              </ArticlesSection>

              <ArticlesSection title={isJapanese ? '附則' : 'Supplementary Provisions'}>
                <ArticlesArticle title={isJapanese ? '第1条（最初の事業年度）' : 'Article 1 (First Business Year)'}>
                  <p>{isJapanese ? '当社の最初の事業年度は、当社成立の日から2025年3月31日までとします。' : 'The company\'s first business year shall be from the date of establishment to March 31, 2025.'}</p>
                </ArticlesArticle>

                <ArticlesArticle title={isJapanese ? '第2条（定款に定めのない事項）' : 'Article 2 (Matters Not Stipulated in Articles)'}>
                  <p>{isJapanese ? 'この定款に定めのない事項は、全て会社法その他の法令に従います。' : 'All matters not stipulated in these articles shall be governed by the Companies Act and other laws and regulations.'}</p>
                </ArticlesArticle>
              </ArticlesSection>

              <div className="mt-8 italic">
                <p>{isJapanese ? '以上、当社設立のため、この定款を作成し、社員が次に記名押印する。' : 'In witness whereof, these articles of incorporation have been prepared for the establishment of the company, and the members shall sign and seal below.'}</p>
              </div>

              <RelatedDocuments isJapanese={isJapanese} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;
