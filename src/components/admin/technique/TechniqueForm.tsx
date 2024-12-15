import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
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

interface TechniqueFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TechniqueForm = ({ isOpen, onOpenChange }: TechniqueFormProps) => {
  const [newTechnique, setNewTechnique] = useState({
    technique_name: "",
    description: "",
    category: "",
  });
  const queryClient = useQueryClient();

  const addTechniqueMutation = useMutation({
    mutationFn: async (technique: Omit<TechniqueDetail, "id">) => {
      const { error } = await supabase
        .from("technique_details")
        .insert(technique);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technique-details"] });
      toast.success("技を追加しました");
      onOpenChange(false);
      setNewTechnique({ technique_name: "", description: "", category: "" });
    },
    onError: (error) => {
      console.error("Error adding technique:", error);
      toast.error("技の追加に失敗しました");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTechniqueMutation.mutate(newTechnique);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">新しい技を追加</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[95vw] max-w-[95vw] sm:w-full">
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
  );
};