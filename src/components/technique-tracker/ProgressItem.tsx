import { Trash2, Edit2, MessageSquare, CircleDot, CircleDashed, CircleDotDashed, CircleOff, Circle } from "lucide-react";
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
  const getSkillLevelIcons = (level: SkillLevel) => {
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

  return (
    <div className="p-4 border rounded-lg bg-slate-50">
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-slate-900 break-all">{progress.technique}</h4>
          <div className="flex items-center gap-1">
            {getSkillLevelIcons(progress.skill_level as SkillLevel)}
          </div>
          <p className="text-sm text-slate-600 break-all">{progress.notes}</p>
          <p className="text-xs text-slate-500">
            {format(new Date(progress.created_at), 'yyyy年MM月dd日 HH:mm', { locale: ja })}
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onCommentClick(progress)}
            className="px-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">コメント</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(progress)}
            className="px-2"
          >
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">編集</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(progress.id)}
            className="px-2"
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">削除</span>
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