import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { TechniqueForm } from "./technique-tracker/TechniqueForm";
import { ProgressList } from "./technique-tracker/ProgressList";
import { useState } from "react";

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
        .select("*")
        .eq("user_id", user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
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
    <div className="space-y-6 p-4 sm:p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 break-keep">技術トラッカー</h2>
      <TechniqueForm onSuccess={handleSuccess} editingProgress={editingProgress} />
      <ProgressList 
        userProgress={userProgress} 
        onEdit={handleEdit}
      />
    </div>
  );
};