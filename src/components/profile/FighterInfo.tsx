import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Shield, MapPin, Award, Scale, Ruler,
  Swords, Dumbbell, Medal 
} from "lucide-react";

interface FighterInfoProps {
  fighter: any;
}

export const FighterInfo = ({ fighter }: FighterInfoProps) => {
  if (!fighter?.belt && !fighter?.dojo && !fighter?.instructor) {
    return (
      <Card className="mt-6">
        <CardContent className="text-center py-8">
          <Trophy className="w-12 h-12 text-muted-foreground opacity-30 mx-auto mb-4" />
          <div className="text-muted-foreground">
            柔術情報はまだ登録されていません
          </div>
        </CardContent>
      </Card>
    );
  }

  const hasAchievements = fighter?.achievements && fighter.achievements.length > 0;

  return (
    <Card className="mt-6">
      <CardContent className="py-6">
        <h3 className="font-medium text-lg flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-yellow-500" />
          柔術情報
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
          <div className="border-t pt-6">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              得意技
            </h4>
            <div className="flex flex-wrap gap-2">
              {fighter.achievements.map((technique: string, index: number) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 dark:from-slate-800 dark:to-slate-900 dark:text-slate-200"
                >
                  {technique}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};