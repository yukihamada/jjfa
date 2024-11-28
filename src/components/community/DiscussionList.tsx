import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, ThumbsUp, Calendar, Heart } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

const CommunityGuidelines = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6 border border-indigo-100">
    <h2 className="text-lg font-semibold text-indigo-900 mb-3 flex items-center">
      <Heart className="w-5 h-5 mr-2 text-pink-500" />
      コミュニティガイドライン
    </h2>
    <ul className="text-sm text-indigo-800 space-y-3">
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>失敗や困難な経験も大切な学びです。安心して共有できる場所を目指しています</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>質問は成長のチャンス。どんな質問でも歓迎します</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>お互いの経験から学び、共に成長していきましょう</span>
      </li>
      <li className="flex items-start">
        <span className="text-indigo-400 mr-2">•</span>
        <span>相手の気持ちを考え、思いやりのある言葉を心がけましょう</span>
      </li>
    </ul>
  </div>
);

const DiscussionCard = ({ discussion }: { discussion: any }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow border-l-4 border-l-indigo-500">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-semibold text-slate-900">{discussion.title}</h3>
              {discussion.discussion_tags?.map(({ tags }: any) => (
                <Badge key={tags.id} variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                  {tags.name}
                </Badge>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="flex items-center">
                {discussion.profiles?.avatar_url ? (
                  <img
                    src={discussion.profiles.avatar_url}
                    alt={discussion.profiles?.username || '匿名'}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200 mr-2" />
                )}
                <span>{discussion.profiles?.username || '匿名'}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <time dateTime={discussion.created_at}>
                  {format(new Date(discussion.created_at), 'PPP', { locale: ja })}
                </time>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-slate-600 whitespace-pre-wrap leading-relaxed">{discussion.content}</p>
        <div className="mt-6 flex items-center space-x-4 text-sm text-slate-500">
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            <span>{discussion.likes?.length || 0}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{discussion.comments?.length || 0}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const DiscussionList = () => {
  const { data: discussions, isLoading } = useQuery({
    queryKey: ['discussions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profiles:profiles(username, avatar_url),
          likes:likes(user_id),
          comments:comments(id),
          discussion_tags!discussion_tags(
            tags:tags(*)
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <CommunityGuidelines />
      {discussions?.map((discussion: any) => (
        <DiscussionCard key={discussion.id} discussion={discussion} />
      ))}
    </div>
  );
};