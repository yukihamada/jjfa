import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, CalendarDays } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileBio } from "@/components/profile/ProfileBio";
import { FighterInfo } from "@/components/profile/FighterInfo";
import { ProfileNotFound } from "@/components/profile/ProfileNotFound";

const PublicProfile = () => {
  const { username } = useParams();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // First try to fetch by username
        let { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("username", username)
          .single();

        if (profileError) {
          // If username not found, try to fetch by id
          const { data: idProfileData, error: idProfileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", username)
            .single();

          if (idProfileError) {
            console.error("Error fetching profile:", idProfileError);
            setProfile(null);
            setLoading(false);
            return;
          }
          profileData = idProfileData;
        }

        // If we found a profile, fetch the fighter data
        if (profileData) {
          const { data: fighterData } = await supabase
            .from("fighters")
            .select(`
              *,
              belt:belts (name, color),
              dojo:dojos (name)
            `)
            .eq("user_id", profileData.id)
            .single();

          setProfile({
            ...profileData,
            fighters: fighterData ? [fighterData] : []
          });
        }
      } catch (error) {
        console.error("Error in profile fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!profile) {
    return <ProfileNotFound />;
  }

  const fighter = profile.fighters?.[0];

  return (
    <div className="container max-w-3xl py-8 space-y-6">
      <ProfileHeader profile={profile} fighter={fighter} />
      <ProfileBio bio={profile.bio} />
      <FighterInfo fighter={fighter} />
      
      <div className="text-sm text-muted-foreground text-center pt-4 flex items-center justify-center gap-2">
        <CalendarDays className="w-4 h-4" />
        {new Date(profile.created_at).toLocaleDateString('ja-JP')}に登録
      </div>
    </div>
  );
};

export default PublicProfile;