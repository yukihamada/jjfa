import { useTranslation } from "react-i18next";
import PageTitle from "@/components/PageTitle";

const TournamentRules = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageTitle title="JJFA公式大会ルール" />
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. 一般規則</h2>
          <div className="space-y-4">
            <p>1.1 本規則は、JJFA主催の全ての大会に適用されます。</p>
            <p>1.2 選手は自身の安全と他の選手の安全に最大限の注意を払わなければなりません。</p>
            <p>1.3 審判の判定は最終的なものとし、抗議は認められません。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. 試合時間</h2>
          <div className="space-y-4">
            <p>2.1 予選：6分</p>
            <p>2.2 準決勝：8分</p>
            <p>2.3 決勝：10分</p>
            <p>2.4 延長戦が必要な場合は3分とします。</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. ポイントシステム</h2>
          <div className="space-y-4">
            <p>3.1 テイクダウン：2ポイント</p>
            <p>3.2 スイープ：2ポイント</p>
            <p>3.3 ニーオンベリー：2ポイント</p>
            <p>3.4 マウント：4ポイント</p>
            <p>3.5 バックマウント：4ポイント</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. 禁止事項</h2>
          <div className="space-y-4">
            <p>4.1 関節技を極める際の急激な動作</p>
            <p>4.2 脊椎への直接的な攻撃</p>
            <p>4.3 目、鼻、耳、口への攻撃</p>
            <p>4.4 スラム行為</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. 服装規定</h2>
          <div className="space-y-4">
            <p>5.1 清潔な柔術衣の着用が必須です。</p>
            <p>5.2 適切なサイズの柔術衣を着用してください。</p>
            <p>5.3 ラッシュガードの着用は任意です。</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TournamentRules;