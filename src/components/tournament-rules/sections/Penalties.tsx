import { RuleSection } from "../RuleSection";
import { AlertTriangle, Shield, UserX } from "lucide-react";

export const Penalties = () => {
  return (
    <RuleSection id="penalties" title="ペナルティ">
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
            <span className="font-semibold">4. </span>
            過度に防御的な行動や、アクションを避ける行為には警告が与えられます。警告が3回続くと、相手に1ポイントが加算されます。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-500" />
            危険な技
          </h3>
          <p className="text-slate-600">
            禁止技を試みた場合、即座に試合失格となる場合があります。
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <UserX className="w-6 h-6 text-red-500" />
            マナー違反
          </h3>
          <p className="text-slate-600">
            礼儀を欠いた行動や暴言があった場合、即時失格や大会からの追放となることがあります。
          </p>
        </div>
      </div>
    </RuleSection>
  );
};