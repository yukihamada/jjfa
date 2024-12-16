import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProgressContent } from "@/components/technique-tracker/ProgressContent";
import { Loader2 } from "lucide-react";

interface ProgressDetail {
  id: string;
  technique: string;
  notes: string;
  learned_at: string;
  skill_level: string;
  user: {
    full_name: string | null;
  } | null;
}

export const ProgressDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: progress, isLoading } = useQuery({
    queryKey: ["progress", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("learning_progress")
        .select(`
          id,
          technique,
          notes,
          learned_at,
          skill_level,
          user:user_id (
            full_name
          )
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      
      return data as ProgressDetail;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!progress) {
    return <div>Progress not found</div>;
  }

  return <ProgressContent progress={progress} />;
};