import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

  useEffect(() => {
    return () => {
      if (room) {
        room.disconnect();
      }
    };
  }, [room]);

  const startStream = async () => {
    try {
      setIsLoading(true);

      // LiveKitトークンを取得
      const { data: tokenData, error: tokenError } = await supabase.functions.invoke('livekit', {
        body: {
          roomName: streamKey,
          participantName: `broadcaster-${streamKey}`,
          isPublisher: true
        }
      });

      if (tokenError) throw new Error('Failed to get LiveKit token');

      // Roomを作成
      const newRoom = new Room({
        adaptiveStream: true,
        dynacast: true,
      });

      // Roomに接続
      await newRoom.connect(`${import.meta.env.VITE_LIVEKIT_WS_URL}`, tokenData.token);

      // カメラとマイクのトラックを取得
      const videoTrack = await createLocalVideoTrack({
        resolution: { width: 1280, height: 720 },
      });
      const audioTrack = await createLocalAudioTrack();

      // トラックをルームに公開
      await Promise.all([
        newRoom.localParticipant.publishTrack(videoTrack),
        newRoom.localParticipant.publishTrack(audioTrack),
      ]);

      // プレビュー表示用のビデオ要素を作成
      const video = document.createElement('video');
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      videoTrack.attach(video);

      // Roomの状態を監視
      newRoom.on(RoomEvent.Disconnected, () => {
        setIsStreaming(false);
        onStreamEnd?.();
      });

      setRoom(newRoom);
      setPreviewElement(video);
      setIsStreaming(true);
      onStreamStart?.();

      // Supabaseのlive_streamsテーブルを更新
      await supabase
        .from('live_streams')
        .update({ status: 'live', started_at: new Date().toISOString() })
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

      // Supabaseのlive_streamsテーブルを更新
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