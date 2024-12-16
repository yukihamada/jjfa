import { Textarea } from "@/components/ui/textarea";
import { AttachmentUpload } from "../AttachmentUpload";
import { AttachmentPreview } from "../AttachmentPreview";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2 } from "lucide-react";
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
  MAX_CONTENT_LENGTH,
  isSubmitting,
  onSubmit,
}: DiscussionFormInputsProps) => {
  const contentCharCount = formState.content.length;
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
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="今何を考えていますか？"
          value={formState.content}
          onChange={(e) => setFormState(prev => ({ ...prev, content: e.target.value }))}
          className={`min-h-[100px] resize-none text-base leading-relaxed pr-12 ${errors.content ? 'border-red-500' : ''}`}
          maxLength={MAX_CONTENT_LENGTH}
        />
        <span className={`absolute right-3 bottom-3 text-sm ${contentCharCountColor}`}>
          {contentCharCount}/{MAX_CONTENT_LENGTH}
        </span>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <AttachmentUpload onUploadComplete={handleAttachmentUpload}>
            <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600">
              <ImageIcon className="w-5 h-5" />
            </Button>
          </AttachmentUpload>
        </div>
        <Button 
          type="submit" 
          className="px-6"
          disabled={isSubmitting || !formState.content.trim()}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              投稿中...
            </>
          ) : (
            "投稿する"
          )}
        </Button>
      </div>

      <AttachmentPreview attachments={formState.attachments} onRemove={removeAttachment} />
    </form>
  );
};