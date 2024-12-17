import { ProfileForm } from "@/components/profile/ProfileForm";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { TypingProgress } from "@/components/profile/TypingProgress";

const BasicInfo = () => {
  return (
    <div className="space-y-6">
      <ProfileHeader />
      <ProfileForm />
      <TypingProgress />
    </div>
  );
};

export default BasicInfo;