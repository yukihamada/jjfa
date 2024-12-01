import { RuleSection } from "../RuleSection";
import { AlertTriangle, Shield, UserX } from "lucide-react";

export const Penalties = () => {
  return (
    <RuleSection id="penalties" title="ペナルティ" sectionNumber="8">
      <p className="mb-4 text-slate-600">
        ペナルティの種類と適用について説明します。
      </p>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            消極的行動
          </h3>
          <p className="text-slate-600">
            過度に防御的な行動や、アクションを避ける行為には警告が与えられます。警告が3回続くと、相手に1ポイントが加算されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-500" />
            禁止技と危険行為
          </h3>
          <div className="space-y-4">
            <p className="text-slate-600">
              以下の技や行為は禁止されており、使用した場合は即座に失格となる可能性があります：
            </p>
            <div className="pl-4">
              <h4 className="font-semibold text-slate-800 mb-2">関節技に関する禁止事項</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>脊椎への捻り（スパイナルロック）</li>
                <li>頸椎への過度な負荷がかかる技</li>
                <li>膝関節への横方向からの圧力</li>
                <li>足の指への関節技</li>
              </ul>
            </div>
            <div className="pl-4">
              <h4 className="font-semibold text-slate-800 mb-2">その他の禁止行為</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>相手の顔面への打撃や圧力</li>
                <li>目、鼻、耳への攻撃</li>
                <li>噛みつき行為</li>
                <li>相手の道着を掴んで投げる行為</li>
                <li>マットの外に意図的に出る行為</li>
              </ul>
            </div>
            <p className="text-slate-600 mt-2">
              これらの行為は選手の安全を確保し、柔術の技術的な面を重視するために禁止されています。
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserX className="w-6 h-6 text-red-500" />
            マナー違反
          </h3>
          <p className="text-slate-600">
            礼儀を欠いた行動や暴言があった場合、即時失格や大会からの追放となることがあります。スポーツマンシップに反する行為は厳しく対処されます。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};