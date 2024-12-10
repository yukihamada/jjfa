import { useState } from "react";
import { Room, RoomEvent, VideoPresets } from "livekit-client";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useStreamSetup = (
  streamKey: string,
  onStreamStart?: () => void,
  onStreamEnd?: () => void
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createRoom = async () => {
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
        resolution: VideoPresets.h720,
      },
      publishDefaults: {
        simulcast: true,
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

    try {
      await room.connect(tokenData.wsUrl, tokenData.token, {
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
      
      console.log('Room connected successfully');
      return room;
    } catch (error) {
      console.error('Failed to connect to room:', error);
      throw error;
    }
  };

  const startStream = async (videoTrack: any, audioTrack: any) => {
    try {
      setIsLoading(true);
      
      const newRoom = await createRoom();
      
      // デバイスとブラウザに応じて最適な設定を選択
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      const videoPublishOptions = {
        simulcast: true,
        videoCodec: 'vp8' as const,
        videoEncoding: {
          maxBitrate: isIOS || isAndroid ? 800_000 : 1_500_000,
          maxFramerate: 30
        }
      };

      // オーディオトラックを先に公開（モバイルデバイスでの安定性向上）
      await newRoom.localParticipant.publishTrack(audioTrack);
      
      // ビデオトラックの公開を試みる
      try {
        await newRoom.localParticipant.publishTrack(videoTrack, videoPublishOptions);
      } catch (error) {
        console.error('Failed to publish video track:', error);
        toast.error("カメラの接続に問題が発生しました。カメラへのアクセスを許可してください。");
        throw error;
      }

      newRoom.on(RoomEvent.Disconnected, () => {
        setIsStreaming(false);
        onStreamEnd?.();
        toast.info("配信が終了しました");
      });

      setRoom(newRoom);
      setIsStreaming(true);

      await supabase
        .from('live_streams')
        .update({ 
          status: 'live', 
          started_at: new Date().toISOString(),
          title,
          description
        })
        .eq('stream_key', streamKey);

      onStreamStart?.();
      toast.success("配信を開始しました！");
    } catch (error: any) {
      console.error('Failed to start stream:', error);
      toast.error(`配信の開始に失敗しました: ${error.message}`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const stopStream = async () => {
    try {
      setIsLoading(true);

      if (room) {
        room.disconnect();
        setRoom(null);
      }

      await supabase
        .from('live_streams')
        .update({
          status: 'ended',
          ended_at: new Date().toISOString()
        })
        .eq('stream_key', streamKey);

      setIsStreaming(false);
      onStreamEnd?.();
      toast.success("配信を終了しました");
    } catch (error) {
      console.error('Failed to stop stream:', error);
      toast.error("配信の終了に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const updateStreamDetails = async (streamKey: string, title: string, description: string) => {
    try {
      await supabase
        .from('live_streams')
        .update({ title, description })
        .eq('stream_key', streamKey);
      
      toast.success("配信情報を更新しました");
    } catch (error) {
      console.error("Failed to update stream details:", error);
      toast.error("配信情報の更新に失敗しました");
    }
  };

  return {
    isLoading,
    isStreaming,
    title,
    setTitle,
    description,
    setDescription,
    updateStreamDetails,
    startStream,
    stopStream
  };
};