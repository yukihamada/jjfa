import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Database, Lock } from "lucide-react";

export const ComingSoonSection = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 animate-in fade-in slide-in-from-bottom-4">
        Coming Soon
      </h2>
      <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 delay-100">
        JJFA is shaping the future of the Jiu-Jitsu world. Using the latest technology,
        we aim to build a more transparent and efficient Jiu-Jitsu community.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-200">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Building2 className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>Dojo Management System</CardTitle>
            <CardDescription>
              All-in-one solution for dojo operations with mobile app access anytime, anywhere.
              <ul className="mt-4 space-y-2 text-left">
                <li>・ Member Management System</li>
                <li>・ Class Schedule Management</li>
                <li>・ Attendance Tracking and Analytics</li>
                <li>・ Payment Management</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 relative group transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 delay-300">
          <div className="absolute top-4 right-4">
            <Lock className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </div>
          <CardHeader>
            <Database className="w-12 h-12 text-slate-800 mb-4" />
            <CardTitle>Blockchain Certification System</CardTitle>
            <CardDescription>
              Securely record and manage belt promotions and tournament results on blockchain.
              Tamper-proof achievement verification system for accurate career tracking.
              <ul className="mt-4 space-y-2 text-left">
                <li>・ Digital Belt Promotion Certification</li>
                <li>・ Blockchain Tournament Records</li>
                <li>・ NFT Medals and Titles</li>
                <li>・ Global Achievement Verification</li>
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};