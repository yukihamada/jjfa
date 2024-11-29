import { RuleSection } from "../RuleSection";
import { Info, Target, Book, Users, Shield } from "lucide-react";

export const Introduction = () => {
  return (
    <RuleSection id="introduction" title="はじめに">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Book className="w-6 h-6 text-blue-500" />
            規程の目的
          </h3>
          <p className="text-slate-600">
            本規程は、JJFAが主催・公認する柔術大会における競技ルール、運営基準、安全管理、および倫理規定を定めるものです。
            全ての参加者は、本規程を遵守し、柔術の価値と伝統を尊重しながら、公平で安全な競技環境の実現に努めるものとします。
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
            <li>有効なJJFA会員資格を保持していること</li>
            <li>出場カテゴリーに適合する年齢・体重・帯色であること</li>
            <li>医師による健康診断を受け、競技に支障がないと認められていること</li>
            <li>過去1年以内に重大な違反行為がないこと</li>
            <li>必要な保険に加入していること</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            倫理規定
          </h3>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>スポーツマンシップと礼節を重んじ、対戦相手、審判、運営スタッフを尊重すること</li>
            <li>フェアプレーの精神に則り、不正行為や暴力的な言動を慎むこと</li>
            <li>ドーピング防止規程を遵守し、定期的な教育と検査に協力すること</li>
            <li>SNSなどでの誹謗中傷や不適切な発言を控えること</li>
          </ul>
        </div>
      </div>
    </RuleSection>
  );
};