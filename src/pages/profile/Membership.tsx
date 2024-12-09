import { MembershipCard } from "@/components/profile/MembershipCard";
import { DAOCard } from "@/components/profile/DAOCard";

interface MembershipProps {
  member: any;
  onPurchaseNFT: () => void;
}

const Membership = ({ member, onPurchaseNFT }: MembershipProps) => {
  return (
    <div className="space-y-6">
      <MembershipCard member={member} onPurchaseNFT={onPurchaseNFT} />
      <DAOCard onPurchaseNFT={onPurchaseNFT} />
    </div>
  );
};

export default Membership;