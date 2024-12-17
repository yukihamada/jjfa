import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const TypingProgress = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [count, setCount] = useState(0);

  const startTracking = () => {
    setIsTracking(true);
    setStartTime(new Date());
    setCount(0);
  };

  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  const calculateResults = async () => {
    if (!startTime) return;

    const endTime = new Date();
    const timeInMinutes = (endTime.getTime() - startTime.getTime()) / 1000 / 60;
    
    // Calculate speed (打ち込み per minute)
    const speed = Math.round(count / timeInMinutes);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { error } = await supabase
        .from("typing_progress")
        .insert({
          user_id: user.id,
          wpm: speed,
          accuracy: 100, // 打ち込みの場合は正確性は常に100%とする
        });

      if (error) throw error;

      toast.success("練習記録を保存しました！");
    } catch (error) {
      console.error("Error saving progress:", error);
      toast.error("記録の保存に失敗しました");
    }

    setIsTracking(false);
    setStartTime(null);
    setCount(0);
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">打ち込み練習</h3>
      
      {!isTracking ? (
        <div className="space-y-4">
          <p className="text-gray-600">
            打ち込みの回数と速度を測定します。
            「開始」を押すと練習が始まります。
          </p>
          <Button onClick={startTracking}>
            開始
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded text-center">
            <p className="text-4xl font-bold">{count}</p>
            <p className="text-gray-600">回</p>
          </div>
          
          <Button 
            onClick={incrementCount}
            className="w-full h-24 text-xl"
          >
            打ち込み +1
          </Button>
          
          <Button 
            onClick={calculateResults}
            disabled={count < 1}
            variant="secondary"
          >
            完了
          </Button>
        </div>
      )}
    </Card>
  );
};