import { Star } from "lucide-react";
import { SkillLevel } from "./SkillLevelSelect";

interface ProgressListProps {
  userProgress: any[] | undefined;
}

export const ProgressList = ({ userProgress }: ProgressListProps) => {
  if (!userProgress || userProgress.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">最近の進捗</h3>
      <div className="space-y-4">
        {userProgress.map((progress) => (
          <div
            key={progress.id}
            className="p-4 border rounded-lg bg-slate-50"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-slate-900">
                  {progress.technique}
                </h4>
                <p className="text-sm text-slate-600">{progress.notes}</p>
              </div>
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
        ))}
      </div>
    </div>
  );
};