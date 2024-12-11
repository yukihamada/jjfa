import { SEO } from "@/components/SEO";
import { PageTitle } from "@/components/PageTitle";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <SEO 
        title="JJFA - プロジェクト"
        description="JJFAのプロジェクト概要、ロードマップ、トークンエコノミーについての詳細をご覧いただけます。"
      />
      
      <PageTitle>プロジェクト概要</PageTitle>
      
      <div className="mt-8 space-y-8">
        <section className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold">JJFAプロジェクトとは</h2>
          <p className="text-slate-600">
            JJFAは、柔術の普及とコミュニティの発展を目指すプロジェクトです。Web3技術を活用して、
            世界中の柔術愛好家をつなぎ、より良いコミュニティを作ることを目指しています。
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-4">主な機能</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-primary">🥋</span>
                柔術の魅力を伝えるコンテンツ
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🌏</span>
                多言語対応（9言語）
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🎯</span>
                大会情報とエントリーシステム
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">👥</span>
                コミュニティ機能
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-4">JJFAトークン</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-primary">🗳️</span>
                ガバナンス参加権
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🎟️</span>
                特別イベントへのアクセス
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">🎁</span>
                各種特典の提供
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">💫</span>
                コミュニティ報酬
              </li>
            </ul>
          </div>
        </section>

        <section className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold">今後の展開</h2>
          <p className="text-slate-600">
            詳細なロードマップについては、<a href="/roadmap" className="text-primary hover:underline">ロードマップページ</a>をご覧ください。
            また、トークンの詳細については<a href="/token-specification" className="text-primary hover:underline">トークン仕様書</a>をご確認いただけます。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Project;