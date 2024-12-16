import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { ProgressComments } from "@/components/technique-tracker/ProgressComments";
import { ProgressContent } from "@/components/technique-tracker/ProgressContent";
import { Skeleton } from "@/components/ui/skeleton";

const ProgressDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: progress, isLoading } = useQuery({
    queryKey: ['progress', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('learning_progress')
        .select(`
          id,
          technique,
          description,
          video_url,
          notes,
          learned_at,
          skill_level,
          profiles!learning_progress_user_id_fkey (
            full_name
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  if (!progress) {
    return <div>Progress not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {progress.technique}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            <span>By {progress.profiles?.full_name || 'Anonymous'}</span>
            <span className="mx-2">•</span>
            <span>
              {format(new Date(progress.learned_at), 'PPP', { locale: ja })}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <ProgressContent progress={progress} />
          <ProgressComments progressId={progress.id} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressDetail;