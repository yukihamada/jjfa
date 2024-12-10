import { useState, useEffect } from "react";
import { Room, RoomEvent } from "livekit-client";
import { toast } from "sonner";
import { createRoomConfig, getRoomConnectionConfig, getVideoPublishOptions } from "./config/livekitConfig";
import { createStreamRoom, updateStreamStatus } from "./services/streamService";
import { supabase } from "@/integrations/supabase/client";

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
  const [isDAOMember, setIsDAOMember] = useState(false);

  useEffect(() => {
    const checkDAOMembership = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: daoMembership } = await supabase
          .from('dao_memberships')
          .select('status')
          .eq('user_id', user.id)
          .eq('status', 'active')
          .single();
        
        setIsDAOMember(!!daoMembership);
      }
    };

    checkDAOMembership();
  }, []);

  const startStream = async (videoTrack: any, audioTrack: any) => {
    try {
      setIsLoading(true);
      
      const room = new Room(createRoomConfig());
      const { wsUrl, token } = await createStreamRoom(streamKey);
      
      await room.connect(wsUrl, token, getRoomConnectionConfig());
      console.log('Room connected successfully');

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);

      // オーディオトラックを先に公開
      await room.localParticipant.publishTrack(audioTrack, {
        dtx: true,
        red: true
      });
      
      try {
        // ビデオトラックの公開
        await room.localParticipant.publishTrack(
          videoTrack, 
          getVideoPublishOptions(isIOS, isAndroid, isDAOMember)
        );
      } catch (error) {
        console.error('Failed to publish video track:', error);
        toast.error("カメラの接続に問題が発生しました。カメラへのアクセスを許可してください。");
        throw error;
      }

      room.on(RoomEvent.Disconnected, async () => {
        setIsStreaming(false);
        await updateStreamStatus(streamKey, 'ended');
        onStreamEnd?.();
        toast.info("配信が終了しました。アーカイブの作成を開始します。");
      });

      setRoom(room);
      setIsStreaming(true);

      await updateStreamStatus(streamKey, 'live', title, description);
      onStreamStart?.();
      toast.success(`配信を開始しました！${isDAOMember ? '（高画質モード）' : ''}`);
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

      await updateStreamStatus(streamKey, 'ended');
      setIsStreaming(false);
      onStreamEnd?.();
      toast.success("配信を終了しました。アーカイブの作成を開始します。");
    } catch (error) {
      console.error('Failed to stop stream:', error);
      toast.error("配信の終了に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const updateStreamDetails = async (streamKey: string, title: string, description: string) => {
    try {
      await updateStreamStatus(streamKey, 'live', title, description);
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
    stopStream,
    isDAOMember
  };
};