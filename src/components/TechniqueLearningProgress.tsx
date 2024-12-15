import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { TechniqueForm } from "./technique-tracker/TechniqueForm";
import { ProgressList } from "./technique-tracker/ProgressList";

export const TechniqueLearningProgress = () => {
  const { data: userProgress, isLoading: isLoadingProgress } = useQuery({
    queryKey: ["learningProgress"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("learning_progress")
        .select("*")
        .eq("user_id", user.id);
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoadingProgress) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">柔術技術の習熟度トラッカー</h2>
      <TechniqueForm onSuccess={() => {}} />
      <ProgressList userProgress={userProgress} />
    </div>
  );
};