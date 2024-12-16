import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ja } from "date-fns/locale";

interface TimeAgoLinkProps {
  date: string;
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
      className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
    >
      {timeAgo}
    </Link>
  );
};