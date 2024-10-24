import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const ComingSoonSection = () => {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'ja';

  return (
    <section className="py-20 px-4 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">
              {isJapanese ? '開発中のサービス' : 'Coming Soon'}
            </CardTitle>
            <CardDescription className="text-base">
              {isJapanese
                ? 'JJFAは柔術界の未来を形作っています。最新のテクノロジーを活用し、より透明性が高く効率的な柔術コミュニティの構築を目指しています。'
                : 'JJFA is shaping the future of the Jiu-Jitsu world. Using the latest technology, we aim to build a more transparent and efficient Jiu-Jitsu community.'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {isJapanese ? '道場管理システム' : 'Dojo Management System'}
              </h3>
              <p className="text-slate-600 mb-4">
                {isJapanese
                  ? 'いつでもどこでもモバイルアプリからアクセス可能な、道場運営のための統合ソリューション。'
                  : 'All-in-one solution for dojo operations with mobile app access anytime, anywhere.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>{isJapanese ? '会員管理システム' : 'Member Management System'}</li>
                <li>{isJapanese ? 'クラススケジュール管理' : 'Class Schedule Management'}</li>
                <li>{isJapanese ? '出席管理と分析' : 'Attendance Tracking and Analytics'}</li>
                <li>{isJapanese ? '支払い管理' : 'Payment Management'}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {isJapanese ? 'ブロックチェーン認証システム' : 'Blockchain Certification System'}
              </h3>
              <p className="text-slate-600 mb-4">
                {isJapanese
                  ? '帯の昇級や大会結果をブロックチェーンで安全に記録・管理。正確なキャリア追跡のための改ざん防止認証システム。'
                  : 'Securely record and manage belt promotions and tournament results on blockchain. Tamper-proof achievement verification system for accurate career tracking.'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>{isJapanese ? 'デジタル帯昇級認証' : 'Digital Belt Promotion Certification'}</li>
                <li>{isJapanese ? 'ブロックチェーン大会記録' : 'Blockchain Tournament Records'}</li>
                <li>{isJapanese ? 'NFTメダルとタイトル' : 'NFT Medals and Titles'}</li>
                <li>{isJapanese ? 'グローバル実績認証' : 'Global Achievement Verification'}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};