import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { DiscussionCard } from "./DiscussionCard";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

export const DiscussionList = () => {
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ['discussions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profile: profiles(*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching discussions:", error);
        throw error;
      }

      return data;
    }
  });

  if (error) {
    toast.error("データの取得中にエラーが発生しました。");
    return null;
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {discussions?.map((discussion) => (
        <DiscussionCard key={discussion.id} discussion={discussion} />
      ))}
    </div>
  );
};