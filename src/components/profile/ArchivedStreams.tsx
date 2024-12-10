import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LiveStream } from "@/types/live-streaming";
import { StreamCard } from "@/components/live-streaming/StreamCard";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

interface ArchivedStreamsProps {
  userId: string;
}

export const ArchivedStreams = ({ userId }: ArchivedStreamsProps) => {
  const navigate = useNavigate();
  const { data: streams, isLoading } = useQuery({
    queryKey: ['archived-streams', userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('live_streams')
        .select(`
          *,
          profiles (
            username,
            avatar_url
          )
        `)
        .eq('user_id', userId)
        .eq('status', 'ended')
        .not('archive_url', 'is', null)
        .order('ended_at', { ascending: false });

      if (error) throw error;
      return data as unknown as LiveStream[];
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!streams || streams.length === 0) {
    return (
      <Card className="p-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <Video className="w-12 h-12 text-slate-300" />
          <div>
            <p className="text-lg font-medium">アーカイブはありません</p>
            <p className="text-sm text-slate-500">
              配信を終了すると、ここにアーカイブが表示されます
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {streams.map((stream) => (
        <StreamCard
          key={stream.id}
          stream={stream}
          onClick={() => navigate(`/live/${stream.id}`)}
        />
      ))}
    </div>
  );
};