import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

interface Message {
  id: string;
  content: string;
  created_at: string;
  profiles: {
    username: string;
    avatar_url: string;
  };
}

export const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const { data: initialMessages } = useQuery({
    queryKey: ["chat-messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("chat_messages")
        .select(`
          *,
          profiles (
            username,
            avatar_url
          )
        `)
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) throw error;
      return data as Message[];
    },
  });

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages.reverse());
    }
  }, [initialMessages]);

  useEffect(() => {
    const channel = supabase
      .channel("chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
        },
        async (payload) => {
          const { data: newMessage, error } = await supabase
            .from("chat_messages")
            .select(`
              *,
              profiles (
                username,
                avatar_url
              )
            `)
            .eq("id", payload.new.id)
            .single();

          if (error) {
            console.error("Error fetching new message:", error);
            return;
          }

          setMessages((current) => [...current, newMessage as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const { error } = await supabase.from("chat_messages").insert([
        {
          content: message.trim(),
        },
      ]);

      if (error) throw error;
      setMessage("");
    } catch (error) {
      toast.error("メッセージの送信に失敗しました");
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">チャットルーム</h2>
      </div>
      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={msg.profiles?.avatar_url} />
                <AvatarFallback>
                  {msg.profiles?.username?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{msg.profiles?.username || "Unknown User"}</div>
                <div className="text-sm text-gray-600">{msg.content}</div>
                <div className="text-xs text-gray-400">
                  {new Date(msg.created_at).toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-grow"
          />
          <Button type="submit">送信</Button>
        </div>
      </form>
    </div>
  );
};