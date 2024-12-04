import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { DiscussionActions } from "./DiscussionActions";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionHeader } from "./DiscussionHeader";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/community/discussion/${discussion.id}`} className="block">
        <DiscussionHeader discussion={discussion} />
        <DiscussionContent discussion={discussion} />
        
        <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{discussion.likes?.length || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            <span>{discussion.comments?.length || 0}</span>
          </div>
          {discussion.tags?.map((tag: any) => (
            <Badge key={tag.id} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      </Link>
      <DiscussionActions discussion={discussion} />
    </div>
  );
};