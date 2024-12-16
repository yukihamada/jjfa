import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

interface TimeAgoLinkProps {
  date: string | Date;
  discussionId: string;
}

export const TimeAgoLink = ({ date, discussionId }: TimeAgoLinkProps) => {
  const timeAgo = formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ja,
  });

  return (
    <Link 
      to={`/community/discussion/${discussionId}`}
      className="text-sm text-muted-foreground hover:underline"
    >
      {timeAgo}
    </Link>
  );
};