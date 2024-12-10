import { CheckCircle2 } from "lucide-react";

export const DAOBenefits = () => {
  const benefits = [
    "DAO投票権の取得",
    "収益分配への参加",
    "限定コミュニティへのアクセス",
    "大会優先参加権"
  ];

  return (
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center text-sm text-gray-600">
          <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
          {benefit}
        </li>
      ))}
    </ul>
  );
};