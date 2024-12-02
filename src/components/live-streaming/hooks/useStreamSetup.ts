import { useState, useEffect } from "react";
import { Room, RoomEvent, VideoPresets } from "livekit-client";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useStreamSetup = (streamKey: string, onStreamStart?: () => void, onStreamEnd?: () => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quality, setQuality] = useState("720p");

  useEffect(() => {
    const fetchStreamDetails = async () => {
      const { data } = await supabase
        .from('live_streams')
        .select('title, description')
        .eq('stream_key', streamKey)
        .single();

      if (data) {
        setTitle(data.title);
        setDescription(data.description || "");
      }
    };

    fetchStreamDetails();

    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [room, streamKey]);

  const getVideoPreset = (quality: string) => {
    switch (quality) {
      case "1080p":
        return VideoPresets.h1080;
      case "720p":
        return VideoPresets.h720;
      case "480p":
        return VideoPresets.h540; // LiveKitは480pを直接サポートしていないため、540pを使用
      default:
        return VideoPresets.h720;
    }
  };

  const updateStreamDetails = async () => {
    try {
      const { error } = await supabase
        .from('live_streams')
        .update({ title, description })
        .eq('stream_key', streamKey);

      if (error) throw error;
      toast.success("配信情報を更新しました");
    } catch (error) {
      console.error("Failed to update stream details:", error);
      toast.error("配信情報の更新に失敗しました");
    }
  };

  const startStream = async (videoTrack: any, audioTrack: any) => {
    if (!videoTrack || !audioTrack) {
      toast.error("カメラとマイクの準備ができていません");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Starting stream with key:", streamKey);

      const { data: tokenData, error: tokenError } = await supabase.functions.invoke('livekit', {
        body: {
          roomName: streamKey,
          participantName: `broadcaster-${streamKey}`,
          isPublisher: true,
          videoQuality: quality
        }
      });

      if (tokenError) throw tokenError;

      console.log("Got token, connecting to room");
      const newRoom = new Room({
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
          resolution: getVideoPreset(quality)
        }
      });

      await newRoom.connect(import.meta.env.VITE_LIVEKIT_WS_URL, tokenData.token);
      console.log("Connected to room");

      await Promise.all([
        newRoom.localParticipant.publishTrack(videoTrack),
        newRoom.localParticipant.publishTrack(audioTrack),
      ]);
      console.log("Published tracks");

      newRoom.on(RoomEvent.Disconnected, () => {
        setIsStreaming(false);
        onStreamEnd?.();
        toast.info("配信が終了しました");
      });

      setRoom(newRoom);
      setIsStreaming(true);
      onStreamStart?.();

      await supabase
        .from('live_streams')
        .update({ 
          status: 'live', 
          started_at: new Date().toISOString(),
          title,
          description
        })
        .eq('stream_key', streamKey);

      toast.success("配信を開始しました");
    } catch (error) {
      console.error('Failed to start stream:', error);
      toast.error("配信の開始に失敗しました");
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