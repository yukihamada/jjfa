import { Card, CardContent } from "@/components/ui/card";
import { DiscussionHeader } from "./DiscussionHeader";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionActions } from "./DiscussionActions";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardContent className="pt-6">
        <DiscussionHeader discussion={discussion} />
        <DiscussionContent discussion={discussion} />
        <DiscussionActions discussion={discussion} />
      </CardContent>
    </Card>
  );
};