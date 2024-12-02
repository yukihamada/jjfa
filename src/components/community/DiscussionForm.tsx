import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AttachmentUpload } from "./AttachmentUpload";
import { AttachmentPreview } from "./AttachmentPreview";
import { FormTips } from "./form/FormTips";
import { VisibilitySelect } from "./form/VisibilitySelect";
import { PostPreview } from "./form/PostPreview";
import { useDiscussionSubmit } from "./form/useDiscussionSubmit";
import { CategorySelect } from "./form/CategorySelect";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MAX_TITLE_LENGTH = 100;
const MAX_CONTENT_LENGTH = 2000;

export const DiscussionForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [attachments, setAttachments] = useState<{ url: string; type: string }[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const createDiscussion = useDiscussionSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("タイトルと内容を入力してください");
      return;
    }
    if (title.length > MAX_TITLE_LENGTH) {
      toast.error(`タイトルは${MAX_TITLE_LENGTH}文字以内で入力してください`);
      return;
    }
    if (content.length > MAX_CONTENT_LENGTH) {
      toast.error(`本文は${MAX_CONTENT_LENGTH}文字以内で入力してください`);
      return;
    }
    setShowConfirmDialog(true);
  };

  const handleConfirmedSubmit = () => {
    createDiscussion.mutate(
      { title, content, tagId: selectedTag, visibility, attachments },
      {
        onSuccess: () => {
          setTitle("");
          setContent("");
          setSelectedTag("");
          setVisibility("public");
          setAttachments([]);
          setShowPreview(false);
          setShowConfirmDialog(false);
        }
      }
    );
  };

  const handleAttachmentUpload = (newAttachments: { url: string; type: string }[]) => {
    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>新しい投稿を作成</CardTitle>
        </CardHeader>
        <CardContent>
          <FormTips />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  placeholder="タイトル"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full pr-16"
                  maxLength={MAX_TITLE_LENGTH}
                />
                <span className="absolute right-2 top-2 text-sm text-gray-400">
                  {title.length}/{MAX_TITLE_LENGTH}
                </span>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <CategorySelect value={selectedTag} onChange={setSelectedTag} />
              <VisibilitySelect value={visibility} onChange={setVisibility} />
            </div>
            <div className="space-y-2">
              <div className="relative">
                <Textarea
                  placeholder="内容を入力してください"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full min-h-[100px] pr-16"
                  maxLength={MAX_CONTENT_LENGTH}
                />
                <span className="absolute right-2 top-2 text-sm text-gray-400">
                  {content.length}/{MAX_CONTENT_LENGTH}
                </span>
              </div>
            </div>
            <AttachmentUpload onUploadComplete={handleAttachmentUpload} />
            <AttachmentPreview attachments={attachments} onRemove={removeAttachment} />
            
            <div className="flex items-center gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
                className="gap-2"
              >
                <Eye className="w-4 h-4" />
                プレビュー
              </Button>
              <Button 
                type="submit" 
                className="min-w-[120px]"
                disabled={createDiscussion.isPending}
              >
                投稿する
              </Button>
            </div>

            <AnimatePresence>
              {showPreview && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <PostPreview
                    title={title}
                    content={content}
                    tag={selectedTag}
                    visibility={visibility}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>投稿の確認</AlertDialogTitle>
            <AlertDialogDescription>
              この内容で投稿してよろしいですか？
              {attachments.length > 0 && (
                <p className="mt-2">
                  添付ファイル: {attachments.length}件
                </p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmedSubmit}
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
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};