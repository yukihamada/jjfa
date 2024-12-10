import { Room, RoomOptions, VideoPresets } from "livekit-client";

export const createRoomConfig = (): RoomOptions => ({
  adaptiveStream: true,
  dynacast: true,
  videoCaptureDefaults: {
    resolution: VideoPresets.h720,
  },
  publishDefaults: {
    simulcast: false,
    dtx: true,
    red: true,
    audioPreset: {
      maxBitrate: 128000,
    },
    videoEncoding: {
      maxBitrate: 1_500_000,
      maxFramerate: 30,
    }
  },
});

export const getRoomConnectionConfig = () => ({
  autoSubscribe: true,
  rtcConfig: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
    ],
    bundlePolicy: 'max-bundle' as RTCBundlePolicy,
    iceCandidatePoolSize: 10,
  },
});

export const getVideoPublishOptions = (isIOS: boolean, isAndroid: boolean, isDAOMember: boolean) => ({
  simulcast: false,
  encodings: [{
    maxBitrate: isDAOMember 
      ? (isIOS || isAndroid ? 2_000_000 : 4_000_000)
      : (isIOS || isAndroid ? 800_000 : 1_500_000),
    maxFramerate: isDAOMember ? 60 : 30,
  }],
  // VP8を明示的に指定
  codecs: [
    { mimeType: 'video/VP8', sdpFmtpLine: '' }
  ]
});