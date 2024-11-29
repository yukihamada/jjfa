import { RuleSection } from "../RuleSection";
import { Info, Target, Book, Users, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Introduction = () => {
  return (
    <RuleSection id="introduction" title="はじめに" sectionNumber="0">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="w-6 h-6 text-blue-500" />
            柔術の定義
          </h3>
          <p className="text-slate-600">
            ブラジリアン柔術は、相手を制する位置に持っていく技術、もしくはサブミッション（関節技や絞め技）によって勝利を目指す格闘技です。
            戦いの目的は、ポイントの獲得または相手の降参によって勝利することです。
            JJFAルールに基づき、同じ年齢カテゴリー、階級、帯色の2人の競技者が正々堂々と対戦します。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6 text-blue-500" />
            コミュニティの価値
          </h3>
          <p className="text-slate-600">
            JJFAは、地域のコミュニティと直接的に繋がり、全ての柔術従事者が技術を学び、共有できる中立で非競争的な環境づくりを推進します。
            チームや所属に関係なく、純粋に柔術を愛する仲間として、互いに高め合う関係を大切にします。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-500" />
            適用範囲
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>JJFA主催の全ての公式大会</li>
            <li>JJFA公認の地域大会およびオープン大会</li>
            <li>JJFA会員が参加する国際大会</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-500" />
            大会参加資格
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>
              <Link to="/community-registration" className="text-blue-600 hover:underline">
                JJFA会員登録
              </Link>
              を完了し、有効な会員資格を保持していること
            </li>
            <li>出場カテゴリーに適合する年齢・体重・帯色であること</li>
            <li>健康状態が良好で、競技に参加可能な体調であること</li>
            <li>過去1年以内に重大な違反行為がないこと</li>
            <li>必要な保険に加入していること</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            倫理規定とフェアプレー
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>スポーツマンシップと礼節を重んじ、対戦相手、審判、運営スタッフを尊重すること</li>
            <li>フェアプレーの精神に則り、不正行為や暴力的な言動を慎むこと</li>
            <li>ドーピング防止規程を遵守し、定期的な教育と検査に協力すること</li>
            <li>SNSなどでの誹謗中傷や不適切な発言を控えること</li>
            <li>柔術の価値と伝統を尊重し、スポーツの発展に貢献すること</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};
