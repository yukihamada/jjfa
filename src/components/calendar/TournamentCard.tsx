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

  // Organization-specific colors
  const getOrgColor = (org: string) => {
    switch (org) {
      case 'JJFA':
        return 'text-blue-600'; // Traditional blue for official organization
      case 'IBJJF':
        return 'text-purple-600'; // Royal purple for international prestige
      case 'JBJJF':
        return 'text-red-600'; // Energetic red for national spirit
      case 'SJJJF':
        return 'text-emerald-600'; // Fresh emerald for innovation
      case 'ASJJF':
        return 'text-orange-600'; // Vibrant orange for dynamism
      default:
        return 'text-gray-600'; // Neutral gray for others
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
              className={`text-xs font-semibold ${isJJFA ? 'bg-blue-600' : ''} ${getOrgColor(tournament.organization)}`}
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