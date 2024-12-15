import { Star, Trash2, Edit2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillLevel } from "./SkillLevelSelect";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

interface ProgressItemProps {
  progress: any;
  onDelete: (id: string) => void;
  onEdit: (progress: any) => void;
  onCommentClick: (progress: any) => void;
}

export const ProgressItem = ({ 
  progress, 
  onDelete, 
  onEdit, 
  onCommentClick 
}: ProgressItemProps) => {
  return (
    <div className="p-4 border rounded-lg bg-slate-50">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h4 className="font-medium text-slate-900">{progress.technique}</h4>
            <div className="flex gap-1">
              {["beginner", "intermediate", "advanced", "expert", "master"].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    index < ["beginner", "intermediate", "advanced", "expert", "master"].indexOf(progress.skill_level as SkillLevel) + 1
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-600">{progress.notes}</p>
          <p className="text-xs text-slate-500">
            {format(new Date(progress.created_at), 'yyyy年MM月dd日 HH:mm', { locale: ja })}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCommentClick(progress)}
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(progress)}
          >
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(progress.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {progress.video_url && (
        <div className="mt-4">
          <video
            controls
            className="w-full rounded"
            src={progress.video_url}
          >
            お使いのブラウザは動画の再生に対応していません。
          </video>
        </div>
      )}
    </div>
  );
};