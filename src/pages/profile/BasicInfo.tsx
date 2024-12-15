import { useOutletContext } from "react-router-dom";
import { ProfilePhotoUpload } from "@/components/profile/ProfilePhotoUpload";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { FighterCard } from "@/components/profile/FighterCard";
import { DAOCard } from "@/components/profile/DAOCard";
import { Profile } from "@/integrations/supabase/types/profiles";
import { TechniqueLearningProgress } from "@/components/TechniqueLearningProgress";

interface OutletContextType {
  user: any;
  profile: Profile | null;
  fighter: any;
  onPhotoUpdate: (url: string) => void;
  onFighterUpdate: () => void;
  onPurchaseNFT: () => void;
}

const BasicInfo = () => {
  const { user, profile, fighter, onPhotoUpdate, onFighterUpdate, onPurchaseNFT } = useOutletContext<OutletContextType>();

  return (
    <div className="space-y-6">
      <TechniqueLearningProgress />
      <div className="mb-8">
        <ProfilePhotoUpload
          userId={user.id}
          currentPhotoUrl={profile?.avatar_url}
          onPhotoUpdate={onPhotoUpdate}
        />
      </div>
      <ProfileForm profile={profile} user={user} />
      <FighterCard 
        fighter={fighter} 
        onRegistrationSuccess={onFighterUpdate} 
      />
      <DAOCard onPurchaseNFT={onPurchaseNFT} />
    </div>
  );
};

export default BasicInfo;