import { useState, useEffect } from "react";
import { Room, RoomEvent } from "livekit-client";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useStreamQueries } from "./useStreamQueries";
import { useRoomSetup } from "./useRoomSetup";

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
  const [quality, setQuality] = useState("720p");

  const { fetchStreamDetails, updateStreamDetails } = useStreamQueries();
  const { createRoom } = useRoomSetup();

  useEffect(() => {
    const loadStreamDetails = async () => {
      const data = await fetchStreamDetails(streamKey);
      if (data) {
        setTitle(data.title);
        setDescription(data.description || "");
      }
    };

    loadStreamDetails();

    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [room, streamKey]);

  const startStream = async (videoTrack: any, audioTrack: any) => {
    if (!videoTrack || !audioTrack) {
      throw new Error("カメラとマイクの準備ができていません");
    }

    try {
      setIsLoading(true);
      console.log("Starting stream with key:", streamKey);

      const newRoom = await createRoom(streamKey, quality);
      console.log("Connected to room");

      await Promise.all([
        newRoom.localParticipant.publishTrack(videoTrack, {
          simulcast: true,
        }),
        newRoom.localParticipant.publishTrack(audioTrack, {
          dtx: true,
          red: true
        }),
      ]);
      console.log("Published tracks");

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

  return {
    isLoading,
    isStreaming,
    title,
    setTitle,
    description,
    setDescription,
    quality,
    setQuality,
    updateStreamDetails,
    startStream,
    stopStream
  };
};