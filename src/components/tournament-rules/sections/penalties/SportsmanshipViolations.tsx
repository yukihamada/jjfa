import { UserX } from "lucide-react";

export const SportsmanshipViolations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <UserX className="w-6 h-6 text-red-500" />
        8.4 スポーツマンシップに反する行為
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        <li>8.4.1 言葉での挑発や相手への不適切な発言</li>
        <li>8.4.2 故意に試合から逃げる行為、たとえば場外に出てポイントを避ける</li>
        <li>8.4.3 自らの帯を外し、試合を一時停止させる行為</li>
      </ul>
    </div>
  );
};