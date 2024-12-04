import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { VisibilitySelect } from "./VisibilitySelect";
import { AttachmentUpload } from "../AttachmentUpload";
import { AttachmentPreview } from "../AttachmentPreview";
import { Button } from "@/components/ui/button";
import { Eye, Loader2, PenSquare } from "lucide-react";
import { DiscussionFormState } from "./useDiscussionForm";

interface DiscussionFormInputsProps {
  formState: DiscussionFormState;
  setFormState: (state: DiscussionFormState | ((prev: DiscussionFormState) => DiscussionFormState)) => void;
  errors: { title?: string; content?: string };
  MAX_TITLE_LENGTH: number;
  MAX_CONTENT_LENGTH: number;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const DiscussionFormInputs = ({
  formState,
  setFormState,
  errors,
  MAX_TITLE_LENGTH,
  MAX_CONTENT_LENGTH,
  isSubmitting,
  onSubmit,
}: DiscussionFormInputsProps) => {
  const titleCharCount = formState.title.length;
  const contentCharCount = formState.content.length;
  const titleCharCountColor = titleCharCount > MAX_TITLE_LENGTH * 0.8 ? "text-red-500" : "text-gray-400";
  const contentCharCountColor = contentCharCount > MAX_CONTENT_LENGTH * 0.8 ? "text-red-500" : "text-gray-400";

  const handleAttachmentUpload = (newAttachments: { url: string; type: string }[]) => {
    setFormState(prev => ({ ...prev, attachments: [...prev.attachments, ...newAttachments] }));
  };

  const removeAttachment = (index: number) => {
    setFormState(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Input
            placeholder="印象的なタイトルを付けてください"
            value={formState.title}
            onChange={(e) => setFormState(prev => ({ ...prev, title: e.target.value }))}
            className={`pr-16 text-lg font-medium ${errors.title ? 'border-red-500' : ''}`}
            maxLength={MAX_TITLE_LENGTH}
          />
          <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-sm ${titleCharCountColor}`}>
            {titleCharCount}/{MAX_TITLE_LENGTH}
          </span>
        </div>

        <div>
          <VisibilitySelect 
            value={formState.visibility} 
            onChange={(value) => setFormState(prev => ({ ...prev, visibility: value }))} 
          />
        </div>

        <div className="relative">
          <Textarea
            placeholder="技術的な詳細、質問、アドバイスなど、できるだけ具体的に書いてみましょう"
            value={formState.content}
            onChange={(e) => setFormState(prev => ({ ...prev, content: e.target.value }))}
            className={`min-h-[200px] resize-y text-base leading-relaxed ${errors.content ? 'border-red-500' : ''}`}
            maxLength={MAX_CONTENT_LENGTH}
          />
          <span className={`absolute right-3 top-3 text-sm ${contentCharCountColor}`}>
            {contentCharCount}/{MAX_CONTENT_LENGTH}
          </span>
        </div>
      </div>

      <AttachmentUpload onUploadComplete={handleAttachmentUpload} />
      <AttachmentPreview attachments={formState.attachments} onRemove={removeAttachment} />
      
      <div className="flex items-center gap-4 justify-end pt-4 border-t">
        <Button
          type="button"
          variant="outline"
          onClick={() => setFormState(prev => ({ ...prev, showPreview: !prev.showPreview }))}
          className="gap-2"
        >
          <Eye className="w-4 h-4" />
          プレビュー
        </Button>
        <Button 
          type="submit" 
          className="min-w-[120px] gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              投稿中...
            </>
          ) : (
            <>
              <PenSquare className="w-4 h-4" />
              投稿する
            </>
          )}
        </Button>
      </div>
    </form>
  );
};