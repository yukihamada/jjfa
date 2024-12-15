import { Star, Trash2, Edit2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SkillLevel } from "./SkillLevelSelect";

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
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-slate-900">{progress.technique}</h4>
          <p className="text-sm text-slate-600">{progress.notes}</p>
        </div>
        <div className="flex items-center gap-2">
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
          <div className="flex gap-2 ml-4">
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
      </div>
      {progress.video_url && (
        <div className="mt-2">
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