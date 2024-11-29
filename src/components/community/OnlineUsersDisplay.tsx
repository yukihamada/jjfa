import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

interface OnlineUser {
  user: {
    id: string;
    username?: string;
  };
  online_at: string;
}

export const OnlineUsersDisplay = () => {
  const [onlineUsers, setOnlineUsers] = useState<Record<string, OnlineUser[]>>({});

  useEffect(() => {
    // コミュニティチャンネルの作成
    const channel = supabase.channel('online_users', {
      config: {
        presence: {
          key: 'user',
        },
      },
    });

    // プレゼンス状態の監視
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState<OnlineUser>();
        setOnlineUsers(state);
      })
      .on('presence', { event: 'join' }, ({ key, newPresences }) => {
        console.log('User joined:', key, newPresences);
      })
      .on('presence', { event: 'leave' }, ({ key, leftPresences }) => {
        console.log('User left:', key, leftPresences);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            // ユーザーの状態を追跡開始
            await channel.track({
              user: {
                id: user.id,
                username: user.user_metadata.username || 'Anonymous',
              },
              online_at: new Date().toISOString(),
            });
          }
        }
      });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  const totalOnlineUsers = Object.values(onlineUsers).reduce(
    (total, users) => total + users.length,
    0
  );

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
      <Users className="w-4 h-4 text-green-500" />
      <Badge variant="secondary" className="bg-green-100">
        {totalOnlineUsers} オンライン
      </Badge>
    </div>
  );
};