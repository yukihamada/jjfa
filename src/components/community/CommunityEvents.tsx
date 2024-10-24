import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";

export const CommunityEvents = () => {
  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarDays className="h-6 w-6" />
          イベント情報
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <Calendar className="w-full md:w-1/2" mode="single" />
          <div className="space-y-4 w-full md:w-1/2">
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">JiuFight 2025</h4>
              <p className="text-sm text-gray-500">2025年2月16日</p>
              <p>場所: 大田区産業プラザPiO</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">ハワイ合宿</h4>
              <p className="text-sm text-gray-500">2024年2月28日 - 3月13日</p>
              <p>世界チャンピオンと出稽古強化トレーニング</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">黒帯アダルトチャンピオングループレッスン</h4>
              <p className="text-sm text-gray-500">2024年11月8日 12:00-</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};