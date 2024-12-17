import { Textarea } from "@/components/ui/textarea";
import { AttachmentUpload } from "../AttachmentUpload";
import { AttachmentPreview } from "../AttachmentPreview";
import { Button } from "@/components/ui/button";
import { ImageIcon, Loader2, Globe, Users, Lock } from "lucide-react";
import { DiscussionFormState } from "./useDiscussionForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedPlaceholder } from "../AnimatedPlaceholder";

interface DiscussionFormInputsProps {
  formState: DiscussionFormState;
  setFormState: (state: DiscussionFormState | ((prev: DiscussionFormState) => DiscussionFormState)) => void;
  errors: { content?: string };
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
          placeholder={<AnimatedPlaceholder /> as unknown as string}
          value={formState.content}
          onChange={(e) => setFormState(prev => ({ ...prev, content: e.target.value }))}
          className={`min-h-[100px] resize-none text-base leading-relaxed pr-12 ${errors.content ? 'border-red-500' : ''}`}
          maxLength={MAX_CONTENT_LENGTH}
        />
        <span className={`absolute right-3 bottom-3 text-sm ${contentCharCountColor}`}>
          {contentCharCount}/{MAX_CONTENT_LENGTH}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Select 
          value={formState.visibility} 
          onValueChange={(value: 'public' | 'dojo' | 'private') => 
            setFormState(prev => ({ ...prev, visibility: value }))
          }
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="公開範囲を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>全体に公開</span>
              </div>
            </SelectItem>
            <SelectItem value="dojo">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>道場のみ</span>
              </div>
            </SelectItem>
            <SelectItem value="private">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>限定公開</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <AttachmentUpload onUploadComplete={handleAttachmentUpload}>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              <ImageIcon className="w-5 h-5" />
            </Button>
          </AttachmentUpload>
        </div>
        <Button 
          type="submit" 
          className="px-6 ml-4"
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