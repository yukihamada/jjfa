import { useOutletContext } from "react-router-dom";
import { ProfilePhotoUpload } from "@/components/profile/ProfilePhotoUpload";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { FighterCard } from "@/components/profile/FighterCard";
import { DAOCard } from "@/components/profile/DAOCard";
import { Profile } from "@/integrations/supabase/types/profiles";
import { TechniqueLearningProgress } from "@/components/TechniqueLearningProgress";
import { TrainingTracker } from "@/components/training-tracker/TrainingTracker";

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
      <div className="mb-8">
        <ProfilePhotoUpload
          userId={user.id}
          currentPhotoUrl={profile?.avatar_url}
          onPhotoUpdate={onPhotoUpdate}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProfileForm profile={profile} user={user} />
        </div>
        
        <div className="space-y-6">
          <FighterCard 
            fighter={fighter} 
            onRegistrationSuccess={onFighterUpdate} 
          />
          <DAOCard onPurchaseNFT={onPurchaseNFT} />
        </div>

        <div className="lg:col-span-2">
          <TechniqueLearningProgress />
        </div>

        <div className="lg:col-span-1">
          <TrainingTracker />
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;