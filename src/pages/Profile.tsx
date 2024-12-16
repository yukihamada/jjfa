import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Profile } from "@/integrations/supabase/types/profiles";
import { ProfileLayout } from "@/components/profile/ProfileLayout";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [fighter, setFighter] = useState<any>(null);
  const [member, setMember] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        if (username) {
          // If username is provided, fetch that user's profile
          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("username", username)
            .single();

          if (profileError) throw profileError;
          setProfile(profileData);

          // Get fighter data for this profile
          const { data: fighterData } = await supabase
            .from("fighters")
            .select(`
              *,
              belt:belts(name, color),
              dojo:dojos(name)
            `)
            .eq("user_id", profileData.id)
            .single();
          setFighter(fighterData);

          // Get member data for this profile
          const { data: memberData } = await supabase
            .from("jjfa_members")
            .select("*")
            .eq("user_id", profileData.id)
            .single();
          setMember(memberData);
        } else {
          // If no username, get current user's profile
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
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("プロフィールの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [navigate, username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <ProfileLayout>
      <Outlet context={{
        user,
        profile,
        fighter,
        member,
        onPhotoUpdate: async (photoUrl: string) => {
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
        },
        onFighterUpdate: async () => {
          if (!user && !profile) return;
          
          const userId = user?.id || profile?.id;
          const { data: fighter } = await supabase
            .from("fighters")
            .select(`
              *,
              belt:belts(name, color),
              dojo:dojos(name)
            `)
            .eq("user_id", userId)
            .single();
          setFighter(fighter);
        }
      }} />
    </ProfileLayout>
  );
};

export default ProfilePage;