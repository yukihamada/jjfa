import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const StartingGuide = () => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
      <CardHeader>
        <CardTitle>Address Your Concerns!</CardTitle>
        <CardDescription>
          Common Worries and Solutions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">Not confident about fitness?</h4>
                <p className="text-sm text-slate-600">Start gradually with our step-by-step program</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">Worried about injuries?</h4>
                <p className="text-sm text-slate-600">Statistics show beginners have lower injury rates than in most common sports, thanks to our safety-first approach</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">Age restrictions?</h4>
                <p className="text-sm text-slate-600">We welcome practitioners from 6 to 80+ years old! We even have 80+ year-olds winning in master divisions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold">Not naturally athletic?</h4>
                <p className="text-sm text-slate-600">Our detailed instruction helps most people master the basics within 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};