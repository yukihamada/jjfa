import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TechniqueDetail {
  id: string;
  technique_name: string;
  description: string;
  category: string;
}

export const TechniqueManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTechnique, setNewTechnique] = useState({
    technique_name: "",
    description: "",
    category: "",
  });
  const queryClient = useQueryClient();

  const { data: techniques, isLoading } = useQuery({
    queryKey: ["technique-details"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("technique_details")
        .select("*")
        .order("category", { ascending: true });

      if (error) throw error;
      return data as TechniqueDetail[];
    },
  });

  const addTechniqueMutation = useMutation({
    mutationFn: async (technique: Omit<TechniqueDetail, "id">) => {
      const { error } = await supabase
        .from("technique_details")
        .insert([technique]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technique-details"] });
      toast.success("技を追加しました");
      setIsDialogOpen(false);
      setNewTechnique({ technique_name: "", description: "", category: "" });
    },
    onError: (error) => {
      console.error("Error adding technique:", error);
      toast.error("技の追加に失敗しました");
    },
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTechniqueMutation.mutate(newTechnique);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <h2 className="text-xl font-semibold">技の管理</h2>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full sm:w-auto">新しい技を追加</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>新しい技を追加</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  カテゴリー
                </label>
                <Input
                  value={newTechnique.category}
                  onChange={(e) =>
                    setNewTechnique({ ...newTechnique, category: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">技名</label>
                <Input
                  value={newTechnique.technique_name}
                  onChange={(e) =>
                    setNewTechnique({
                      ...newTechnique,
                      technique_name: e.target.value,
                    })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">説明</label>
                <Input
                  value={newTechnique.description}
                  onChange={(e) =>
                    setNewTechnique({
                      ...newTechnique,
                      description: e.target.value,
                    })
                  }
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                追加
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

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
    </div>
  );
};