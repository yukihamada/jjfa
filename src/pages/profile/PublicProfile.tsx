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
        const { data, error } = await supabase
          .from("profiles")
          .select(`
            *,
            fighters (
              *,
              belt:belts (name, color),
              dojo:dojos (name)
            )
          `)
          .eq("username", username)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
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