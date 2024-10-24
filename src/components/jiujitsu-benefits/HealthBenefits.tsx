import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, CheckCircle2 } from "lucide-react";

export const HealthBenefits = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Activity className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>科学的に実証された健康効果</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                1時間の練習で最大800kcalの消費が可能
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                基礎代謝の向上（筋肉量増加による）
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                内臓脂肪の減少（研究により実証）
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader>
          <Heart className="w-12 h-12 text-slate-800 mb-4" />
          <CardTitle>医学的なメリット</CardTitle>
          <CardDescription>
            <ul className="space-y-2 mt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                心血管系の健康維持
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                骨密度の向上
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                認知機能の向上
              </li>
            </ul>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};