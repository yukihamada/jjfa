import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Room, RoomEvent, createLocalVideoTrack, createLocalAudioTrack } from "livekit-client";
import { supabase } from "@/integrations/supabase/client";

interface BrowserStreamControlsProps {
  streamKey: string;
  onStreamStart?: () => void;
  onStreamEnd?: () => void;
}

export const BrowserStreamControls = ({
  streamKey,
  onStreamStart,
  onStreamEnd
}: BrowserStreamControlsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [room, setRoom] = useState<Room | null>(null);
  const [previewElement, setPreviewElement] = useState<HTMLVideoElement | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    // 配信情報を取得
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

  const updateStreamDetails = async () => {
    const { error } = await supabase
      .from('live_streams')
      .update({ title, description })
      .eq('stream_key', streamKey);

    if (error) {
      toast.error("配信情報の更新に失敗しました");
    } else {
      toast.success("配信情報を更新しました");
    }
  };

  const startStream = async () => {
    try {
      setIsLoading(true);

      const { data: tokenData, error: tokenError } = await supabase.functions.invoke('livekit', {
        body: {
          roomName: streamKey,
          participantName: `broadcaster-${streamKey}`,
          isPublisher: true
        }
      });

      if (tokenError) throw new Error('Failed to get LiveKit token');

      const newRoom = new Room({
        adaptiveStream: true,
        dynacast: true,
      });

      await newRoom.connect(`${import.meta.env.VITE_LIVEKIT_WS_URL}`, tokenData.token);

      const videoTrack = await createLocalVideoTrack({
        resolution: { width: 1280, height: 720 },
      });
      const audioTrack = await createLocalAudioTrack();

      await Promise.all([
        newRoom.localParticipant.publishTrack(videoTrack),
        newRoom.localParticipant.publishTrack(audioTrack),
      ]);

      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      videoTrack.attach(video);

      newRoom.on(RoomEvent.Disconnected, () => {
        setIsStreaming(false);
        onStreamEnd?.();
      });

      setRoom(newRoom);
      setPreviewElement(video);
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

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="配信タイトル"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
            <Textarea
              placeholder="配信の説明"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full"
            />
            {isStreaming && (
              <Button 
                onClick={updateStreamDetails}
                variant="outline"
                className="w-full"
              >
                配信情報を更新
              </Button>
            )}
          </div>

          <div className="aspect-video bg-slate-900 rounded-lg overflow-hidden">
            {previewElement && (
              <div ref={(container) => container?.appendChild(previewElement)} className="w-full h-full" />
            )}
          </div>
          
          <div className="flex justify-end">
            {!isStreaming ? (
              <Button
                onClick={startStream}
                disabled={isLoading}
              >
                配信を開始
              </Button>
            ) : (
              <Button
                onClick={stopStream}
                disabled={isLoading}
                variant="destructive"
              >
                配信を終了
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};