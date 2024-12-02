import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTagsQuery } from "./useTagsQuery";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CategorySelect = ({ value, onChange }: CategorySelectProps) => {
  const { data: tags, isLoading, error } = useTagsQuery();

  if (error) {
    // Show error toast only once when error occurs
    toast.error("カテゴリの読み込みに失敗しました。再度お試しください。", {
      icon: <AlertCircle className="h-5 w-5" />,
    });

    // Return disabled select with error state
    return (
      <Select disabled>
        <SelectTrigger className="border-red-500">
          <SelectValue placeholder="カテゴリを読み込めませんでした" />
        </SelectTrigger>
      </Select>
    );
  }

  // Group tags by category
  const videoTags = tags?.filter(tag => 
    tag.name.includes('動画')
  );
  const techniqueTags = tags?.filter(tag => 
    !tag.name.includes('動画') && 
    !tag.name.includes('から')
  );
  const flowTags = tags?.filter(tag => 
    tag.name.includes('から')
  );

  if (isLoading) {
    return (
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="読み込み中..." />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="カテゴリを選択" />
      </SelectTrigger>
      <SelectContent>
        {videoTags && videoTags.length > 0 && (
          <>
            <SelectItem value="" disabled>
              動画
            </SelectItem>
            {videoTags.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {tag.name}
              </SelectItem>
            ))}
          </>
        )}
        {techniqueTags && techniqueTags.length > 0 && (
          <>
            <SelectItem value="" disabled>
              技術
            </SelectItem>
            {techniqueTags.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {tag.name}
              </SelectItem>
            ))}
          </>
        )}
        {flowTags && flowTags.length > 0 && (
          <>
            <SelectItem value="" disabled>
              技のフロー
            </SelectItem>
            {flowTags.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {tag.name}
              </SelectItem>
            ))}
          </>
        )}
      </SelectContent>
    </Select>
  );
};