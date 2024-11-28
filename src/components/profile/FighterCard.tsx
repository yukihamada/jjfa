import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield } from "lucide-react";

interface FighterCardProps {
  fighter: any;
}

export const FighterCard = ({ fighter }: FighterCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>選手登録情報</CardTitle>
        <CardDescription>選手としての状態</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {fighter ? (
          <>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="font-medium">所属道場:</span>
              <span>{fighter.dojo?.name || "未所属"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-purple-500" />
              <span className="font-medium">帯:</span>
              <span style={{ color: fighter.belt?.color }}>
                {fighter.belt?.name || "未設定"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">試合成績:</span>
              <span>{fighter.wins}勝 {fighter.losses}敗 {fighter.draws}分</span>
            </div>
          </>
        ) : (
          <div className="text-sm text-gray-500">
            選手登録がありません
          </div>
        )}
      </CardContent>
    </Card>
  );
};