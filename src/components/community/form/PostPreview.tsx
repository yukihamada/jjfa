import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostPreviewProps {
  title: string;
  content: string;
  visibility: string;
}

export const PostPreview = ({ title, content, visibility }: PostPreviewProps) => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>プレビュー</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2">
          <Badge variant="outline">
            {visibility === 'public' ? '公開' : 
             visibility === 'private' ? '非公開' :
             visibility === 'dojo' ? '道場のみ' : 
             '指導者のみ'}
          </Badge>
        </div>
        <p className="whitespace-pre-wrap">{content}</p>
      </CardContent>
    </Card>
  );
};