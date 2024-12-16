import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface EditCommentFormProps {
  content: string;
  onChange: (content: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export const EditCommentForm = ({ content, onChange, onSave, onCancel }: EditCommentFormProps) => {
  return (
    <div className="space-y-2">
      <Textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex gap-2">
        <Button size="sm" onClick={onSave}>
          保存
        </Button>
        <Button size="sm" variant="outline" onClick={onCancel}>
          キャンセル
        </Button>
      </div>
    </div>
  );
};