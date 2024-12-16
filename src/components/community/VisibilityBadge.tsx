import { Globe, Users, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VisibilityBadgeProps {
  visibility: string;
}

export const VisibilityBadge = ({ visibility }: VisibilityBadgeProps) => {
  const getVisibilityIcon = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return <Globe className="h-3 w-3" />;
      case 'dojo':
        return <Users className="h-3 w-3" />;
      case 'private':
        return <Lock className="h-3 w-3" />;
      default:
        return <Globe className="h-3 w-3" />;
    }
  };

  const getVisibilityText = (visibility: string) => {
    switch (visibility) {
      case 'public':
        return '全体に公開';
      case 'dojo':
        return '道場のみ';
      case 'private':
        return '限定公開';
      default:
        return '全体に公開';
    }
  };

  return (
    <Badge variant="secondary" className="ml-2 flex items-center gap-1">
      {getVisibilityIcon(visibility)}
      <span className="text-xs">{getVisibilityText(visibility)}</span>
    </Badge>
  );
};