import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TimeAgoLink } from "./TimeAgoLink";

interface DiscussionHeaderProps {
  discussion: any;
}

export const DiscussionHeader = ({ discussion }: DiscussionHeaderProps) => {
  const profile = discussion.profile || {};

  return (
    <div className="flex items-start gap-3">
      <Link to={`/profile/${profile.id}`} className="shrink-0">
        <Avatar className="h-10 w-10">
          <AvatarImage src={profile.avatar_url} alt={profile.username || "ユーザー"} />
          <AvatarFallback>{(profile.username || "?")?.[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <Link 
            to={`/profile/${profile.id}`}
            className="font-medium hover:underline"
          >
            {profile.username || "匿名ユーザー"}
          </Link>
          <span className="text-sm text-muted-foreground">・</span>
          <TimeAgoLink date={discussion.created_at} discussionId={discussion.id} />
        </div>
      </div>
    </div>
  );
};