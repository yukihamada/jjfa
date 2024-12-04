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
      console.error('Failed to get token:', tokenError);
      throw new Error("配信トークンの取得に失敗しました");
    }

    console.log('Creating room with token:', tokenData);

    const room = new Room({
      adaptiveStream: true,
      dynacast: true,
      videoCaptureDefaults: {
        resolution: getVideoPreset(quality)
      },
      publishDefaults: {
        simulcast: true,
        videoCodec: 'vp8',
        dtx: true,
        red: true,
        forceStereo: true
      }
    });

    try {
      await room.connect(tokenData.wsUrl, tokenData.token, {
        autoSubscribe: true
      });
      console.log('Room connected successfully');
      return room;
    } catch (error) {
      console.error('Failed to connect to room:', error);
      throw error;
    }
  };

  return {
    createRoom
  };
};