import { Room, RoomEvent, VideoPresets, RoomOptions } from "livekit-client";
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

    const roomOptions: RoomOptions = {
      adaptiveStream: true,
      dynacast: true,
      videoCaptureDefaults: {
        resolution: getVideoPreset(quality),
        preferredCodec: 'vp8'
      },
      publishDefaults: {
        simulcast: true,
        videoCodec: 'vp8',
        dtx: true,
        red: true,
        forceStereo: true,
        videoEncoding: {
          maxBitrate: 1_500_000,
          maxFramerate: 30
        },
        audioPreset: {
          maxBitrate: 128000,
          stereo: true
        }
      }
    };

    const room = new Room(roomOptions);

    try {
      await room.connect(tokenData.wsUrl, tokenData.token, {
        autoSubscribe: true,
        rtcConfig: {
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
          ]
        }
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