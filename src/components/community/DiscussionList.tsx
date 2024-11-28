import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

export const DiscussionList = () => {
  const { data: discussions, isLoading } = useQuery({
    queryKey: ['discussions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profiles:profiles(username)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div className="text-center">読み込み中...</div>;
  }

  return (
    <div className="space-y-4">
      {discussions?.map((discussion: any) => (
        <Card key={discussion.id} className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{discussion.title}</h3>
            <p className="text-sm text-slate-500">
              投稿者: {discussion.profiles?.username || '匿名'}
            </p>
          </div>
          <p>{discussion.content}</p>
        </Card>
      ))}
    </div>
  );
};