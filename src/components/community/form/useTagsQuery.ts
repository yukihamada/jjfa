import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useTagsQuery = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name');
      
      if (error) {
        console.error('Failed to fetch tags:', error);
        throw new Error('タグの取得に失敗しました');
      }
      
      if (!data) {
        throw new Error('タグが見つかりませんでした');
      }
      
      return data;
    },
    retry: 2, // Retry failed requests up to 2 times
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
  });
};