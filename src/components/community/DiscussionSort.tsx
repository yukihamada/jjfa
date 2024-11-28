import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DiscussionSortProps {
  onSort: (value: string) => void;
}

export const DiscussionSort = ({ onSort }: DiscussionSortProps) => {
  return (
    <Select onValueChange={onSort} defaultValue="newest">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="並び替え" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">新着順</SelectItem>
        <SelectItem value="popular">人気順</SelectItem>
        <SelectItem value="comments">コメント数順</SelectItem>
      </SelectContent>
    </Select>
  );
};