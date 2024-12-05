import { XCircle } from "lucide-react";

export const AttackViolations = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <XCircle className="w-6 h-6 text-red-500" />
        8.2 相手への攻撃に関する反則
      </h3>
      <ul className="list-decimal pl-5 space-y-2 text-slate-600">
        <li>8.2.1 打撃や蹴り、エルボーなどの打撃行為</li>
        <li>8.2.2 指で目を攻撃する行為</li>
        <li>8.2.3 魚フック（指で相手の口の中を引っ張る行為）</li>
        <li>8.2.4 相手を絞める際に首を絞める器具として襟以外を使うこと（例：指）</li>
        <li>8.2.5 相手を持ち上げて地面に強く叩きつける行為（スラム）</li>
      </ul>
    </div>
  );
};