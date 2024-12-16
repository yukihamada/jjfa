import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { ProgressComments } from "@/components/technique-tracker/ProgressComments";
import { ProgressContent } from "@/components/technique-tracker/ProgressContent";

const ProgressDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const { data, error } = await supabase
          .from('learning_progress')
          .select(`
            *,
            user:user_id (
              profile:profiles (
                full_name,
                username
              )
            )
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setProgress(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error || !progress) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error: {error || 'Progress not found'}</p>
      </div>
    );
  }

  const userName = progress.user?.profile?.full_name || progress.user?.profile?.username || 'Unknown User';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          {userName}の{progress.technique}の上達記録
        </h1>
        <ProgressContent progress={progress} />
        <ProgressComments progressId={progress.id} />
      </div>
    </div>
  );
};

export default ProgressDetail;