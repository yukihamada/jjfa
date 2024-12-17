import { useOutletContext } from "react-router-dom";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { TypingProgress } from "@/components/profile/TypingProgress";
import { Profile } from "@/integrations/supabase/types/profiles";

interface OutletContextType {
  user: any;
  profile: Profile | null;
  fighter: any;
  onPhotoUpdate: (url: string) => void;
  onFighterUpdate: () => void;
  onPurchaseNFT: () => void;
}

const BasicInfo = () => {
  const { user, profile, fighter } = useOutletContext<OutletContextType>();

  return (
    <div className="space-y-6">
      <ProfileHeader profile={profile} fighter={fighter} />
      <ProfileForm profile={profile} user={user} />
      <TypingProgress />
    </div>
  );
};

export default BasicInfo;