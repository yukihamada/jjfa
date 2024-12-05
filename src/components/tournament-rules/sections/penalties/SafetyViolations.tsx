import { Shield } from "lucide-react";

export const SafetyViolations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Shield className="w-6 h-6 text-red-500" />
        8.1 安全に関わる反則行為
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        <li>8.1.1 指を1本または2本だけ掴むこと</li>
        <li>8.1.2 相手の髪の毛、耳、鼻、性器を掴むこと</li>
        <li>8.1.3 相手の関節を逆方向に過度に曲げる行為</li>
        <li>8.1.4 相手の背中を踏む行為</li>
      </ul>
    </div>
  );
};