import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { CommunityGuidelines } from "./CommunityGuidelines";
import { DiscussionCard } from "./DiscussionCard";

export const DiscussionList = () => {
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ['discussions'],
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
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      return data;
    },
  });

  if (error) {
    return (
      <Alert variant="destructive" className="mb-4">
        <AlertDescription>
          データの取得中にエラーが発生しました。({error.message})
          <br />
          ページを更新するか、しばらく経ってから再度お試しください。
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border">
            <div className="space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!discussions || discussions.length === 0) {
    return (
      <div className="text-center py-8 text-slate-600">
        まだ投稿がありません。最初の投稿を作成してみましょう！
      </div>
    );
  }

  const adminDiscussions = discussions.filter(d => d.tags?.some((tag: any) => tag.name === '運営'));
  const otherDiscussions = discussions.filter(d => !d.tags?.some((tag: any) => tag.name === '運営'));

  return (
    <div className="space-y-4">
      <CommunityGuidelines />
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all">すべての投稿</TabsTrigger>
          <TabsTrigger value="admin">運営からのお知らせ</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {adminDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
          {otherDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
        </TabsContent>
        <TabsContent value="admin" className="space-y-4">
          {adminDiscussions.length > 0 ? (
            adminDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))
          ) : (
            <div className="text-center py-8 text-slate-600">
              運営からのお知らせはまだありません。
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};