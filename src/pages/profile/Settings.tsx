import { AccountSettings } from "@/components/profile/AccountSettings";

interface SettingsProps {
  userEmail: string;
}

const Settings = ({ userEmail }: SettingsProps) => {
  return (
    <div className="space-y-6">
      <AccountSettings userEmail={userEmail} />
    </div>
  );
};

export default Settings;