import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const DiscussionForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const createDiscussion = useMutation({
    mutationFn: async ({ title, content }: { title: string; content: string }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      const { data, error } = await supabase
        .from("discussions")
        .insert([
          {
            title,
            content,
            user_id: user.id,
          },
        ])
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      setTitle("");
      setContent("");
      toast.success("投稿が完了しました");
    },
    onError: (error) => {
      toast.error(`投稿に失敗しました: ${error.message}`);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("タイトルと内容を入力してください");
      return;
    }
    createDiscussion.mutate({ title, content });
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>新しい投稿を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="タイトル"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="内容を入力してください"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={createDiscussion.isPending}
          >
            {createDiscussion.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                投稿中...
              </>
            ) : (
              "投稿する"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};