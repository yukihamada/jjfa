import { Card, CardContent } from "@/components/ui/card";
import { DiscussionHeader } from "./DiscussionHeader";
import { DiscussionContent } from "./DiscussionContent";
import { DiscussionActions } from "./DiscussionActions";
import { useState } from "react";

interface DiscussionCardProps {
  discussion: any;
}

export const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleCommentClick = () => {
    setShowCommentForm(!showCommentForm);
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardContent className="pt-6">
        <DiscussionHeader discussion={discussion} />
        <DiscussionContent discussion={discussion} />
        <DiscussionActions 
          discussion={discussion} 
          showCommentForm={showCommentForm}
          onCommentClick={handleCommentClick}
        />
      </CardContent>
    </Card>
  );
};