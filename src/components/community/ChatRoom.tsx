import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: {
    username: string | null;
    avatar_url: string | null;
  } | null;
}

export const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  const { data: initialMessages, isLoading } = useQuery({
    queryKey: ["chat-messages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("chat_messages")
        .select(`
          *,
          profiles:user_id (
            username,
            avatar_url
          )
        `)
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) throw error;
      return (data as unknown as Message[]).reverse();
    },
  });

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
      scrollToBottom();
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
              profiles:user_id (
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

          setMessages((current) => [...current, newMessage as unknown as Message]);
          scrollToBottom();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user?.id) {
      toast.error("ログインが必要です");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("chat_messages").insert({
        content: message.trim(),
        user_id: session.user.id,
      });

      if (error) throw error;
      setMessage("");
    } catch (error) {
      toast.error("メッセージの送信に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {};
    messages.forEach((message) => {
      const date = format(new Date(message.created_at), 'yyyy年MM月dd日', { locale: ja });
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    return groups;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-2 text-sm text-gray-500">メッセージを読み込み中...</p>
      </div>
    );
  }

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b bg-gradient-to-r from-purple-50 to-blue-50">
        <h2 className="text-lg font-semibold text-gray-800">コミュニティチャット</h2>
        <p className="text-sm text-gray-500">メンバー同士で交流しましょう</p>
      </div>
      <ScrollArea className="flex-grow p-4" ref={scrollRef}>
        <div className="space-y-6">
          {Object.entries(messageGroups).map(([date, groupMessages]) => (
            <div key={date} className="space-y-4">
              <div className="flex justify-center">
                <span className="px-3 py-1 text-xs text-gray-500 bg-gray-100 rounded-full">
                  {date}
                </span>
              </div>
              {groupMessages.map((msg, index) => {
                const isLastMessage = index === groupMessages.length - 1;
                return (
                  <div
                    key={msg.id}
                    ref={isLastMessage ? lastMessageRef : null}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-300",
                      "animate-fade-in hover:bg-gray-50 rounded-lg p-2"
                    )}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={msg.profiles?.avatar_url || undefined} />
                      <AvatarFallback>
                        {msg.profiles?.username?.[0]?.toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-sm">
                          {msg.profiles?.username || "Unknown User"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {format(new Date(msg.created_at), 'HH:mm')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t bg-gray-50">
        <div className="flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-grow"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting || !message.trim()}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};