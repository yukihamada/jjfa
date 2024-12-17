import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const TypingProgress = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [text, setText] = useState("");
  const sampleText = "The quick brown fox jumps over the lazy dog";

  const startTracking = () => {
    setIsTracking(true);
    setStartTime(new Date());
    setText("");
  };

  const calculateResults = async () => {
    if (!startTime) return;

    const endTime = new Date();
    const timeInMinutes = (endTime.getTime() - startTime.getTime()) / 1000 / 60;
    
    // Calculate WPM (assuming average word length of 5 characters)
    const words = text.length / 5;
    const wpm = Math.round(words / timeInMinutes);

    // Calculate accuracy
    let correctChars = 0;
    const minLength = Math.min(text.length, sampleText.length);
    for (let i = 0; i < minLength; i++) {
      if (text[i] === sampleText[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / sampleText.length) * 100);

    try {
      const { error } = await supabase
        .from("typing_progress")
        .insert([
          {
            wpm,
            accuracy,
          }
        ]);

      if (error) throw error;

      toast.success("練習記録を保存しました！");
    } catch (error) {
      console.error("Error saving progress:", error);
      toast.error("記録の保存に失敗しました");
    }

    setIsTracking(false);
    setStartTime(null);
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-4">タイピング練習</h3>
      
      {!isTracking ? (
        <div className="space-y-4">
          <p className="text-gray-600">
            タイピングスピードと正確性を測定します。
            「開始」を押すと練習が始まります。
          </p>
          <Button onClick={startTracking}>
            開始
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded">
            <p className="font-mono">{sampleText}</p>
          </div>
          
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="ここに上の文章を入力してください"
          />
          
          <Button 
            onClick={calculateResults}
            disabled={text.length < 1}
          >
            完了
          </Button>
        </div>
      )}
    </Card>
  );
};