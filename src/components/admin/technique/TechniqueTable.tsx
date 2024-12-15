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
import { Pencil, Trash2 } from "lucide-react";
import type { TechniqueDetail } from "../TechniqueManagement";

interface TechniqueTableProps {
  techniques: TechniqueDetail[];
  onEdit: (technique: TechniqueDetail) => void;
  onEditClick: () => void;
}

export const TechniqueTable = ({ techniques, onEdit, onEditClick }: TechniqueTableProps) => {
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

  const handleEdit = (technique: TechniqueDetail) => {
    onEdit(technique);
    onEditClick();
  };

  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="whitespace-nowrap w-[120px] p-2 sm:p-4">カテゴリー</TableHead>
            <TableHead className="whitespace-nowrap w-[120px] p-2 sm:p-4">技名</TableHead>
            <TableHead className="min-w-[200px] p-2 sm:p-4 hidden sm:table-cell">説明</TableHead>
            <TableHead className="w-[100px] p-2 sm:p-4">アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {techniques?.map((technique) => (
            <TableRow key={technique.id}>
              <TableCell className="font-medium p-2 sm:p-4">{technique.category}</TableCell>
              <TableCell className="p-2 sm:p-4">{technique.technique_name}</TableCell>
              <TableCell className="break-words p-2 sm:p-4 hidden sm:table-cell">
                {technique.description}
              </TableCell>
              <TableCell className="p-2 sm:p-4">
                <div className="flex gap-2 flex-col sm:flex-row">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(technique)}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">編集</span>
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteTechniqueMutation.mutate(technique.id)}
                    className="whitespace-nowrap w-full sm:w-auto"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">削除</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};