import { format, isValid } from "date-fns";
import { ja } from "date-fns/locale";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentItemProps {
  comment: any;
  isEditing: boolean;
  children: React.ReactNode;
}

export const CommentItem = ({ comment, isEditing, children }: CommentItemProps) => {
  const parsedDate = new Date(comment.created_at);
  const formattedDate = isValid(parsedDate)
    ? format(parsedDate, 'PPP', { locale: ja })
    : "日付不明";

  const profile = comment.profiles;
  const username = profile?.username || '匿名ユーザー';
  const avatarUrl = profile?.avatar_url;
  const initial = username ? username[0].toUpperCase() : '?';

  return (
    <div className="bg-white/50 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-1 w-full">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{initial}</AvatarFallback>
            </Avatar>
            <span className="font-medium text-sm">
              {username}
            </span>
            <span className="text-sm text-gray-500">
              {formattedDate}
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};