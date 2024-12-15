import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface TechniqueDetail {
  id: string;
  technique_name: string;
  description: string;
  category: string;
}

interface TechniqueTableProps {
  techniques: TechniqueDetail[];
}

export const TechniqueTable = ({ techniques }: TechniqueTableProps) => {
  const queryClient = useQueryClient();

  const deleteTechniqueMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("technique_details")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technique-details"] });
      toast.success("技を削除しました");
    },
    onError: (error) => {
      console.error("Error deleting technique:", error);
      toast.error("技の削除に失敗しました");
    },
  });

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap min-w-[100px]">カテゴリー</TableHead>
            <TableHead className="whitespace-nowrap min-w-[100px]">技名</TableHead>
            <TableHead className="min-w-[200px]">説明</TableHead>
            <TableHead className="w-[100px]">アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {techniques?.map((technique) => (
            <TableRow key={technique.id}>
              <TableCell className="font-medium">{technique.category}</TableCell>
              <TableCell>{technique.technique_name}</TableCell>
              <TableCell className="break-words">{technique.description}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteTechniqueMutation.mutate(technique.id)}
                  className="whitespace-nowrap"
                >
                  削除
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};