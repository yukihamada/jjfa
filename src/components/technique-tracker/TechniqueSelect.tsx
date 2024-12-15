import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TechniqueSelectProps {
  selectedCategory: string | null;
  selectedTechnique: string;
  onCategoryChange: (value: string) => void;
  onTechniqueChange: (value: string) => void;
}

export const TechniqueSelect = ({
  selectedCategory,
  selectedTechnique,
  onCategoryChange,
  onTechniqueChange,
}: TechniqueSelectProps) => {
  const { data: categories } = useQuery({
    queryKey: ["techniqueCategories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("technique_details")
        .select("category")
        .order('category');
      
      if (error) throw error;
      
      const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
      return uniqueCategories;
    }
  });

  const { data: techniques } = useQuery({
    queryKey: ["techniques", selectedCategory],
    queryFn: async () => {
      if (!selectedCategory) return [];
      const { data, error } = await supabase
        .from("technique_details")
        .select("*")
        .eq("category", selectedCategory)
        .order('technique_name');
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedCategory
  });

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          技術カテゴリー
        </label>
        <Select
          value={selectedCategory || ""}
          onValueChange={onCategoryChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="カテゴリーを選択" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          技術
        </label>
        <Select
          value={selectedTechnique}
          onValueChange={onTechniqueChange}
          disabled={!selectedCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="技術を選択" />
          </SelectTrigger>
          <SelectContent>
            {techniques?.map((technique) => (
              <SelectItem key={technique.id} value={technique.technique_name}>
                {technique.technique_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};