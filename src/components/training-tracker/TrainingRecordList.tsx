import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";

export const TrainingRecordList = () => {
  const { data: records, isLoading } = useQuery({
    queryKey: ["trainingRecords"],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("training_records")
        .select("*")
        .eq("user_id", user.id)
        .order("training_date", { ascending: false })
        .limit(5);

      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  const getIntensityText = (intensity: string) => {
    const map: Record<string, string> = {
      light: "軽め",
      moderate: "普通",
      hard: "きつめ",
      very_hard: "非常にきつい"
    };
    return map[intensity] || intensity;
  };

  const getTrainingTypeText = (type: string) => {
    const map: Record<string, string> = {
      sparring: "スパーリング",
      drilling: "ドリル",
      conditioning: "コンディショニング",
      technique: "技術練習"
    };
    return map[type] || type;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">最近の記録</h3>
      <div className="space-y-2">
        {records?.map((record) => (
          <div
            key={record.id}
            className="border rounded-lg p-3 space-y-2 bg-white shadow-sm"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{getTrainingTypeText(record.training_type)}</p>
                <p className="text-sm text-gray-600">
                  {format(new Date(record.training_date), "yyyy/MM/dd")} - {record.duration}回
                </p>
              </div>
              {record.intensity && (
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {getIntensityText(record.intensity)}
                </span>
              )}
            </div>
            {record.notes && (
              <p className="text-sm text-gray-600">{record.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};