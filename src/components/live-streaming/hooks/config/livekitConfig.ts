import { Room, RoomOptions, VideoPresets } from "livekit-client";

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
      maxBitrate: 128000, // 音声ビットレート（128kbps）
    },
    videoEncoding: {
      maxBitrate: 1_500_000, // 最大1.5Mbps
      maxFramerate: 30,
    },
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
  videoCodec: 'vp8' as const,
  videoEncoding: {
    // DAOメンバーは高画質（最大4Mbps）、非メンバーは標準画質（最大1.5Mbps）
    // モバイルの場合は帯域を抑える
    maxBitrate: isDAOMember 
      ? (isIOS || isAndroid ? 2_000_000 : 4_000_000)  // DAOメンバー: モバイル2Mbps, デスクトップ4Mbps
      : (isIOS || isAndroid ? 800_000 : 1_500_000),   // 非メンバー: モバイル800kbps, デスクトップ1.5Mbps
    maxFramerate: isDAOMember ? 60 : 30, // DAOメンバーは60fps、非メンバーは30fps
  },
});