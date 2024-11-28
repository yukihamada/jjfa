import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { AttachmentUpload } from "./AttachmentUpload";
import { AttachmentPreview } from "./AttachmentPreview";

const FormTips = () => (
  <div className="bg-green-50 p-4 rounded-lg mb-4">
    <h3 className="text-sm font-medium text-green-800 mb-2">投稿のヒント</h3>
    <ul className="text-sm text-green-700 space-y-1">
      <li>• 具体的な状況や気持ちを共有すると、より良いアドバイスが得られやすいです</li>
      <li>• 質問は明確に、そして遠慮なく。誰もが最初は初心者でした</li>
      <li>• 他の人の経験も参考になります。検索してみましょう</li>
    </ul>
  </div>
);

export const DiscussionForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [attachments, setAttachments] = useState<{ url: string; type: string }[]>([]);
  const queryClient = useQueryClient();

  const { data: tags } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name');
      if (error) throw error;
      return data;
    },
  });

  const createDiscussion = useMutation({
    mutationFn: async ({ title, content, tagId, attachments }: { 
      title: string; 
      content: string; 
      tagId: string;
      attachments: { url: string; type: string }[];
    }) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("ログインが必要です");

      const { data: discussion, error: discussionError } = await supabase
        .from("discussions")
        .insert([
          {
            title,
            content,
            user_id: user.id,
            attachments
          },
        ])
        .select()
        .single();

      if (discussionError) throw discussionError;

      if (tagId) {
        const { error: tagError } = await supabase
          .from("discussion_tags")
          .insert([
            {
              discussion_id: discussion.id,
              tag_id: tagId,
            },
          ]);

        if (tagError) throw tagError;
      }

      return discussion;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discussions"] });
      setTitle("");
      setContent("");
      setSelectedTag("");
      setAttachments([]);
      toast.success("投稿が完了しました！");
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
    createDiscussion.mutate({ title, content, tagId: selectedTag, attachments });
  };

  const handleAttachmentUpload = (newAttachments: { url: string; type: string }[]) => {
    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>新しい投稿を作成</CardTitle>
      </CardHeader>
      <CardContent>
        <FormTips />
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
            <Select value={selectedTag} onValueChange={setSelectedTag}>
              <SelectTrigger>
                <SelectValue placeholder="カテゴリを選択" />
              </SelectTrigger>
              <SelectContent>
                {tags?.map((tag) => (
                  <SelectItem key={tag.id} value={tag.id}>
                    {tag.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="内容を入力してください"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[100px]"
            />
          </div>
          <AttachmentUpload onUploadComplete={handleAttachmentUpload} />
          <AttachmentPreview attachments={attachments} onRemove={removeAttachment} />
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