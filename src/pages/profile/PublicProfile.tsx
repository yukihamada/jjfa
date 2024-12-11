import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, MapPin, Award, Shield, Trophy, User2, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    return (
      <div className="container max-w-2xl py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <User2 className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">プロフィールが見つかりませんでした</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fighter = profile.fighters?.[0];

  return (
    <div className="container max-w-3xl py-8 space-y-6">
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500" />
        <CardHeader className="relative">
          <div className="absolute -top-16 left-6">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage src={profile.avatar_url} />
              <AvatarFallback className="text-2xl">
                {profile.username?.[0]?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="pt-10">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{profile.username}</CardTitle>
                {profile.full_name && (
                  <CardDescription className="text-lg">{profile.full_name}</CardDescription>
                )}
              </div>
              {fighter?.is_active && (
                <Badge variant="default" className="ml-2">アクティブ選手</Badge>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {profile.bio && (
            <div className="space-y-2">
              <h3 className="font-medium text-lg">自己紹介</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{profile.bio}</p>
            </div>
          )}

          {fighter && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium text-lg">柔術情報</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fighter.belt && (
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span className="text-muted-foreground">帯：</span>
                      <span 
                        className={`px-2 py-0.5 rounded ${
                          fighter.belt.color === '#FFFFFF' 
                            ? 'bg-gray-100 text-gray-900' 
                            : 'text-white'
                        }`}
                        style={{ 
                          backgroundColor: fighter.belt.color !== '#FFFFFF' ? fighter.belt.color : undefined
                        }}
                      >
                        {fighter.belt.name}
                      </span>
                    </div>
                  )}
                  {fighter.dojo && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span className="text-muted-foreground">道場：</span>
                      <span>{fighter.dojo.name}</span>
                    </div>
                  )}
                  {fighter.instructor && (
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="text-muted-foreground">指導者：</span>
                      <span>{fighter.instructor}</span>
                    </div>
                  )}
                  {(fighter.wins > 0 || fighter.losses > 0 || fighter.draws > 0) && (
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">試合成績：</span>
                      <span>{fighter.wins}勝 {fighter.losses}敗 {fighter.draws}分</span>
                    </div>
                  )}
                </div>

                {fighter.achievements && fighter.achievements.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">得意技</h4>
                    <div className="flex flex-wrap gap-2">
                      {fighter.achievements.map((technique: string, index: number) => (
                        <Badge key={index} variant="secondary">{technique}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicProfile;