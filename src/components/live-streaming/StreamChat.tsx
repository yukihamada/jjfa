import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Send, Gift } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface StreamChatProps {
  streamId: string;
}

export const StreamChat = ({ streamId }: StreamChatProps) => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("コメントするにはログインが必要です");
      return;
    }
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("chat_messages")
        .insert([{ content: message.trim(), stream_id: streamId, user_id: user.id }]);

      if (error) throw error;
      setMessage("");
      toast.success("コメントを送信しました");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("コメントの送信に失敗しました");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDonate = async () => {
    if (!user) {
      toast.error("投げ銭するにはログインが必要です");
      return;
    }
    // 投げ銭の処理をここに実装
    toast.info("投げ銭機能は準備中です");
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow p-4">
        {/* チャットメッセージの表示部分 */}
      </ScrollArea>
      
      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleDonate}
            disabled={!user}
            title={user ? "投げ銭する" : "投げ銭するにはログインが必要です"}
          >
            <Gift className="h-4 w-4" />
          </Button>
          <form onSubmit={handleSubmit} className="flex-1 flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={user ? "メッセージを入力..." : "コメントするにはログインが必要です"}
              disabled={!user || isSubmitting}
            />
            <Button 
              type="submit" 
              disabled={!user || isSubmitting || !message.trim()}
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};