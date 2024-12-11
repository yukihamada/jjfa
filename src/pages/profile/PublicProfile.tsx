import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { 
  Loader2, MapPin, Award, Shield, Trophy, User2, CalendarDays,
  Scale, Ruler, Swords, Medal, UserRound, Dumbbell
} from "lucide-react";
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
        <Card className="text-center py-12">
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <UserRound className="w-16 h-16 text-muted-foreground opacity-50" />
            <h2 className="text-2xl font-semibold">プロフィールが見つかりません</h2>
            <p className="text-muted-foreground max-w-sm">
              お探しのユーザープロフィールは存在しないか、削除された可能性があります。
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fighter = profile.fighters?.[0];
  const hasAchievements = fighter?.achievements && fighter.achievements.length > 0;
  const hasFighterInfo = fighter?.belt || fighter?.dojo || fighter?.instructor;

  return (
    <div className="container max-w-3xl py-8 space-y-6">
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500" />
        <CardHeader className="relative pb-4">
          <div className="absolute -top-16 left-6">
            <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
              <AvatarImage src={profile.avatar_url} />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-400 to-purple-400 text-white">
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
          {profile.bio ? (
            <div className="space-y-2">
              <h3 className="font-medium text-lg flex items-center gap-2">
                <User2 className="w-5 h-5 text-blue-500" />
                自己紹介
              </h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{profile.bio}</p>
            </div>
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              自己紹介文はまだ設定されていません
            </div>
          )}

          {hasFighterInfo && (
            <>
              <Separator />
              <div className="space-y-4">
                <h3 className="font-medium text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  柔術情報
                </h3>
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
                      <Medal className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">試合成績：</span>
                      <span>{fighter.wins}勝 {fighter.losses}敗 {fighter.draws}分</span>
                    </div>
                  )}
                  {fighter.weight && (
                    <div className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-orange-500" />
                      <span className="text-muted-foreground">体重：</span>
                      <span>{fighter.weight}kg</span>
                    </div>
                  )}
                  {fighter.height && (
                    <div className="flex items-center gap-2">
                      <Ruler className="w-5 h-5 text-indigo-500" />
                      <span className="text-muted-foreground">身長：</span>
                      <span>{fighter.height}cm</span>
                    </div>
                  )}
                  {fighter.preferred_stance && (
                    <div className="flex items-center gap-2">
                      <Swords className="w-5 h-5 text-red-500" />
                      <span className="text-muted-foreground">スタンス：</span>
                      <span>{fighter.preferred_stance}</span>
                    </div>
                  )}
                  {fighter.competition_experience && (
                    <div className="flex items-center gap-2">
                      <Dumbbell className="w-5 h-5 text-cyan-500" />
                      <span className="text-muted-foreground">試合経験：</span>
                      <span>{fighter.competition_experience}年</span>
                    </div>
                  )}
                </div>

                {hasAchievements && (
                  <div className="mt-6">
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      得意技
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {fighter.achievements.map((technique: string, index: number) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800"
                        >
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {!hasFighterInfo && (
            <div className="text-center py-8 space-y-4">
              <Trophy className="w-12 h-12 text-muted-foreground opacity-30 mx-auto" />
              <div className="text-muted-foreground">
                柔術情報はまだ登録されていません
              </div>
            </div>
          )}

          <div className="text-sm text-muted-foreground text-center pt-4 flex items-center justify-center gap-2">
            <CalendarDays className="w-4 h-4" />
            {new Date(profile.created_at).toLocaleDateString('ja-JP')}に登録
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicProfile;