import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { DiscussionHeader } from "@/components/community/DiscussionHeader";
import { DiscussionContent } from "@/components/community/DiscussionContent";
import { DiscussionActions } from "@/components/community/DiscussionActions";
import { CommentList } from "@/components/community/CommentList";
import { CommentForm } from "@/components/community/CommentForm";
import { useState } from "react";

const DiscussionDetail = () => {
  const { id } = useParams();
  const [showCommentForm, setShowCommentForm] = useState(false);

  const { data: discussion, isLoading, error } = useQuery({
    queryKey: ['discussion', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('discussions')
        .select(`
          *,
          profile:profiles (
            id,
            username,
            avatar_url
          ),
          likes (user_id),
          comments (
            id,
            content,
            created_at,
            user_id,
            profiles (
              username,
              avatar_url
            )
          )
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error("Error fetching discussion:", error);
        throw error;
      }
      return data;
    },
  });

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          投稿の取得中にエラーが発生しました。
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
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-6 shadow-sm">
          <DiscussionHeader discussion={discussion} />
          <DiscussionContent discussion={discussion} />
          <DiscussionActions 
            discussion={discussion}
            showCommentForm={showCommentForm}
            onCommentClick={() => setShowCommentForm(!showCommentForm)}
          />
        </div>

        {showCommentForm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-6 shadow-sm">
            <CommentForm 
              discussionId={discussion.id} 
              onCancel={() => setShowCommentForm(false)}
            />
          </div>
        )}

        {discussion.comments && discussion.comments.length > 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">コメント</h2>
            <CommentList comments={discussion.comments} discussionId={discussion.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscussionDetail;