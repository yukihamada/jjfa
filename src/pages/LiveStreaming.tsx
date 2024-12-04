import { useState, useEffect } from "react";
import { LiveStreamList } from "@/components/live-streaming/LiveStreamList";
import { StreamInstructions } from "@/components/live-streaming/StreamInstructions";
import { Button } from "@/components/ui/button";
import { Plus, Video, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useStreamQueries } from "@/components/live-streaming/hooks/useStreamQueries";
import { toast } from "sonner";

const LiveStreaming = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [currentStreamKey, setCurrentStreamKey] = useState("");
  const navigate = useNavigate();
  const { data: streams, isLoading } = useStreamQueries();

  const handleStartStream = () => {
    navigate('/studio');
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">ライブ配信</h1>
          <p className="text-muted-foreground">
            JJFAコミュニティのライブ配信をチェックしましょう
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleStartStream}
            className="w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            配信を始める
          </Button>
          <Button
            variant="outline"
            onClick={() => setShowInstructions(true)}
            className="w-full sm:w-auto"
          >
            配信方法を確認
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
          <div className="flex items-center">
            <Video className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="font-medium">配信中</h3>
              <p className="text-2xl font-bold">
                {streams?.filter(stream => stream.status === 'live').length || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="font-medium">総視聴者数</h3>
              <p className="text-2xl font-bold">
                {streams?.reduce((acc, stream) => acc + (stream.viewer_count || 0), 0) || 0}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
          <div className="flex items-center">
            <Trophy className="w-8 h-8 text-primary mr-3" />
            <div>
              <h3 className="font-medium">公式試合</h3>
              <p className="text-2xl font-bold">
                {streams?.filter(stream => stream.is_official_match).length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      <LiveStreamList streams={streams || []} isLoading={isLoading} />

      <StreamInstructions
        open={showInstructions}
        onOpenChange={setShowInstructions}
        streamKey={currentStreamKey}
      />
    </div>
  );
};

export default LiveStreaming;