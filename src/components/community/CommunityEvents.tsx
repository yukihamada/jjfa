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
              <h4 className="font-semibold">技術セミナー</h4>
              <p className="text-sm text-gray-500">2024年3月15日</p>
              <p>基本テクニックの解説と実践</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-semibold">オンライン質問会</h4>
              <p className="text-sm text-gray-500">2024年3月20日</p>
              <p>経験者との質疑応答セッション</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};