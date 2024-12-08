import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { DiscussionActions } from "./DiscussionActions";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionHeader } from "./DiscussionHeader";
import { useState } from "react";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleCommentClick = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300">
      <Link 
        to={`/community/discussion/${discussion.id}`} 
        className="block space-y-4"
      >
        <DiscussionHeader discussion={discussion} />
        <DiscussionContent discussion={discussion} />
        
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1 hover:text-primary transition-colors">
            <ThumbsUp className="w-4 h-4" />
            <span>{discussion.likes?.length || 0}</span>
          </div>
          <div className="flex items-center gap-1 hover:text-primary transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span>{discussion.comments?.length || 0}</span>
          </div>
          <div className="flex gap-2">
            {discussion.tags?.map((tag: any) => (
              <Badge 
                key={tag.id} 
                variant="secondary"
                className="bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
      <DiscussionActions 
        discussion={discussion} 
        showCommentForm={showCommentForm}
        onCommentClick={handleCommentClick}
      />
    </div>
  );
};