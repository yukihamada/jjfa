import { Card, CardContent } from "@/components/ui/card";
import { PageTitle } from "@/components/PageTitle";
import { TokenSpecificationHeader } from "@/components/token-specification/TokenSpecificationHeader";
import { NetworkSelection } from "@/components/token-specification/sections/NetworkSelection";
import { TokenArchitecture } from "@/components/token-specification/sections/TokenArchitecture";
import { SecurityMeasures } from "@/components/token-specification/sections/SecurityMeasures";
import { BackgroundGradient } from "@/components/BackgroundGradient";

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
              <NetworkSelection />
              <TokenArchitecture />
              <SecurityMeasures />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TokenSpecification;