import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, BookOpen } from "lucide-react";
import { TechniqueForm } from "./technique/TechniqueForm";
import { TechniqueTable } from "./technique/TechniqueTable";

interface TechniqueDetail {
  id: string;
  technique_name: string;
  description: string;
  category: string;
}

export const TechniqueManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

        <TechniqueForm 
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </div>

      <TechniqueTable techniques={techniques || []} />
    </div>
  );
};