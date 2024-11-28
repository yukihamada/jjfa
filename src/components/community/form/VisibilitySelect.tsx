import { Globe, Users, GraduationCap, Lock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const visibilityOptions = [
  { value: 'public', label: '全体に公開', icon: Globe },
  { value: 'dojo', label: '道場内のみ', icon: Users },
  { value: 'instructor', label: '先生のみ', icon: GraduationCap },
  { value: 'private', label: '自分のみ', icon: Lock },
];

interface VisibilitySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const VisibilitySelect = ({ value, onChange }: VisibilitySelectProps) => (
  <Select value={value} onValueChange={onChange}>
    <SelectTrigger>
      <SelectValue placeholder="公開範囲を選択" />
    </SelectTrigger>
    <SelectContent>
      {visibilityOptions.map((option) => {
        const Icon = option.icon;
        return (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              <Icon className="w-4 h-4" />
              {option.label}
            </div>
          </SelectItem>
        );
      })}
    </SelectContent>
  </Select>
);