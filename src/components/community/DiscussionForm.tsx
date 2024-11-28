import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const DiscussionForm = () => {
  const [newPost, setNewPost] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const queryClient = useQueryClient();

  const createPost = useMutation({
    mutationFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      const { error, data } = await supabase
        .from('discussions')
        .insert([
          {
            title: newPostTitle,
            content: newPost,
            user_id: user.id
          }
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discussions'] });
      setNewPost("");
      setNewPostTitle("");
      toast.success("投稿が完了しました");
    },
    onError: (error) => {
      console.error("Post creation error:", error);
      toast.error("投稿に失敗しました。もう一度お試しください。");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPost.trim()) {
      toast.error("タイトルと本文を入力してください");
      return;
    }
    createPost.mutate();
  };

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle>新規投稿</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="タイトルを入力"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              disabled={createPost.isPending}
            />
          </div>
          <div>
            <Textarea
              placeholder="投稿内容を入力"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={4}
              disabled={createPost.isPending}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={createPost.isPending}
          >
            {createPost.isPending ? "投稿中..." : "投稿する"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};