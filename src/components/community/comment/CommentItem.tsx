import { format, isValid } from "date-fns";
import { ja } from "date-fns/locale";

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

  return (
    <div className="bg-white/50 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            {comment.profiles?.avatar_url ? (
              <img
                src={comment.profiles.avatar_url}
                alt={comment.profiles?.username || '匿名'}
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-200 to-purple-200" />
            )}
            <span className="font-medium text-sm">
              {comment.profiles?.username || '匿名'}
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