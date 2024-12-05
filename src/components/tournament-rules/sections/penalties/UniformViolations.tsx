import { Siren } from "lucide-react";

export const UniformViolations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Siren className="w-6 h-6 text-red-500" />
        8.5 服装・規定違反
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        <li>8.5.1 規定に反した道着（Gi）やノーギウェアの着用</li>
        <li>8.5.2 金属類（指輪、ピアス）や爪の長さなど安全上の問題がある状態で試合を行うこと</li>
      </ul>
    </div>
  );
};