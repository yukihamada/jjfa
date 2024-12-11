import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { UserRound } from "lucide-react";

interface ProfileHeaderProps {
  profile: any;
  fighter: any;
}

export const ProfileHeader = ({ profile, fighter }: ProfileHeaderProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
      <CardHeader className="relative pb-4">
        <div className="absolute -top-16 left-6">
          <Avatar className="w-24 h-24 border-4 border-background shadow-lg">
            <AvatarImage src={profile.avatar_url} />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600">
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
    </Card>
  );
};