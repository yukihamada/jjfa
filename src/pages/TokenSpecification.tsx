import { Card, CardContent } from "@/components/ui/card";
import { PageTitle } from "@/components/PageTitle";
import { TokenSpecificationHeader } from "@/components/token-specification/TokenSpecificationHeader";
import { BackgroundGradient } from "@/components/BackgroundGradient";
import { TokenOverview } from "@/components/token-specification/sections/TokenOverview";
import { NetworkSelection } from "@/components/token-specification/sections/NetworkSelection";
import { TokenArchitecture } from "@/components/token-specification/sections/TokenArchitecture";
import { SecurityMeasures } from "@/components/token-specification/sections/SecurityMeasures";
import { TokenTypes } from "@/components/token-specification/sections/TokenTypes";
import { UserExperience } from "@/components/token-specification/sections/UserExperience";
import { Compliance } from "@/components/token-specification/sections/Compliance";
import { Transparency } from "@/components/token-specification/sections/Transparency";
import { Glossary } from "@/components/token-specification/sections/Glossary";

const TokenSpecification = () => {
  return (
    <div className="min-h-screen">
      <PageTitle title="トークン技術仕様書" />
      <BackgroundGradient />
      <div className="container mx-auto py-12 px-4">
        <Card className="bg-white/90 backdrop-blur-md">
          <CardContent className="p-6">
            <TokenSpecificationHeader />
            <div className="prose prose-slate max-w-none">
              <TokenOverview />
              <NetworkSelection />
              <TokenArchitecture />
              <SecurityMeasures />
              <TokenTypes />
              <UserExperience />
              <Compliance />
              <Transparency />
              <Glossary />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenSpecification;