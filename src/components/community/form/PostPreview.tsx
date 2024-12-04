import { Card } from "@/components/ui/card";

export interface PostPreviewProps {
  title: string;
  content: string;
  visibility: string;
}

export const PostPreview = ({ title, content, visibility }: PostPreviewProps) => {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">公開範囲: {visibility}</p>
        </div>
        <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
      </div>
    </Card>
  );
};