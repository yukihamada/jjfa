import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PageTitle } from "@/components/PageTitle";
import { TableOfContents } from "@/components/tournament-rules/TableOfContents";
import { Button } from "@/components/ui/button";
import { Printer, History as HistoryIcon } from "lucide-react";

// Import all sections
import { Introduction } from "@/components/tournament-rules/sections/Introduction";
import { MatchFormat } from "@/components/tournament-rules/sections/MatchFormat";
import { UniformRules } from "@/components/tournament-rules/sections/UniformRules";
import { AgeCategories } from "@/components/tournament-rules/sections/AgeCategories";
import { MatchDuration } from "@/components/tournament-rules/sections/MatchDuration";
import { WeightDivisions } from "@/components/tournament-rules/sections/WeightDivisions";
import { PointSystem } from "@/components/tournament-rules/sections/PointSystem";
import { RefereeBasics } from "@/components/tournament-rules/sections/RefereeBasics";
import { Penalties } from "@/components/tournament-rules/sections/Penalties";
import { SafetyMeasures } from "@/components/tournament-rules/sections/SafetyMeasures";
import { BracketSystem } from "@/components/tournament-rules/sections/BracketSystem";
import { TeamPoints } from "@/components/tournament-rules/sections/TeamPoints";
import { Rankings } from "@/components/tournament-rules/sections/Rankings";
import { BlackBeltSystem } from "@/components/tournament-rules/sections/BlackBeltSystem";
import { TournamentOperations } from "@/components/tournament-rules/sections/TournamentOperations";
import { CodeOfConduct } from "@/components/tournament-rules/sections/CodeOfConduct";
import { AntiDoping } from "@/components/tournament-rules/sections/AntiDoping";
import { TechnologyIntegration } from "@/components/tournament-rules/sections/TechnologyIntegration";
import { CareerDevelopment } from "@/components/tournament-rules/sections/CareerDevelopment";
import { GlobalStandards } from "@/components/tournament-rules/sections/GlobalStandards";
import { CommunityEngagement } from "@/components/tournament-rules/sections/CommunityEngagement";
import { Sustainability } from "@/components/tournament-rules/sections/Sustainability";

const TournamentRules = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl bg-white shadow-lg rounded-lg print:shadow-none">
        <div className="p-8" ref={contentRef}>
          <div className="flex justify-between items-center mb-8">
            <PageTitle title="JJFA公式大会ルール" />
            <Button
              onClick={handlePrint}
              className="print:hidden flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              印刷する
            </Button>
          </div>
          
          <div className="prose prose-slate max-w-none">
            <div className="text-center mb-12">
              <img 
                src="/OGP.png" 
                alt="JJFA Logo" 
                className="mx-auto w-32 h-auto mb-6"
              />
              <p className="text-lg text-slate-600 mb-8">
                JJFAトーナメントは、伝統的な柔術の価値を守りながら、
                最新のテクノロジーを活用して公平性と透明性を確保する次世代の大会フォーマットです。
              </p>
            </div>

            <TableOfContents />

            <div className="space-y-12">
              <Introduction />
              <MatchFormat />
              <UniformRules />
              <AgeCategories />
              <MatchDuration />
              <WeightDivisions />
              <PointSystem />
              <RefereeBasics />
              <Penalties />
              <SafetyMeasures />
              <BracketSystem />
              <TeamPoints />
              <Rankings />
              <BlackBeltSystem />
              <TournamentOperations />
              <CodeOfConduct />
              <AntiDoping />
              <TechnologyIntegration />
              <CareerDevelopment />
              <GlobalStandards />
              <CommunityEngagement />
              <Sustainability />
            </div>

            <div className="mt-16 border-t pt-8">
              <div className="flex items-center gap-2 mb-4">
                <HistoryIcon className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold">改訂履歴</h2>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p>2024年11月28日 - バージョン1.0.0: 初版公開</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRules;