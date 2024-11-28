import { Heart } from "lucide-react";

export const CommunityGuidelines = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 border border-indigo-100">
    <h2 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center">
      <Heart className="w-5 h-5 mr-2 text-pink-500" />
      コミュニティガイドライン
    </h2>
    <ul className="text-sm text-indigo-800 space-y-3">
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>失敗や困難な経験も大切な学びです。安心して共有できる場所を目指しています</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>質問は成長のチャンス。どんな質問でも歓迎します</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>お互いの経験から学び、共に成長していきましょう</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>相手の気持ちを考え、思いやりのある言葉を心がけましょう</span>
      </li>
    </ul>
  </div>
);