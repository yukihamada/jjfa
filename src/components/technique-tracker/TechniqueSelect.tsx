import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TechniqueSelectProps {
  categories: string[] | undefined;
  techniques: any[] | undefined;
  selectedCategory: string | null;
  selectedTechnique: string;
  onCategoryChange: (value: string) => void;
  onTechniqueChange: (value: string) => void;
}

export const TechniqueSelect = ({
  categories,
  techniques,
  selectedCategory,
  selectedTechnique,
  onCategoryChange,
  onTechniqueChange,
}: TechniqueSelectProps) => {
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