import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Calendar, Heart, Megaphone, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { AttachmentPreview } from "./AttachmentPreview";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { DiscussionHeader } from "./DiscussionHeader";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionActions } from "./DiscussionActions";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const queryClient = useQueryClient();

  // Fetch comments separately to ensure they're always up to date
  const { data: comments } = useQuery({
    queryKey: ['discussion', discussion.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          profiles (username, avatar_url)
        `)
        .eq('discussion_id', discussion.id)
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  return (
    <Card className={`group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-l-4 ${
      discussion.tags?.some((tag: any) => tag.name === '運営') ? 'border-l-orange-500' : 'border-l-indigo-500'
    }`}>
      <CardContent className="p-6">
        <DiscussionHeader discussion={discussion} />
        <DiscussionContent discussion={discussion} />
        <DiscussionActions 
          discussion={discussion}
          showCommentForm={showCommentForm}
          onCommentClick={() => setShowCommentForm(!showCommentForm)}
        />

        {showCommentForm && (
          <div className="mt-6">
            <CommentForm
              discussionId={discussion.id}
              onCancel={() => setShowCommentForm(false)}
            />
          </div>
        )}

        {comments && comments.length > 0 && (
          <div className="mt-6">
            <CommentList
              comments={comments}
              discussionId={discussion.id}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};