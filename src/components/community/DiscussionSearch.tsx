import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface DiscussionSearchProps {
  onSearch: (query: string) => void;
}

export const DiscussionSearch = ({ onSearch }: DiscussionSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder="投稿を検索..."
        onChange={(e) => onSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};