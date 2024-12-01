import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useFighterFormData = () => {
  const [dojos, setDojos] = useState<any[]>([]);
  const [belts, setBelts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: dojosData, error: dojosError } = await supabase
          .from('dojos')
          .select('id, name')
          .order('name');
        
        if (dojosError) {
          console.error("Error fetching dojos:", dojosError);
          toast.error("道場データの取得に失敗しました");
          return;
        }
        if (dojosData) setDojos(dojosData);

        const { data: beltsData, error: beltsError } = await supabase
          .from('belts')
          .select('id, name, color')
          .order('belt_order');
        
        if (beltsError) {
          console.error("Error fetching belts:", beltsError);
          toast.error("帯データの取得に失敗しました");
          return;
        }
        if (beltsData) setBelts(beltsData);
      } catch (error) {
        console.error("Error in fetchData:", error);
        toast.error("データの取得中にエラーが発生しました");
      }
    };
    fetchData();
  }, []);

  return { dojos, belts };
};