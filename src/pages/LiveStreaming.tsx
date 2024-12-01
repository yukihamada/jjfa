import { useState, useEffect } from "react";
import { LiveStreamList } from "@/components/live-streaming/LiveStreamList";
import { CreateStreamDialog } from "@/components/live-streaming/CreateStreamDialog";
import { StreamInstructions } from "@/components/live-streaming/StreamInstructions";
import { Button } from "@/components/ui/button";
import { Plus, Video, Users, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LiveStreaming = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [currentStreamKey, setCurrentStreamKey] = useState("");
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    liveCount: 0,
    viewerCount: 0,
    totalStreamTime: 0
  });

  useEffect(() => {
    fetchStreamStats();
    
    // Subscribe to live stream changes
    const channel = supabase
      .channel('public:live_streams')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'live_streams',
      }, () => {
        fetchStreamStats();
      })
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const handleCreateStream = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      toast.error("配信するにはログインが必要です");
      navigate("/community-registration");
      return;
    }
    setShowCreateDialog(true);
  };

  const fetchStreamStats = async () => {
    // Get live stream count
    const { data: liveStreams } = await supabase
      .from('live_streams')
      .select('viewer_count')
      .eq('status', 'live');

    // Calculate total viewers and stream count
    const liveCount = liveStreams?.length || 0;
    const viewerCount = liveStreams?.reduce((sum, stream) => sum + (stream.viewer_count || 0), 0) || 0;

    // Get total stream time (in hours)
    const { data: completedStreams } = await supabase
      .from('live_streams')
      .select('started_at, ended_at')
      .not('ended_at', 'is', null);

    const totalStreamTime = completedStreams?.reduce((sum, stream) => {
      const duration = new Date(stream.ended_at).getTime() - new Date(stream.started_at).getTime();
      return sum + (duration / (1000 * 60 * 60)); // Convert to hours
    }, 0) || 0;

    setStats({
      liveCount,
      viewerCount,
      totalStreamTime: Math.round(totalStreamTime)
    });
  };

  const handleStreamCreated = (streamKey: string) => {
    setCurrentStreamKey(streamKey);
    setShowInstructions(true);
  };

  const statsConfig = [
    { 
      label: "ライブ配信中", 
      value: stats.liveCount.toString(), 
      icon: Video,
      color: "text-red-600"
    },
    { 
      label: "視聴者数", 
      value: stats.viewerCount.toLocaleString(), 
      icon: Users,
      color: "text-blue-600"
    },
    { 
      label: "総配信時間", 
      value: `${stats.totalStreamTime}時間`, 
      icon: Trophy,
      color: "text-yellow-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="pt-24 pb-8 px-4 bg-slate-900 text-white">
        <div className="container mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">ライブ配信</h1>
              <p className="text-slate-300">
                世界中の柔術家たちとリアルタイムで繋がろう
              </p>
            </div>
            <Button 
              onClick={handleCreateStream}
              className="bg-white text-slate-900 hover:bg-slate-100 gap-2"
            >
              <Plus className="w-4 h-4" />
              配信を始める
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {statsConfig.map(({ label, value, icon: Icon, color }) => (
              <Card key={label} className="bg-slate-800 border-slate-700 p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-slate-700 rounded-lg ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">{label}</p>
                    <p className={`text-2xl font-bold ${color}`}>{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">配信一覧</h2>
          </div>
          <LiveStreamList />
        </div>
      </div>

      <CreateStreamDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog}
        onStreamCreated={handleStreamCreated}
      />

      <StreamInstructions
        open={showInstructions}
        onOpenChange={setShowInstructions}
        streamKey={currentStreamKey}
      />
    </div>
  );
};

export default LiveStreaming;
