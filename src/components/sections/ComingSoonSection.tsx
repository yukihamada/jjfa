import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

export const ComingSoonSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Coming Soon</CardTitle>
            <CardDescription className="text-center text-lg">
              New features and services are under development
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
              <p className="text-slate-600">
                Track your progress and connect with the community on the go
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-2">Online Learning Platform</h3>
              <p className="text-slate-600">
                Access high-quality instructional content anytime, anywhere
              </p>
            </div>
            <div className="text-center p-4">
              <h3 className="text-xl font-semibold mb-2">Global Tournament Series</h3>
              <p className="text-slate-600">
                Compete in international tournaments and earn rewards
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};