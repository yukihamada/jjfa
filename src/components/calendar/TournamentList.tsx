import { ScrollArea } from "@/components/ui/scroll-area";
import { TournamentCard } from "./TournamentCard";

interface TournamentListProps {
  tournaments: Array<{
    organization: string;
    name: string;
    date: string;
    location: string;
    notes: string;
    timestamp: Date;
  }>;
}

export const TournamentList = ({ tournaments }: TournamentListProps) => {
  return (
    <ScrollArea className="h-[calc(100vh-10rem)]">
      <div className="space-y-4">
        {tournaments.map((tournament, index) => (
          <TournamentCard key={index} tournament={tournament} />
        ))}
      </div>
    </ScrollArea>
  );
};