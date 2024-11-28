import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface PostPreviewProps {
  title: string;
  content: string;
  tag?: string;
  visibility: string;
}

export const PostPreview = ({ title, content, tag, visibility }: PostPreviewProps) => {
  if (!title && !content) return null;

  return (
    <Card className="bg-white/50 backdrop-blur-sm transition-all duration-300">
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">プレビュー</span>
            <time className="text-sm text-gray-500">
              {format(new Date(), 'PPP', { locale: ja })}
            </time>
          </div>
          <h3 className="text-lg font-semibold">{title || "タイトル未入力"}</h3>
          <div className="prose prose-sm max-w-none">
            {content || "本文未入力"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};