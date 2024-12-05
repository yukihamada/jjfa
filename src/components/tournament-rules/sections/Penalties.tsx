import { RuleSection } from "../RuleSection";
import { SafetyViolations } from "./penalties/SafetyViolations";
import { AttackViolations } from "./penalties/AttackViolations";
import { TechnicalRestrictions } from "./penalties/TechnicalRestrictions";
import { SportsmanshipViolations } from "./penalties/SportsmanshipViolations";
import { UniformViolations } from "./penalties/UniformViolations";
import { PenaltyTypes } from "./penalties/PenaltyTypes";

export const Penalties = () => {
  return (
    <RuleSection id="penalties" title="ペナルティ" sectionNumber="8">
      <div className="space-y-6">
        <SafetyViolations />
        <AttackViolations />
        <TechnicalRestrictions />
        <SportsmanshipViolations />
        <UniformViolations />
        <PenaltyTypes />
      </div>
    </RuleSection>
  );
};