import { CircleOff, CircleDashed, CircleDotDashed, CircleDot, Circle } from "lucide-react";

interface SkillLevelIconsProps {
  level: string;
}

export const SkillLevelIcons = ({ level }: SkillLevelIconsProps) => {
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