import { RoomOptions, VideoPresets, RoomConnectOptions } from "livekit-client";

export const createRoomConfig = (): RoomOptions => ({
  adaptiveStream: true,
  dynacast: true,
  videoCaptureDefaults: {
    resolution: VideoPresets.h720,
  },
  publishDefaults: {
    simulcast: false,
    videoCodec: 'vp8',
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

export const getRoomConnectionConfig = (): RoomConnectOptions => ({
  autoSubscribe: true,
  rtcConfig: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ],
    bundlePolicy: 'max-bundle' as RTCBundlePolicy,
    iceCandidatePoolSize: 10
  }
});

export const getVideoPublishOptions = (isIOS: boolean, isAndroid: boolean) => ({
  simulcast: false,
  videoCodec: 'vp8' as const,
  videoEncoding: {
    maxBitrate: isIOS || isAndroid ? 800_000 : 1_500_000,
    maxFramerate: 30
  }
});