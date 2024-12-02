import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { DiscussionCard } from "@/components/community/DiscussionCard";

const DiscussionDetail = () => {
  const { id } = useParams();

  const { data: discussion, isLoading, error } = useQuery({
    queryKey: ['discussion', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profiles (username, avatar_url),
          likes (user_id),
          comments (id),
          tags (
            id,
            name
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          投稿の取得中にエラーが発生しました。({error.message})
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

  if (!discussion) {
    return (
      <Alert className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          投稿が見つかりませんでした。
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <DiscussionCard discussion={discussion} />
      </div>
    </div>
  );
};

export default DiscussionDetail;