import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const JiujitsuBenefitsSection = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        Benefits of Jiu-Jitsu
      </h2>
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4">
          <CardHeader>
            <Brain className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>Strategic Thinking</CardTitle>
            <CardDescription>
              A sport where technique can overcome physical differences, often called physical chess.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-100">
          <CardHeader>
            <Heart className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>Healthy Lifestyle</CardTitle>
            <CardDescription>
              Effective for full-body exercise and promoting physical and mental health.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <CardHeader>
            <Users className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>Community</CardTitle>
            <CardDescription>
              A warm community where people of all ages and genders can learn together.
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
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};