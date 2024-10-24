import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Trophy, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const JiujitsuBenefits = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50/50 to-slate-100/50">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Discover the Benefits of Jiu-Jitsu
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Brain className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>Strategic Thinking</CardTitle>
              <CardDescription>
                Jiu-Jitsu is often called "Physical Chess". It develops strategic thinking and allows you to overcome physical differences through technique.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Heart className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>Healthy Lifestyle</CardTitle>
              <CardDescription>
                Full-body workout improves fitness, flexibility, and helps reduce stress, contributing to both physical and mental health.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Users className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>Community</CardTitle>
              <CardDescription>
                A warm community where people of all ages, genders, and nationalities learn together. Make lifelong friends through training.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <Trophy className="w-12 h-12 text-slate-800 mb-4" />
              <CardTitle>Achievement</CardTitle>
              <CardDescription>
                Experience personal growth through clear goals like belt promotions and competition results.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
            <CardHeader>
              <CardTitle>Getting Started with Jiu-Jitsu</CardTitle>
              <CardDescription>
                Anyone can start Jiu-Jitsu. We have beginner-friendly classes with experienced instructors to support you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Recommended preparation:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Comfortable clothing (T-shirt, shorts, etc.)</li>
                <li>Water bottle for hydration</li>
                <li>Towel</li>
                <li>Enthusiasm and curiosity!</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Link to="/trial-class">
              <Button 
                size="lg"
                className="bg-slate-800 text-white hover:bg-slate-700"
              >
                Book a Free Trial Class <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JiujitsuBenefits;