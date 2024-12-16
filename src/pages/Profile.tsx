import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, PenSquare } from "lucide-react";
import { Profile } from "@/integrations/supabase/types/profiles";
import { ProfileLayout } from "@/components/profile/ProfileLayout";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <ProfileLayout>
      <div className="mb-6">
        <Button
          onClick={() => navigate("/community")}
          className="w-full gap-2"
        >
          <PenSquare className="w-4 h-4" />
          投稿する
        </Button>
      </div>
      <Outlet context={{
        user,
        profile,
        fighter,
        member,
        onPhotoUpdate: handlePhotoUpdate,
        onPurchaseNFT: handlePurchaseNFT,
        onFighterUpdate: refreshFighterData
      }} />
    </ProfileLayout>
  );
};

export default ProfilePage;