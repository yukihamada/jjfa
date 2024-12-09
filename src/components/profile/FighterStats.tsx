import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

interface FighterStatsProps {
  fighter: any;
  onUpdate: () => void;
}

export const FighterStats = ({ fighter, onUpdate }: FighterStatsProps) => {
  const [loading, setLoading] = useState(false);
  const [newTechnique, setNewTechnique] = useState("");

  const addTechnique = async () => {
    if (!newTechnique.trim()) {
      toast.error("技名を入力してください");
      return;
    }

    setLoading(true);
    try {
      const currentAchievements = fighter.achievements || [];
      const { error } = await supabase
        .from("fighters")
        .update({
          achievements: [...currentAchievements, newTechnique],
        })
        .eq("id", fighter.id);

      if (error) throw error;

      toast.success("技を登録しました");
      setNewTechnique("");
      onUpdate();
    } catch (error) {
      console.error("Error adding technique:", error);
      toast.error("技の登録に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>得意技</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fighter?.achievements?.length > 0 ? (
              <ul className="list-disc pl-4 space-y-2">
                {fighter.achievements.map((technique: string, index: number) => (
                  <li key={index}>{technique}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">まだ登録されている技はありません</p>
            )}
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="technique">新しい技を追加</Label>
                <Input
                  id="technique"
                  value={newTechnique}
                  onChange={(e) => setNewTechnique(e.target.value)}
                  placeholder="技名を入力"
                />
              </div>
              <Button
                onClick={addTechnique}
                disabled={loading}
                className="self-end"
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                追加
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>戦績</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <Label>試合数</Label>
              <p className="text-2xl font-bold">{fighter?.total_matches || 0}</p>
            </div>
            <div>
              <Label>勝利</Label>
              <p className="text-2xl font-bold text-green-600">{fighter?.wins || 0}</p>
            </div>
            <div>
              <Label>敗北</Label>
              <p className="text-2xl font-bold text-red-600">{fighter?.losses || 0}</p>
            </div>
            <div>
              <Label>引き分け</Label>
              <p className="text-2xl font-bold text-gray-600">{fighter?.draws || 0}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};