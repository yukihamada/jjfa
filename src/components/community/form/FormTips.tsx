import { AlertCircle } from "lucide-react";

export const FormTips = () => (
  <div className="bg-green-50 p-4 rounded-lg mb-4 animate-fade-in">
    <h3 className="text-sm font-medium text-green-800 mb-2 flex items-center gap-2">
      <AlertCircle className="w-4 h-4" />
      投稿のヒント
    </h3>
    <ul className="text-sm text-green-700 space-y-1">
      <li>• 具体的な状況や気持ちを共有すると、より良いアドバイスが得られやすいです</li>
      <li>• 質問は明確に、そして遠慮なく。誰もが最初は初心者でした</li>
      <li>• 他の人の経験も参考になります。検索してみましょう</li>
    </ul>
  </div>
);