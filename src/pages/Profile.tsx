import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { FighterCard } from "@/components/profile/FighterCard";
import { MembershipCard } from "@/components/profile/MembershipCard";
import { DAOCard } from "@/components/profile/DAOCard";
import { ProfilePhotoUpload } from "@/components/profile/ProfilePhotoUpload";
import { AccountSettings } from "@/components/profile/AccountSettings";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { Profile } from "@/integrations/supabase/types/profiles";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fighter, setFighter] = useState<any>(null);
  const [member, setMember] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);
      
      // Get profile data
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(profile);

      // Get fighter data
      const { data: fighter } = await supabase
        .from("fighters")
        .select(`
          *,
          belt:belts(name, color),
          dojo:dojos(name)
        `)
        .eq("user_id", user.id)
        .single();
      setFighter(fighter);

      // Get member data
      const { data: member } = await supabase
        .from("jjfa_members")
        .select("*")
        .eq("user_id", user.id)
        .single();
      setMember(member);

      setLoading(false);
    };
    checkUser();
  }, [navigate]);

  const handlePhotoUpdate = async (photoUrl: string) => {
    if (!user) return;
    
    const { error } = await supabase
      .from("profiles")
      .update({ avatar_url: photoUrl })
      .eq("id", user.id);

    if (error) {
      toast.error("プロフィール写真の更新に失敗しました");
    } else {
      setProfile(profile ? { ...profile, avatar_url: photoUrl } : null);
    }
  };

  const handlePurchaseNFT = () => {
    // Remove the toast message and let the DAOCard handle the purchase
  };

  const refreshFighterData = async () => {
    if (!user) return;
    
    const { data: fighter } = await supabase
      .from("fighters")
      .select(`
        *,
        belt:belts(name, color),
        dojo:dojos(name)
      `)
      .eq("user_id", user.id)
      .single();
    setFighter(fighter);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-2xl font-bold mb-8">プロフィール設定</h1>

      <div className="space-y-8">
        {/* プロフィール写真セクション */}
        <div className="mb-8">
          <ProfilePhotoUpload
            userId={user.id}
            currentPhotoUrl={profile?.avatar_url}
            onPhotoUpdate={handlePhotoUpdate}
          />
        </div>

        {/* 基本情報セクション */}
        <div className="grid gap-6 md:grid-cols-2">
          <AccountSettings userEmail={user?.email} />
          <ProfileForm profile={profile} user={user} />
        </div>

        {/* 会員情報セクション */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <FighterCard 
              fighter={fighter} 
              onRegistrationSuccess={refreshFighterData}
            />
            <MembershipCard 
              member={member} 
              onPurchaseNFT={handlePurchaseNFT} 
            />
          </div>
          <DAOCard onPurchaseNFT={handlePurchaseNFT} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
