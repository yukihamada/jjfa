import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, CalendarDays } from "lucide-react";

export const CommunityBenefits = () => {
  return (
    <Card className="mb-12">
      <CardHeader>
        <CardTitle>会員特典</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <Gift className="h-5 w-5 mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold">限定コンテンツ</h4>
              <p>トップ選手による技術解説動画や、オンラインセミナーへの優先参加権</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CalendarDays className="h-5 w-5 mt-1 shrink-0" />
            <div>
              <h4 className="font-semibold">イベント優待</h4>
              <p>各種イベントやトーナメントの優先予約と割引特典</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};