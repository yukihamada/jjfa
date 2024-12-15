import { Star } from "lucide-react";

const SKILL_LEVELS = ["beginner", "intermediate", "advanced", "expert", "master"] as const;
export type SkillLevel = typeof SKILL_LEVELS[number];

interface SkillLevelSelectProps {
  skillLevel: SkillLevel;
  onSkillLevelChange: (level: SkillLevel) => void;
}

export const SkillLevelSelect = ({
  skillLevel,
  onSkillLevelChange,
}: SkillLevelSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        習熟度
      </label>
      <div className="flex gap-1">
        {SKILL_LEVELS.map((level, index) => (
          <button
            key={level}
            onClick={() => onSkillLevelChange(level)}
            className={`p-2 rounded-full transition-colors ${
              index < SKILL_LEVELS.indexOf(skillLevel) + 1
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          >
            <Star className="h-6 w-6 fill-current" />
          </button>
        ))}
      </div>
    </div>
  );
};