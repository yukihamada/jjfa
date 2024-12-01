import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield } from "lucide-react";
import { FighterRegistrationForm } from "./FighterRegistrationForm";

interface FighterCardProps {
  fighter: any;
  onRegistrationSuccess: () => void;
}

export const FighterCard = ({ fighter, onRegistrationSuccess }: FighterCardProps) => {
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
              <span 
                className={`px-2 py-0.5 rounded ${fighter.belt?.color === '#FFFFFF' ? 'bg-gray-100 text-gray-900' : ''}`}
                style={{ color: fighter.belt?.color !== '#FFFFFF' ? fighter.belt?.color : undefined }}
              >
                {fighter.belt?.name || "未設定"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">試合成績:</span>
              <span>{fighter.wins}勝 {fighter.losses}敗 {fighter.draws}分</span>
            </div>
            {fighter.weight && (
              <div className="text-sm">
                <span className="font-medium">体重:</span> {fighter.weight}kg
              </div>
            )}
            {fighter.height && (
              <div className="text-sm">
                <span className="font-medium">身長:</span> {fighter.height}cm
              </div>
            )}
            {fighter.preferred_stance && (
              <div className="text-sm">
                <span className="font-medium">スタンス:</span> {fighter.preferred_stance}
              </div>
            )}
          </>
        ) : (
          <div className="space-y-4">
            <div className="text-sm text-gray-500 mb-4">
              選手登録がありません。以下のフォームから登録できます。
            </div>
            <FighterRegistrationForm onSuccess={onRegistrationSuccess} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};