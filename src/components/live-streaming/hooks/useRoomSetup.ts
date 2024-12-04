import { Room, RoomEvent, VideoPresets } from "livekit-client";
import { supabase } from "@/integrations/supabase/client";

export const useRoomSetup = () => {
  const getVideoPreset = (quality: string) => {
    switch (quality) {
      case "1080p":
        return VideoPresets.h1080;
      case "720p":
        return VideoPresets.h720;
      case "480p":
        return VideoPresets.h540;
      default:
        return VideoPresets.h720;
    }
  };

  const createRoom = async (streamKey: string, quality: string = "720p") => {
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

    const room = new Room({
      adaptiveStream: true,
      dynacast: true,
      videoCaptureDefaults: {
        resolution: getVideoPreset(quality)
      },
      publishDefaults: {
        simulcast: true,
        dtx: true,
        red: true
      }
    });

    await room.connect(tokenData.wsUrl, tokenData.token, {
      autoSubscribe: true
    });

    return room;
  };

  return {
    createRoom
  };
};