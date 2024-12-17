import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

type TrainingRecord = {
  training_type: string;
  duration: number;
  intensity: "low" | "medium" | "high";
  notes?: string;
};

export const TrainingRecordForm = ({ onRecordAdded }: { onRecordAdded: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm<TrainingRecord>();

  const onSubmit = async (data: TrainingRecord) => {
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase
        .from("training_records")
        .insert([{
          ...data,
          user_id: user.id,
          duration: parseInt(data.duration.toString()),
          tokens_earned: Math.floor(parseInt(data.duration.toString()) / 10) // 10分ごとに1トークン
        }]);

      if (error) throw error;

      toast.success("トレーニング記録を保存しました");
      reset();
      onRecordAdded();
    } catch (error) {
      toast.error("エラーが発生しました");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">トレーニング種類</label>
        <input
          {...register("training_type")}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">時間（分）</label>
        <input
          type="number"
          {...register("duration")}
          className="w-full p-2 border rounded"
          required
          min="1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">強度</label>
        <select {...register("intensity")} className="w-full p-2 border rounded" required>
          <option value="low">低</option>
          <option value="medium">中</option>
          <option value="high">高</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">メモ</label>
        <textarea
          {...register("notes")}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "保存中..." : "記録を保存"}
      </Button>
    </form>
  );
};