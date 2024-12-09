import { FighterCard } from "@/components/profile/FighterCard";

interface FighterProps {
  fighter: any;
  onRegistrationSuccess: () => void;
}

const Fighter = ({ fighter, onRegistrationSuccess }: FighterProps) => {
  return (
    <div className="space-y-6">
      <FighterCard 
        fighter={fighter} 
        onRegistrationSuccess={onRegistrationSuccess}
      />
    </div>
  );
};

export default Fighter;