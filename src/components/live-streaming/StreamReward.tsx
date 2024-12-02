import { useEffect } from "react";
import { Trophy } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { LiveStream } from "@/types/live-streaming";

interface StreamRewardProps {
  stream: LiveStream;
}

export const StreamReward = ({ stream }: StreamRewardProps) => {
  useEffect(() => {
    const checkAndAwardTokens = async () => {
      if (
        stream.is_official_match &&
        stream.status === 'ended' &&
        !stream.token_rewarded
      ) {
        // Award tokens
        const { error: rewardError } = await supabase
          .from('stream_rewards')
          .insert({
            stream_id: stream.id,
            user_id: stream.user_id,
          });

        if (!rewardError) {
          // Update stream as rewarded
          await supabase
            .from('live_streams')
            .update({ token_rewarded: true })
            .eq('id', stream.id);

          toast.success(
            "公式試合の配信ありがとうございます！100JJFAトークンを獲得しました！",
            {
              icon: <Trophy className="w-5 h-5 text-yellow-500" />,
              duration: 5000,
            }
          );
        }
      }
    };

    checkAndAwardTokens();
  }, [stream]);

  return null;
};