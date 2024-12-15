import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const EventsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-slate-800">イベント情報: JiuFight 2025</CardTitle>
            <p className="text-lg font-medium text-slate-600">2025年2月16日（日）</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              「JiuFight 2025」は、Super Yawara F・H・R 令和熾烈大合戦がスポンサーを務め、JiuFight独自ルールで行われる特別な招待制イベントです。優れた選手たちが緻密な戦略と高度なテクニックを披露するこの舞台は、柔術ファンならどなたでも観戦可能。現場で繰り広げられる緊張感と興奮をぜひ体感してください。
            </p>
            <div className="space-y-2">
              <p className="text-slate-600">
                <strong>開催場所:</strong> 大田区産業プラザPiO（京急蒲田駅徒歩3分）
              </p>
              <Link to="/events">
                <Button variant="outline" className="w-full sm:w-auto text-slate-800 border-slate-800 hover:bg-slate-100">
                  詳細を見る
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};