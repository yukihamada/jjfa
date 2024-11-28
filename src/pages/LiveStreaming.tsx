import { useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { LiveStreamList } from "@/components/live-streaming/LiveStreamList";
import { CreateStreamDialog } from "@/components/live-streaming/CreateStreamDialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const LiveStreaming = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <PageTitle>ライブ配信</PageTitle>
        <Button onClick={() => setShowCreateDialog(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          配信を始める
        </Button>
      </div>

      <LiveStreamList />
      <CreateStreamDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog} 
      />
    </div>
  );
};

export default LiveStreaming;