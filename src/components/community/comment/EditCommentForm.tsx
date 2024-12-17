import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

interface EditCommentFormProps {
  content: string;
  onChange: (value: string) => void;
  onSave: () => Promise<void>;
  onCancel: () => void;
}

export const EditCommentForm = ({ content, onChange, onSave, onCancel }: EditCommentFormProps) => {
  return (
    <div className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="button" onClick={onSave}>
          保存
        </Button>
      </div>
    </div>
  );
};