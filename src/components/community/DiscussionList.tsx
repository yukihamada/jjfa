import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageSquare, ThumbsUp, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

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
      {discussions?.map((discussion: any) => (
        <Card key={discussion.id} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-semibold text-slate-900">{discussion.title}</h3>
                  {discussion.discussion_tags?.map(({ tags }: any) => (
                    <Badge key={tags.id} variant="secondary" className="text-xs">
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
                      <div className="w-6 h-6 rounded-full bg-slate-200 mr-2" />
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
            <p className="mt-4 text-slate-600 whitespace-pre-wrap">{discussion.content}</p>
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
      ))}
    </div>
  );
};