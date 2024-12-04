import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface Tag {
  id: string;
  name: string;
}

export const useTagsQuery = () => {
  return useQuery({
    queryKey: ['tags'],
    queryFn: async (): Promise<Tag[]> => {
      const { data, error } = await supabase
        .from('tags')
        .select('id, name')
        .order('name');
      
      if (error) {
        console.error('Failed to fetch tags:', error);
        throw new Error('タグの取得に失敗しました');
      }
      
      if (!data) {
        return [];
      }
      
      return data;
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
  });
};