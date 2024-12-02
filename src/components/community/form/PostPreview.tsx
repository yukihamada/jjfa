import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTagsQuery } from "./useTagsQuery";

interface PostPreviewProps {
  title: string;
  content: string;
  tag: string;
  visibility: string;
}

export const PostPreview = ({ title, content, tag, visibility }: PostPreviewProps) => {
  const { data: tags, isLoading } = useTagsQuery();
  const selectedTag = tags?.find(t => t.id === tag);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>プレビュー</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-2">
          {!isLoading && selectedTag && (
            <Badge variant="secondary">
              {selectedTag.name}
            </Badge>
          )}
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