import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BookOpen, CheckCircle2 } from "lucide-react";

export const SkillBenefits = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Brain className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>メンタル面の強化</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                自己肯定感の向上
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                ストレス耐性の向上
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                集中力と判断力の向上
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <BookOpen className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>ビジネススキルとの相乗効果</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                戦略的思考力
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                リーダーシップ
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                コミュニケーション力
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};