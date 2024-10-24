import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, CheckCircle2 } from "lucide-react";

export const CommunityBenefits = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Users className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>多様な出会いの場</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                経営者から学生まで幅広い交流
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                国際的なネットワークの形成
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                年齢や性別を超えた絆づくり
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Trophy className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>イベント＆コミュニティ</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                定期的な技術セミナー
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                国内外の大会参加機会
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                交流会・懇親会の開催
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};