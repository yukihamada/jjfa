import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { CommunityGuidelines } from "./CommunityGuidelines";
import { DiscussionCard } from "./DiscussionCard";
import { DiscussionSearch } from "./DiscussionSearch";
import { DiscussionSort } from "./DiscussionSort";
import { NFTHoldersSection } from "./NFTHoldersSection";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const DiscussionList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const debouncedSearch = useDebounce(searchQuery, 300);

  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ['discussions', debouncedSearch, sortBy],
    queryFn: async () => {
      let query = supabase
        .from('discussions')
        .select(`
          *,
          profiles (username, avatar_url),
          likes (user_id),
          comments (id)
        `);

      if (debouncedSearch) {
        query = query.or(`title.ilike.%${debouncedSearch}%,content.ilike.%${debouncedSearch}%`);
      }

      switch (sortBy) {
        case 'popular':
          query = query.order('likes.length', { ascending: false });
          break;
        case 'comments':
          query = query.order('comments.length', { ascending: false });
          break;
        default:
          query = query.order('created_at', { ascending: false });
      }

      const { data, error } = await query;

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

  const adminDiscussions = discussions?.filter(d => d.visibility === 'admin') || [];
  const otherDiscussions = discussions?.filter(d => d.visibility !== 'admin') || [];

  return (
    <div className="space-y-6">
      <CommunityGuidelines />
      
      <div className="grid gap-4 md:grid-cols-[1fr_auto]">
        <DiscussionSearch onSearch={setSearchQuery} />
        <DiscussionSort onSort={setSortBy} />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">全て</TabsTrigger>
          <TabsTrigger value="admin">運営</TabsTrigger>
          <TabsTrigger value="nft">NFT限定</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {adminDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
          {otherDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
          {adminDiscussions.length === 0 && otherDiscussions.length === 0 && (
            <div className="text-center py-8 text-slate-600">
              投稿が見つかりませんでした。
            </div>
          )}
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
        <TabsContent value="nft" className="space-y-4">
          <NFTHoldersSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};