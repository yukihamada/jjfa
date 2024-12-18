import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { TechniqueForm } from "./technique-tracker/TechniqueForm";
import { ProgressList } from "./technique-tracker/ProgressList";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TechniqueLearningProgress = () => {
  const queryClient = useQueryClient();
  const [editingProgress, setEditingProgress] = useState<any | null>(null);

  const { data: userProgress, isLoading: isLoadingProgress } = useQuery({
    queryKey: ["learningProgress"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("learning_progress")
        .select("*, user:user_id(id)")
        .eq("user_id", user.id)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error("Error fetching learning progress:", error);
        throw error;
      }

      console.log("Fetched learning progress:", data); // デバッグ用
      return data;
    }
  });

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["learningProgress"] });
    setEditingProgress(null);
  };

  const handleEdit = async (progressId: string) => {
    if (!userProgress) return;
    const progressToEdit = userProgress.find(p => p.id === progressId);
    if (progressToEdit) {
      setEditingProgress(progressToEdit);
    }
  };

  if (isLoadingProgress) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-slate-800">技術トラッカー</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <TechniqueForm onSuccess={handleSuccess} editingProgress={editingProgress} />
        {userProgress && userProgress.length > 0 ? (
          <ProgressList 
            userProgress={userProgress} 
            onEdit={handleEdit}
          />
        ) : (
          <p className="text-center text-slate-500">まだ記録がありません</p>
        )}
      </CardContent>
    </Card>
  );
};