import { Room, VideoPresets } from "livekit-client";

export const createRoomConfig = () => ({
  adaptiveStream: true,
  dynacast: true,
  videoCaptureDefaults: {
    resolution: VideoPresets.h720,
  },
  publishDefaults: {
    simulcast: true,
    videoCodec: 'vp8' as const,
    dtx: true,
    red: true,
    audioPreset: {
      maxBitrate: 128000,
    },
    videoEncoding: {
      maxBitrate: 1_500_000,
      maxFramerate: 30,
    }
  }
});

export const getRoomConnectionConfig = () => ({
  autoSubscribe: true,
  rtcConfig: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ],
    bundlePolicy: 'max-bundle',
    iceCandidatePoolSize: 10
  }
});

export const getVideoPublishOptions = (isIOS: boolean, isAndroid: boolean) => ({
  simulcast: true,
  videoCodec: 'vp8' as const,
  videoEncoding: {
    maxBitrate: isIOS || isAndroid ? 800_000 : 1_500_000,
    maxFramerate: 30
  }
});