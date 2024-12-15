import { CircleDot, CircleDashed, CircleDotDashed, CircleOff, Circle } from "lucide-react";

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
  const getIcon = (level: SkillLevel) => {
    switch (level) {
      case "beginner":
        return <CircleOff className="h-6 w-6" />;
      case "intermediate":
        return <CircleDashed className="h-6 w-6" />;
      case "advanced":
        return <CircleDotDashed className="h-6 w-6" />;
      case "expert":
        return <CircleDot className="h-6 w-6" />;
      case "master":
        return <Circle className="h-6 w-6 fill-current" />;
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        習熟度
      </label>
      <div className="flex gap-1">
        {SKILL_LEVELS.map((level, index) => (
          <button
            key={level}
            type="button"
            onClick={() => onSkillLevelChange(level)}
            className={`p-2 rounded-full transition-colors ${
              index <= SKILL_LEVELS.indexOf(skillLevel)
                ? "text-blue-500"
                : "text-gray-300"
            }`}
          >
            {getIcon(level)}
          </button>
        ))}
      </div>
      <div className="mt-1 text-sm text-slate-500">
        現在の習熟度: {
          {
            'beginner': '初心者',
            'intermediate': '中級者',
            'advanced': '上級者',
            'expert': 'エキスパート',
            'master': 'マスター'
          }[skillLevel]
        }
      </div>
    </div>
  );
};