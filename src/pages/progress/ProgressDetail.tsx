import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { CircleOff, CircleDashed, CircleDotDashed, CircleDot, Circle } from "lucide-react";
import { ProgressComments } from "@/components/technique-tracker/ProgressComments";

type ProgressDetail = {
  id: string;
  technique: string;
  notes: string;
  learned_at: string;
  skill_level: string;
  user: {
    full_name: string | null;
    username: string | null;
  };
};

const ProgressDetail = () => {
  const { id } = useParams();

  const { data: progress, isLoading, error } = useQuery({
    queryKey: ['learningProgress', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('learning_progress')
        .select(`
          *,
          user:user_id (
            full_name,
            username
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as ProgressDetail;
    },
  });

  const getSkillLevelIcons = (level: string) => {
    const levels = ["beginner", "intermediate", "advanced", "expert", "master"];
    const currentIndex = levels.indexOf(level);
    
    return (
      <div className="flex items-center gap-1">
        {levels.map((_, index) => {
          let Icon = CircleOff;
          if (index <= currentIndex) {
            switch(index) {
              case 0:
                Icon = CircleOff;
                break;
              case 1:
                Icon = CircleDashed;
                break;
              case 2:
                Icon = CircleDotDashed;
                break;
              case 3:
                Icon = CircleDot;
                break;
              case 4:
                Icon = Circle;
                break;
            }
          }
          return (
            <Icon
              key={index}
              className={`h-4 w-4 ${
                index <= currentIndex
                  ? "text-blue-500"
                  : "text-gray-300"
              } ${index === currentIndex && index === 4 ? "fill-current" : ""}`}
            />
          );
        })}
      </div>
    );
  };

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          進捗の取得中にエラーが発生しました。({error.message})
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <Skeleton className="h-[200px] w-full" />
      </div>
    );
  }

  if (!progress) {
    return (
      <Alert className="max-w-4xl mx-auto mt-8">
        <AlertDescription>
          進捗が見つかりませんでした。
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-1">
              {getSkillLevelIcons(progress.skill_level)}
            </div>
            <h1 className="text-2xl font-bold text-slate-900">{progress.technique}</h1>
            <p className="text-slate-600 whitespace-pre-wrap">{progress.notes}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>{progress.user?.full_name || "ユーザー"}</span>
              <span>•</span>
              <span>{format(new Date(progress.learned_at), 'yyyy年MM月dd日')}</span>
            </div>
          </div>
          <div className="pt-6 border-t">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">コメント</h2>
            <ProgressComments progressId={progress.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDetail;