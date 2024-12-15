import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { ProgressContent } from "@/components/technique-tracker/ProgressContent";

type ProgressDetail = {
  id: string;
  technique: string;
  notes: string;
  learned_at: string;
  skill_level: string;
  user_id: string;
  description: string | null;
  video_url: string | null;
  created_at: string;
  user: {
    full_name: string | null;
  } | null;
};

const ProgressDetail = () => {
  const { id } = useParams();

  const { data: progress, isLoading, error } = useQuery({
    queryKey: ['learningProgress', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('learning_progress')
        .select(`
          *,
          user:profiles (
            full_name
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as ProgressDetail;
    },
  });

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          進捗の取得中にエラーが発生しました。({error.message})
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <Skeleton className="h-[200px] w-full" />
      </div>
    );
  }

  if (!progress) {
    return (
      <Alert className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          進捗が見つかりませんでした。
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <ProgressContent progress={progress} />
      </div>
    </div>
  );
};

export default ProgressDetail;