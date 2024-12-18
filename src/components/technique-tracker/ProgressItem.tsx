import { Trash2, Edit2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillLevel } from "./SkillLevelSelect";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { SkillLevelIcons } from "./SkillLevelIcons";

interface ProgressItemProps {
  progress: {
    id: string;
    technique: string;
    notes?: string;
    learned_at: string;
    skill_level: string;
    video_url?: string | null;
  };
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onCommentClick: (id: string) => void;
}

export const ProgressItem = ({ 
  progress, 
  onDelete, 
  onEdit, 
  onCommentClick 
}: ProgressItemProps) => {
  return (
    <div className="space-y-4 py-4 border-b last:border-b-0">
      <Link 
        to={`/progress/${progress.id}`}
        className="block space-y-2 hover:opacity-75 transition-opacity"
      >
        <div className="flex items-center gap-1">
          <SkillLevelIcons level={progress.skill_level as SkillLevel} />
        </div>
        <h4 className="font-medium text-slate-900 break-all">{progress.technique}</h4>
        <p className="text-sm text-slate-600 break-all">{progress.notes}</p>
        {progress.video_url && (
          <video 
            src={progress.video_url} 
            controls 
            className="w-full rounded-lg mt-2"
            preload="metadata"
          >
            <source src={progress.video_url} type="video/mp4" />
            お使いのブラウザは動画の再生に対応していません。
          </video>
        )}
        <p className="text-xs text-slate-500">
          {format(new Date(progress.learned_at), 'yyyy年MM月dd日')}に学習
        </p>
      </Link>
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCommentClick(progress.id)}
        >
          <MessageSquare className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(progress.id)}
        >
          <Edit2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(progress.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};