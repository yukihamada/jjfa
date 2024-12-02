import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface StreamInfoFormProps {
  title: string;
  description: string;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onUpdate?: () => void;
  isStreaming: boolean;
}

export const StreamInfoForm = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onUpdate,
  isStreaming
}: StreamInfoFormProps) => {
  return (
    <div className="space-y-2">
      <Input
        placeholder="配信タイトル"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full"
      />
      <Textarea
        placeholder="配信の説明"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        className="w-full"
      />
      {isStreaming && onUpdate && (
        <Button 
          onClick={onUpdate}
          variant="outline"
          className="w-full"
        >
          配信情報を更新
        </Button>
      )}
    </div>
  );
};