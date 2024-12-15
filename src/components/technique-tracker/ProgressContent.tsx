import { format } from "date-fns";
import { SkillLevelIcons } from "./SkillLevelIcons";
import { ProgressComments } from "./ProgressComments";

interface ProgressContentProps {
  progress: {
    id: string;
    technique: string;
    notes: string;
    learned_at: string;
    skill_level: string;
    user: {
      full_name: string | null;
    } | null;
  };
}

export const ProgressContent = ({ progress }: ProgressContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-1">
          <SkillLevelIcons level={progress.skill_level} />
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
  );
};