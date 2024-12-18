import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export const TrainingRecordForm = () => {
  const queryClient = useQueryClient();
  const [duration, setDuration] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [intensity, setIntensity] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("training_records")
        .insert({
          user_id: user.id,
          duration: parseInt(duration),
          training_type: trainingType,
          intensity,
          notes,
        });

      if (error) throw error;

      toast.success("トレーニング記録を保存しました");
      setDuration("");
      setTrainingType("");
      setIntensity("");
      setNotes("");
      queryClient.invalidateQueries({ queryKey: ["trainingRecords"] });
    } catch (error) {
      console.error("Error saving training record:", error);
      toast.error("トレーニング記録の保存に失敗しました");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="trainingType">トレーニングの種類</Label>
        <Select value={trainingType} onValueChange={setTrainingType} required>
          <SelectTrigger>
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sparring">スパーリング</SelectItem>
            <SelectItem value="drilling">ドリル</SelectItem>
            <SelectItem value="conditioning">コンディショニング</SelectItem>
            <SelectItem value="technique">技術練習</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="duration">時間（分）</Label>
        <Input
          id="duration"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="60"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="intensity">強度</Label>
        <Select value={intensity} onValueChange={setIntensity}>
          <SelectTrigger>
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">軽め</SelectItem>
            <SelectItem value="moderate">普通</SelectItem>
            <SelectItem value="hard">きつめ</SelectItem>
            <SelectItem value="very_hard">非常にきつい</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">メモ</Label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="今日の練習の感想など"
        />
      </div>

      <Button type="submit">記録する</Button>
    </form>
  );
};