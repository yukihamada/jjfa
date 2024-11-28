import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TagFilterProps {
  selectedTags: string[];
  onTagSelect: (tagId: string) => void;
}

export const TagFilter = ({ selectedTags, onTagSelect }: TagFilterProps) => {
  const { data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name');
      if (error) throw error;
      return data;
    },
  });

  return (
    <ScrollArea className="w-full">
      <div className="flex flex-wrap gap-2 p-1">
        {tags?.map((tag) => (
          <Badge
            key={tag.id}
            variant={selectedTags.includes(tag.id) ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/90"
            onClick={() => onTagSelect(tag.id)}
          >
            {tag.name}
          </Badge>
        ))}
      </div>
    </ScrollArea>
  );
};