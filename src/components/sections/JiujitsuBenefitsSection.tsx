import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const JiujitsuBenefitsSection = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        柔術の魅力
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <Brain className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>戦略的思考</CardTitle>
            <CardDescription>
              体格差を技術でカバーできる、身体のチェスとも呼ばれる奥深いスポーツです。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-100">
          <CardHeader>
            <Heart className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>健康的な生活</CardTitle>
            <CardDescription>
              全身運動による体力向上と、心身の健康増進に効果的です。
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <CardHeader>
            <Users className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>コミュニティ</CardTitle>
            <CardDescription>
              年齢や性別を問わず、共に学び合える温かいコミュニティです。
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 delay-300">
        <Link to="/jiujitsu-benefits">
          <Button 
            variant="outline" 
            className="text-slate-800 border-slate-800 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
          >
            もっと詳しく知る
          </Button>
        </Link>
      </div>
    </section>
  );
};