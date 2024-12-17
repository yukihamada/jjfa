import { Link } from "react-router-dom";
import { formatDistanceToNow, isValid } from "date-fns";
import { ja } from "date-fns/locale";

interface TimeAgoLinkProps {
  date: string | Date;
  discussionId: string;
}

export const TimeAgoLink = ({ date, discussionId }: TimeAgoLinkProps) => {
  const parsedDate = new Date(date);
  
  const timeAgo = isValid(parsedDate) 
    ? formatDistanceToNow(parsedDate, {
        addSuffix: true,
        locale: ja,
      })
    : "日付不明";

  return (
    <Link 
      to={`/community/discussion/${discussionId}`}
      className="text-sm text-muted-foreground hover:underline"
    >
      {timeAgo}
    </Link>
  );
};