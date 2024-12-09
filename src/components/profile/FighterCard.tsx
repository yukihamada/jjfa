import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, Edit2, Power } from "lucide-react";
import { FighterRegistrationForm } from "./FighterRegistrationForm";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FighterCardProps {
  fighter: any;
  onRegistrationSuccess: () => void;
}

export const FighterCard = ({ fighter, onRegistrationSuccess }: FighterCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditComplete = () => {
    setIsEditing(false);
    onRegistrationSuccess();
  };

  const toggleActiveStatus = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("fighters")
        .update({ is_active: !fighter.is_active })
        .eq("id", fighter.id);

      if (error) throw error;

      toast.success(fighter.is_active ? "選手活動を一時停止しました" : "選手活動を再開しました");
      onRegistrationSuccess();
    } catch (error) {
      console.error("Error toggling active status:", error);
      toast.error("ステータスの更新に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>選手登録情報</CardTitle>
            <CardDescription>選手としての状態</CardDescription>
          </div>
          {fighter && !isEditing && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" />
                編集
              </Button>
              <Button
                variant={fighter.is_active ? "destructive" : "default"}
                size="sm"
                onClick={toggleActiveStatus}
                disabled={loading}
                className="flex items-center gap-2"
              >
                <Power className="w-4 h-4" />
                {fighter.is_active ? "活動停止" : "活動再開"}
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {fighter && !isEditing ? (
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
                className={`px-2 py-0.5 rounded ${
                  fighter.belt?.color === '#FFFFFF' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-white'
                }`}
                style={{ 
                  backgroundColor: fighter.belt?.color !== '#FFFFFF' ? fighter.belt?.color : undefined
                }}
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
            {fighter.instructor && (
              <div className="text-sm">
                <span className="font-medium">指導者:</span> {fighter.instructor}
              </div>
            )}
            {!fighter.is_active && (
              <div className="mt-4 p-2 bg-yellow-50 text-yellow-800 rounded-md text-sm">
                現在、選手活動を一時停止中です
              </div>
            )}
          </>
        ) : (
          <div className="space-y-4">
            {!fighter && (
              <div className="text-sm text-gray-500 mb-4">
                選手登録がありません。以下のフォームから登録できます。
              </div>
            )}
            <FighterRegistrationForm 
              onSuccess={handleEditComplete} 
              existingFighter={isEditing ? fighter : undefined}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};