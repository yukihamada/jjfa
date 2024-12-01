import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { LiveStream } from "@/types/live-streaming";
import { useState, useEffect } from "react";

export const useLiveStreams = () => {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUserId(user?.id || null);
    };
    getCurrentUser();
  }, []);

  const { data: streams, isLoading } = useQuery({
    queryKey: ['live-streams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('live_streams')
        .select(`
          *,
          profiles:user_id (
            username,
            avatar_url
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as unknown as LiveStream[];
    },
  });

  const myStream = streams?.find(stream => 
    stream.user_id === currentUserId && stream.status !== 'ended'
  );

  return {
    streams,
    isLoading,
    myStream,
    currentUserId
  };
};