import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type TrainingGoal = {
  goal_type: string;
  target_value: number;
  end_date: string;
};

export const TrainingGoalForm = ({ onGoalAdded }: { onGoalAdded: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm<TrainingGoal>();

  const onSubmit = async (data: TrainingGoal) => {
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("User not authenticated");

      const { error } = await supabase
        .from("training_goals")
        .insert([{
          ...data,
          user_id: user.id,
          target_value: parseInt(data.target_value.toString())
        }]);

      if (error) throw error;

      toast.success("トレーニング目標を設定しました");
      reset();
      onGoalAdded();
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
        <label className="block text-sm font-medium mb-1">目標の種類</label>
        <input
          {...register("goal_type")}
          className="w-full p-2 border rounded"
          required
          placeholder="例：週3回の打ち込み練習"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">目標値</label>
        <input
          type="number"
          {...register("target_value")}
          className="w-full p-2 border rounded"
          required
          min="1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">目標期限</label>
        <input
          type="date"
          {...register("end_date")}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "保存中..." : "目標を設定"}
      </Button>
    </form>
  );
};