import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const FighterRegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [preferredStance, setPreferredStance] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("ログインが必要です");
        return;
      }

      const { error } = await supabase
        .from("fighters")
        .insert({
          user_id: user.id,
          weight: parseFloat(weight),
          height: parseFloat(height),
          preferred_stance: preferredStance,
          is_active: true,
        });

      if (error) throw error;

      toast.success("選手登録が完了しました");
      onSuccess();
    } catch (error) {
      console.error("Error:", error);
      toast.error("選手登録に失敗しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">体重 (kg)</label>
        <Input
          type="number"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          placeholder="例: 70.5"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">身長 (cm)</label>
        <Input
          type="number"
          step="0.1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          placeholder="例: 175.0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">スタンス</label>
        <Select value={preferredStance} onValueChange={setPreferredStance}>
          <SelectTrigger>
            <SelectValue placeholder="スタンスを選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="orthodox">オーソドックス</SelectItem>
            <SelectItem value="southpaw">サウスポー</SelectItem>
            <SelectItem value="switch">スイッチ</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            登録中...
          </>
        ) : (
          "選手登録"
        )}
      </Button>
    </form>
  );
};