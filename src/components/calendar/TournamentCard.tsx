import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TournamentCardProps {
  tournament: {
    organization: string;
    name: string;
    date: string;
    location: string;
    notes: string;
    timestamp: Date;
  };
}

export const TournamentCard = ({ tournament }: TournamentCardProps) => {
  const isJJFA = tournament.organization === "JJFA";
  const dayOfWeek = tournament.timestamp.toLocaleDateString('ja-JP', { weekday: 'short' });
  const dateWithDay = `${tournament.date}（${dayOfWeek}）`;

  // All organizations now use blue with white text
  const getOrgColor = (org: string) => {
    switch (org) {
      case 'JJFA':
        return 'bg-blue-600 text-white'; // Keep JJFA as is
      case 'IBJJF':
      case 'JBJJF':
      case 'SJJJF':
      case 'ASJJF':
        return 'bg-blue-500 text-white'; // All other orgs use the same blue
      default:
        return 'bg-gray-600 text-white'; // Keep default for unknown orgs
    }
  };

  return (
    <Card className={`border shadow-sm hover:shadow-md transition-shadow ${isJJFA ? 'border-blue-500 bg-blue-50' : ''}`}>
      <CardHeader className="pb-2 px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="space-y-1">
            <CardTitle className="text-base sm:text-lg font-bold line-clamp-2">
              {tournament.name}
            </CardTitle>
            <Badge 
              variant={isJJFA ? "default" : "outline"} 
              className={`text-xs font-semibold ${getOrgColor(tournament.organization)}`}
            >
              {tournament.organization}
            </Badge>
          </div>
          <p className="text-sm font-medium text-primary whitespace-nowrap">
            {dateWithDay}
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-2">
        <div className="space-y-2 text-sm">
          <p className="text-muted-foreground">
            <span className="font-medium">開催場所:</span> {tournament.location}
          </p>
          <p className="text-muted-foreground italic text-xs">
            {tournament.notes}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};