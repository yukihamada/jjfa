import { supabase } from "@/integrations/supabase/client";

interface TokenResponse {
  token: string;
  wsUrl: string;
}

export const createStreamRoom = async (streamKey: string): Promise<TokenResponse> => {
  const { data: tokenData, error: tokenError } = await supabase.functions.invoke('livekit', {
    body: {
      roomName: streamKey,
      participantName: `broadcaster-${streamKey}`,
      isPublisher: true
    }
  });

  if (tokenError || !tokenData) {
    throw new Error("配信トークンの取得に失敗しました");
  }

  return tokenData as TokenResponse;
};

export const updateStreamStatus = async (
  streamKey: string,
  status: 'live' | 'ended',
  title?: string,
  description?: string,
  startedAt?: string,
  endedAt?: string
) => {
  const updateData: any = { status };
  
  if (status === 'live') {
    updateData.started_at = startedAt || new Date().toISOString();
    if (title) updateData.title = title;
    if (description) updateData.description = description;
  } else if (status === 'ended') {
    updateData.ended_at = endedAt || new Date().toISOString();
  }

  const { error } = await supabase
    .from('live_streams')
    .update(updateData)
    .eq('stream_key', streamKey);

  if (error) {
    console.error(`Failed to update stream status:`, error);
    const action = status === 'live' ? "開始" : "終了";
    throw new Error(`配信の${action}に失敗しました`);
  }
};