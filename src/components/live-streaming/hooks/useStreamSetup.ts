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
      try {
        const { data, error } = await supabase
          .from('live_streams')
          .select('title, description')
          .eq('stream_key', streamKey)
          .single();

        if (error) throw error;
        if (data) {
          setTitle(data.title);
          setDescription(data.description || "");
        }
      } catch (error) {
        console.error('Failed to fetch stream details:', error);
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
        return VideoPresets.h540;
      default:
        return VideoPresets.h720;
    }
  };

  const updateStreamDetails = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from('live_streams')
        .update({ title, description })
        .eq('stream_key', streamKey);

      if (error) throw error;
      toast.success("配信情報を更新しました");
    } catch (error) {
      console.error("Failed to update stream details:", error);
      toast.error("配信情報の更新に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  const startStream = async (videoTrack: any, audioTrack: any) => {
    if (!videoTrack || !audioTrack) {
      throw new Error("カメラとマイクの準備ができていません");
    }

    try {
      setIsLoading(true);
      console.log("Starting stream with key:", streamKey);

      const { data: tokenData, error: tokenError } = await supabase.functions.invoke('livekit', {
        body: {
          roomName: streamKey,
          participantName: `broadcaster-${streamKey}`,
          isPublisher: true
        }
      });

      if (tokenError || !tokenData) {
        console.error("Token error:", tokenError);
        throw new Error("配信トークンの取得に失敗しました");
      }

      console.log("Got token response:", tokenData);

      if (!tokenData.token || !tokenData.wsUrl) {
        throw new Error("配信トークンまたはWebSocket URLが無効です");
      }

      console.log("Connecting to room with URL:", tokenData.wsUrl);
      const newRoom = new Room({
        adaptiveStream: true,
        dynacast: true,
        videoCaptureDefaults: {
          resolution: getVideoPreset(quality)
        },
        publishDefaults: {
          simulcast: true,
          dtx: true,
          red: true
        }
      });

      await newRoom.connect(tokenData.wsUrl, tokenData.token, {
        autoSubscribe: true
      });
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
