import { useState, useEffect } from "react";
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
import type { TechniqueDetail } from "../TechniqueManagement";

interface TechniqueFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  editingTechnique?: TechniqueDetail | null;
  onEditComplete?: () => void;
}

export const TechniqueForm = ({ 
  isOpen, 
  onOpenChange, 
  editingTechnique,
  onEditComplete 
}: TechniqueFormProps) => {
  const [technique, setTechnique] = useState({
    technique_name: "",
    description: "",
    category: "",
  });
  
  const queryClient = useQueryClient();

  useEffect(() => {
    if (editingTechnique) {
      setTechnique({
        technique_name: editingTechnique.technique_name,
        description: editingTechnique.description,
        category: editingTechnique.category,
      });
    } else {
      setTechnique({
        technique_name: "",
        description: "",
        category: "",
      });
    }
  }, [editingTechnique]);

  const mutation = useMutation({
    mutationFn: async (technique: Omit<TechniqueDetail, "id">) => {
      if (editingTechnique) {
        const { error } = await supabase
          .from("technique_details")
          .update(technique)
          .eq("id", editingTechnique.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("technique_details")
          .insert(technique);

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["technique-details"] });
      toast.success(editingTechnique ? "技を更新しました" : "技を追加しました");
      onOpenChange(false);
      setTechnique({ technique_name: "", description: "", category: "" });
      if (onEditComplete) onEditComplete();
    },
    onError: (error) => {
      console.error("Error saving technique:", error);
      toast.error(editingTechnique ? "技の更新に失敗しました" : "技の追加に失敗しました");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(technique);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">新しい技を追加</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[95vw] max-w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle>{editingTechnique ? "技を編集" : "新しい技を追加"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              カテゴリー
            </label>
            <Input
              value={technique.category}
              onChange={(e) =>
                setTechnique({ ...technique, category: e.target.value })
              }
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">技名</label>
            <Input
              value={technique.technique_name}
              onChange={(e) =>
                setTechnique({
                  ...technique,
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
              value={technique.description}
              onChange={(e) =>
                setTechnique({
                  ...technique,
                  description: e.target.value,
                })
              }
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            {editingTechnique ? "更新" : "追加"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};