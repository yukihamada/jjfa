import { ProfilePhotoUpload } from "@/components/profile/ProfilePhotoUpload";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { Profile } from "@/integrations/supabase/types/profiles";

interface BasicInfoProps {
  user: any;
  profile: Profile | null;
  onPhotoUpdate: (url: string) => void;
}

const BasicInfo = ({ user, profile, onPhotoUpdate }: BasicInfoProps) => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <ProfilePhotoUpload
          userId={user.id}
          currentPhotoUrl={profile?.avatar_url}
          onPhotoUpdate={onPhotoUpdate}
        />
      </div>
      <ProfileForm profile={profile} user={user} />
    </div>
  );
};

export default BasicInfo;